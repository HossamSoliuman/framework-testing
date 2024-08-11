<?php

namespace App\Http\Controllers;

use App\Models\TempFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class TempFileController extends Controller
{
    public function store(Request $request)
    {
        $this->deleteOldFiles();

        $files = $request->file('file');
        if (!is_array($files)) {
            $files = [$files];
        }

        $storedFiles = [];
        foreach ($files as $file) {
            $originalName = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $date = time();
            $fileName = str_replace(' ', '_', $originalName) . '_' . $date . '.' . $file->extension();
            $file->storeAs('temp', $fileName);
            TempFile::create([
                'file_name' => $fileName
            ]);
            $storedFiles[] = $fileName;
        }

        return response()->json(['file_names' => $storedFiles]);
    }

    private function deleteOldFiles()
    {
        $files = Storage::files('temp');
        $oneHourAgo = Carbon::now()->subHour();

        foreach ($files as $file) {
            $lastModified = Carbon::createFromTimestamp(Storage::lastModified($file));
            if ($lastModified->lessThan($oneHourAgo)) {
                Storage::delete($file);
                TempFile::where('file_name', basename($file))->delete();
            }
        }
    }
}
