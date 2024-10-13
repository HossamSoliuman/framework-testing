<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Generate QR Code</title>
</head>
<body>
    <h1>Generated QR Code</h1>
    <p>UID: {{ $uid }}</p>
    {!! $qrCode !!}
    <br><br>
    <a href="{{ route('scan-qr') }}">Go to Scan QR</a>
</body>
</html>
