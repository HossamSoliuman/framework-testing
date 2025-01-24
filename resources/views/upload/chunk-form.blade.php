<!DOCTYPE html>
<html>

<head>
    <title>Chunked File Upload</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    <style>
        .progress {
            width: 100%;
            background-color: #f0f0f0;
            padding: 3px;
            border-radius: 3px;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
            margin: 20px 0;
        }

        .progress-bar-fill {
            display: block;
            height: 22px;
            background-color: #659cef;
            border-radius: 3px;
            transition: width 500ms ease-in-out;
        }
    </style>
</head>

<body>
    <input type="file" id="fileInput">
    <div class="progress-bar" style="display: none;">
        <div class="progress" style="width: 0%">0%</div>
    </div>

    <script src="/js/chunk-uploader.js"></script>
    <script>
        const uploader = new ChunkUploader({
            fileInputId: 'fileInput',
            onProgress: (percent) => {
                const progressBar = document.querySelector('.progress-bar');
                const progress = document.querySelector('.progress');
                progressBar.style.display = 'block';
                progress.style.width = percent + '%';
                progress.textContent = percent + '%';
            }
        });
    </script>
</body>

</html>
