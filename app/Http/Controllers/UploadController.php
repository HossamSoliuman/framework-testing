<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Traits\ChunkUploadTrait;

class UploadController extends Controller
{
    use ChunkUploadTrait;

    public function uploadChunk(Request $request)
    {
        return $this->handleChunkUpload($request);
    }

    public function completeUpload(Request $request)
    {
        return $this->handleUploadComplete($request);
    }
    public function showForm()
    {
        return view('upload.chunk-form');
    }
}
