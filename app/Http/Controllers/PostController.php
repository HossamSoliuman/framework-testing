<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use Hossam\Licht\Controllers\LichtBaseController;

class PostController extends LichtBaseController
{

    public function index()
    {
        $posts = Post::all();
        $posts = PostResource::collection($posts);
        return view('posts', compact('posts'));
    }

    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->validated());
        return redirect()->route('posts.index');
    }

    public function show(Post $post)
    {
        return $this->successResponse(PostResource::make($post));
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $post->update($request->validated());
        return redirect()->route('posts.index');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('posts.index');
    }
}
