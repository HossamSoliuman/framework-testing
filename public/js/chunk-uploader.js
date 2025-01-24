class ChunkUploader {
    constructor(options = {}) {
        this.chunkSize = options.chunkSize || 2 * 1024 * 1024; 
        this.uploadUrl = options.uploadUrl || '/upload/chunk';
        this.completeUrl = options.completeUrl || '/upload/complete';
        this.fileInputId = options.fileInputId || 'file';
        this.onProgress = options.onProgress || (percent => console.log(`Progress: ${percent}%`));
        this.onComplete = options.onComplete || (response => console.log('Upload complete:', response));
        this.onError = options.onError || (error => console.error('Upload error:', error));

        this.setupListeners();
    }

    setupListeners() {
        const fileInput = document.getElementById(this.fileInputId);
        if (!fileInput) {
            throw new Error(`File input with id '${this.fileInputId}' not found`);
        }

        fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
    }

    async handleFileSelect(e) {
        const file = e.target.files[0];
        if (!file) return;

        const uuid = Date.now().toString();
        const totalChunks = Math.ceil(file.size / this.chunkSize);

        try {
            for (let chunkNumber = 0; chunkNumber < totalChunks; chunkNumber++) {
                const start = chunkNumber * this.chunkSize;
                const end = Math.min(start + this.chunkSize, file.size);
                const chunk = file.slice(start, end);

                await this.uploadChunk(chunk, chunkNumber, totalChunks, uuid, file.name);

                const percentComplete = Math.round((chunkNumber + 1) * 100 / totalChunks);
                this.onProgress(percentComplete);
            }

            const response = await this.completeUpload(uuid, file.name, totalChunks);
            this.onComplete(response);
        } catch (error) {
            this.onError(error);
        }
    }

    async uploadChunk(chunk, chunkNumber, totalChunks, uuid, fileName) {
        const formData = new FormData();
        formData.append('file', chunk);
        formData.append('chunk', chunkNumber);
        formData.append('totalChunks', totalChunks);
        formData.append('uuid', uuid);
        formData.append('fileName', fileName);

        const response = await fetch(this.uploadUrl, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Chunk upload failed: ${response.statusText}`);
        }

        return response.json();
    }

    async completeUpload(uuid, fileName, totalChunks) {
        const response = await fetch(this.completeUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify({ uuid, fileName, totalChunks })
        });

        if (!response.ok) {
            throw new Error(`Upload completion failed: ${response.statusText}`);
        }

        return response.json();
    }
}

// Example usage in your Laravel blade view:
/*
<input type="file" id="fileInput">
<div id="progress"></div>

<script>
const uploader = new ChunkUploader({
    fileInputId: 'fileInput',
    chunkSize: 2 * 1024 * 1024, // 2MB chunks
    onProgress: (percent) => {
        document.getElementById('progress').textContent = `${percent}%`;
    },
    onComplete: (response) => {
        console.log('Upload complete:', response);
    },
    onError: (error) => {
        console.error('Upload failed:', error);
    }
});
</script>
*/