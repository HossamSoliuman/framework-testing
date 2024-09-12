@extends('layouts.app')
@section('app-content')
    <div class="mx-auto">
        <div class="flex ">
            <!-- Sidebar -->
            <div class="w-1/6">
                @include('layouts.sidebar')
            </div>

            <!-- Main content -->
            <div class="w-full">
                @yield('content')
            </div>
        </div>
    </div>
@endsection
