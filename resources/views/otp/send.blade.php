<form action="{{ route('otp.send') }}" method="POST">
    @csrf
    <label for="phone_number">Phone Number:</label>
    <input type="text" name="phone_number" id="phone_number" required>
    <button type="submit">Send OTP</button>
</form>
