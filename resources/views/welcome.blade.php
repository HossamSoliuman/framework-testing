@extends('layouts.app')

@section('app-content')
    <div id="app-content" class="container flex items-center justify-center min-h-screen">
        <div class="desktop-view w-full  min-h-screen flex items-center justify-center">
            <div class="card w-1/2 h-96 flex items-center justify-center shadow-md">
                <div class="card-body w-4/5 flex flex-col items-center h-full">
                    <h5 class="card-title">Your data</h5>
                    <input type="email" class="form-control input-custom mt-3 text-center" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Enter email">
                    <input type="password" class="form-control input-custom mt-3 text-center" placeholder="Enter password">
                    <button class="btn-custom mt-3">Submit</button>
                </div>
            </div>
        </div>

        <div class="mobile-view hidden">
            <div class="flex items-center justify-center min-h-screen">
                <div class="card w-full h-96">
                    <div class="card-body w-full flex flex-col items-center h-full">
                        <h5 class="card-title">Your data</h5>
                        <input type="email" class="form-control input-custom mt-3 text-center" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter email">
                        <input type="password" class="form-control input-custom mt-3 text-center"
                            placeholder="Enter password">
                        <button class="btn-custom mt-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            function checkScreenWidth() {
                if (window.innerWidth <= 768) {
                    $('.desktop-view').hide();
                    $('.mobile-view').show();
                } else {
                    $('.desktop-view').show();
                    $('.mobile-view').hide();
                }
            }

            checkScreenWidth();

            $(window).resize(function() {
                checkScreenWidth();
            });
        });
    </script>
@endsection
