<?php

namespace App\Traits;

use App\Models\TempFile;
use Illuminate\Support\Facades\File;

trait ManageFiles
{

    public function uploadFile($file, $directory)
    {
        $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $fileName = $originalName . '_' . time() . '.' . $file->extension();
        $filePath = $file->move($directory, $fileName);
        return $filePath;
    }

    public function deleteFile($filePath)
    {
        $file = public_path($filePath);
        $result = File::delete($file);
        return $result;
    }
    public function moveTempFile($fileName, $NewfolderName)
    {
        $sourcePath = storage_path('app/temp/' . $fileName);
        $destinationFolder = public_path('files/' . $NewfolderName);
        if (!file_exists($destinationFolder)) {
            mkdir($destinationFolder, 0755, true);
        }
        $destinationPath = $destinationFolder . '/' . $fileName;
        rename($sourcePath, $destinationPath);
        TempFile::where('file_name', $fileName)->delete();
        $newPath = 'files/' . $NewfolderName . '/' . $fileName;
        return $newPath;
    }
}
