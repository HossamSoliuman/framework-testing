@extends('layouts.admin')
@section('content')
    <div class="container mt-5">
        <div class="row justify-content-center mt-5">
            <div class="col-md-11">
                <h1>Posts</h1>
                <button type="button" class=" mb-3 btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                    Create a new Post
                </button>

                <!-- Creating Modal -->
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1"
                    role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">New Post</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="{{ route('posts.store') }}" method="post">
                                    @csrf
									<div class="form-group">
										<input type="text" name="name" class="form-control" placeholder="Post name" required>
									</div>
									<div class="form-group">
										<input type="text" name="likes_count" class="form-control" placeholder="Post likes_count" required>
									</div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Edit Post Modal -->
                <div class="modal fade" id="editModal" data-backdrop="static" data-keyboard="false" tabindex="-1"
                    role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editModalLabel">Edit Post</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="editForm" method="post">
                                    @csrf
                                    @method('PUT')@csrf
									<div class="form-group">
										<input type="text" name="name" class="form-control" placeholder="Post name" required>
									</div>
									<div class="form-group">
										<input type="text" name="likes_count" class="form-control" placeholder="Post likes_count" required>
									</div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" id="saveChangesBtn">Save Changes</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <table class="table">
                    <thead>
                        <tr>
							<th> Name</th>
							<th> Likes_count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       @foreach ($posts as $post)
                            <tr data-post-id="{{ $post->id }}">
							<td class=" post-name">{{ $post->name }}</td>
							<td class=" post-likes_count">{{ $post->likes_count }}</td>
                                <td class="d-flex">
                                    <button type="button" class="btn btn-warning btn-edit" data-toggle="modal"
                                        data-target="#editModal">
                                        Edit
                                    </button>
                                    <form action="{{ route('posts.destroy', ['post' => $post->id]) }}"
                                        method="post">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class=" ml-3 btn btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function() {
            $('.btn-edit').on('click', function() {
				var PostName = $(this).closest("tr").find(".post-name").text();
				$('#editModal input[name="name"]').val(PostName);
				var PostLikes_count = $(this).closest("tr").find(".post-likes_count").text();
				$('#editModal input[name="likes_count"]').val(PostLikes_count);
                var PostId = $(this).closest('tr').data('post-id');
                $('#editForm').attr('action', '/posts/' + PostId);
                $('#editModal').modal('show');
            });
            $('#saveChangesBtn').on('click', function() {
                $('#editForm').submit();
            });
        });
    </script>
@endsection
