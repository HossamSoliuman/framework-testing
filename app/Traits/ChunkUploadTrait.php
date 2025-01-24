<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait ChunkUploadTrait
{
    protected $chunkPath = 'chunks';
    protected $finalPath = 'files';
    protected $disk = 'local';

    /**
     * Handle chunk upload
     */
    public function handleChunkUpload(Request $request)
    {
        $request->validate([
            'file' => 'required',
            'chunk' => 'required|integer',
            'totalChunks' => 'required|integer',
            'uuid' => 'required|string',
            'fileName' => 'required|string'
        ]);

        try {
            $chunk = $request->file('file');
            $chunkNumber = $request->input('chunk');
            $uuid = $request->input('uuid');

            $chunkPath = "{$this->chunkPath}/{$uuid}/{$chunkNumber}";
            Storage::disk($this->disk)->put($chunkPath, file_get_contents($chunk));

            return response()->json([
                'success' => true,
                'message' => "Chunk {$chunkNumber} uploaded successfully"
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Chunk upload failed: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Handle completion of chunked upload
     */
    public function handleUploadComplete(Request $request)
    {
        $request->validate([
            'uuid' => 'required|string',
            'fileName' => 'required|string',
            'totalChunks' => 'required|integer'
        ]);

        try {
            $uuid = $request->input('uuid');
            $fileName = $request->input('fileName');
            $totalChunks = $request->input('totalChunks');

            // Verify all chunks
            for ($i = 0; $i < $totalChunks; $i++) {
                $chunkPath = storage_path("app/{$this->chunkPath}/{$uuid}/{$i}");
                if (!file_exists($chunkPath)) {
                    throw new \Exception("Chunk {$i} is missing");
                }
            }

            // Create target directory
            $targetDir = storage_path("app/{$this->finalPath}/{$uuid}");
            if (!file_exists($targetDir)) {
                mkdir($targetDir, 0777, true);
            }

            // Generate final filename
            $finalFileName = time() . '_' . Str::slug(pathinfo($fileName, PATHINFO_FILENAME))
                . '.' . pathinfo($fileName, PATHINFO_EXTENSION);
            $finalPath = $targetDir . '/' . $finalFileName;

            // Combine chunks
            $finalFile = fopen($finalPath, 'wb');
            if ($finalFile === false) {
                throw new \Exception("Could not create output file");
            }

            for ($i = 0; $i < $totalChunks; $i++) {
                $chunkPath = storage_path("app/{$this->chunkPath}/{$uuid}/{$i}");
                $chunkContent = file_get_contents($chunkPath);

                if ($chunkContent === false || fwrite($finalFile, $chunkContent) === false) {
                    fclose($finalFile);
                    unlink($finalPath);
                    throw new \Exception("Error processing chunk {$i}");
                }

                unlink($chunkPath);
            }

            fclose($finalFile);

            // Verify final file
            if (!file_exists($finalPath) || filesize($finalPath) === 0) {
                throw new \Exception("Final file creation failed");
            }

            // Cleanup
            Storage::disk($this->disk)->deleteDirectory("{$this->chunkPath}/{$uuid}");

            return response()->json([
                'success' => true,
                'message' => 'File upload completed successfully',
                'path' => $finalFileName,
                'full_path' => $finalPath
            ]);
        } catch (\Exception $e) {
            // Cleanup on failure
            Storage::disk($this->disk)->deleteDirectory("{$this->chunkPath}/{$uuid}");
            if (isset($finalPath) && file_exists($finalPath)) {
                unlink($finalPath);
            }

            return response()->json([
                'success' => false,
                'message' => 'File completion failed: ' . $e->getMessage()
            ], 500);
        }
    }
}
