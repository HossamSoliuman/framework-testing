@isset($message)
    <p>{{ $message }}</p>
@endisset
<form action="{{ route('otp.verify') }}" method="POST">
    @csrf
    <input type="hidden" name="phone_number" value="{{ $phone_number }}">
    <p>{{ $phone_number }}</p>
    <label for="otp">Enter OTP:</label>
    <input type="text" name="otp">
    <button type="submit">Verify OTP</button>
    <a href="{{ route('otp.form') }}">send a new otp</a>
</form>
