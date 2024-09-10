@extends('layouts.app')
@section('app-content')
    <div class="flex">
        @include('layouts.sidebar')
        <main class="flex-1 px-6 py-4">
            @yield('content')
        </main>
    </div>
@endsection
