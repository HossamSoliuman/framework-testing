<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js"></script>

</head>

<body>
    <div id="reader"></div>
    <script>
        function onScanSuccess(decodedText) {
            // Send the scanned UID to the server to check if it’s valid
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

        const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
            fps: 10,
            qrbox: 250
        });
        html5QrcodeScanner.render(onScanSuccess);
    </script>

</body>

</html>
