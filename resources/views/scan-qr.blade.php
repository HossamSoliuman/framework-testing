<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Scan QR Code</title>
    <script src="https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js"></script>
</head>
<body>
    <h1>Scan QR Code</h1>
    <div id="reader" style="width: 300px;"></div>

    <script>
        function onScanSuccess(decodedText) {
            fetch(`/check-qr/${decodedText}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'valid') {
                        alert('QR Code is valid!');
                    } else {
                        alert('QR Code is not valid.');
                    }
                });
        }

        const html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
        html5QrcodeScanner.render(onScanSuccess);
    </script>
</body>
</html>
