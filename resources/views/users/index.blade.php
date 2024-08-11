@extends('layouts.app')
@section('app-content')
    @foreach ($users as $user)
        <div class="card w-50 m-24 mb-3 ">
            <h3>{{ $user->name }}</h3>
            <p>{{ $user->email }}</p>
        </div>
    @endforeach
    {{ $users->links() }}
@endsection
