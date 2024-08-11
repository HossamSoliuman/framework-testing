<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ManageFiles;

class StudentController extends Controller
{
    use ManageFiles;
    public function upload(Request $request)
    {
        $this->moveTempFile($request->file, 'new files');
        return 'done';
    }
}
