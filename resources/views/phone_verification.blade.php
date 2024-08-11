<html>
    <head>
        <title>Laravel 8 Mobile Number (OTP) Authentication using Firebase - websolutionstuff.com</title>    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </head>
<body>  
<div class="container">
    <h3 style="margin-top: 30px;">Laravel 8 Mobile Number (OTP) Authentication using Firebase - websolutionstuff.com</h3><br>  
    <div class="alert alert-danger" id="error" style="display: none;"></div>  
    <div class="card">
      <div class="card-header">
        Enter Phone Number
      </div>
      <div class="card-body">  
        <div class="alert alert-success" id="sentSuccess" style="display: none;"></div>
        <form>
            <label>Phone Number:</label>
            <input type="text" id="number" class="form-control" placeholder="+91 9876543210"><br>
            <div id="recaptcha-container"></div><br>
            <button type="button" class="btn btn-success" onclick="SendCode();">Send Code</button>
        </form>
      </div>
    </div>
      
    <div class="card" style="margin-top: 10px">
      <div class="card-header">
        Enter Verification code
      </div>
      <div class="card-body">
        <div class="alert alert-success" id="successRegsiter" style="display: none;"></div>
        <form>
            <input type="text" id="verificationCode" class="form-control" placeholder="Enter Verification Code"><br>
            <button type="button" class="btn btn-success" onclick="VerifyCode();">Verify Code</button>
        </form>
      </div>
    </div>
  
</div>
  
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>
  
<script>
      
//   var firebaseConfig = {
//     apiKey: "XXXX",
//     authDomain: "XXXX.firebaseapp.com",
//     databaseURL: "XXXX.firebaseio.com",
//     projectId: "XXXX",
//     storageBucket: "XXXX.appspot.com",
//     messagingSenderId: "XXXX",
//     appId: "XXXX",
//     measurementId: "XXXX"
//   };
  
  const firebaseConfig = {
    apiKey: "AIzaSyBXNtIk6uLjQtf98JCf20cdiUoSYwU9Fk4",
    authDomain: "saada-4a54d.firebaseapp.com",
    projectId: "saada-4a54d",
    storageBucket: "saada-4a54d.appspot.com",
    messagingSenderId: "581263205971",
    appId: "1:581263205971:web:01733857d047716a1d08a6",
    measurementId: "G-EX2497D5KM"
};

  firebase.initializeApp(firebaseConfig);
</script>
  
<script type="text/javascript">
  
    window.onload=function () {
      render();
    };
  
    function render() {
        window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
        recaptchaVerifier.render();
    }
  
    function SendCode() {
           
        var number = $("#number").val();
          
        firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
              
            window.confirmationResult=confirmationResult;
            coderesult=confirmationResult;            
  
            $("#sentSuccess").text("Message Sent Successfully.");
            $("#sentSuccess").show();
              
        }).catch(function (error) {
            $("#error").text(error.message);
            $("#error").show();
        });
  
    }
  
    function VerifyCode() {
  
        var code = $("#verificationCode").val();
  
        coderesult.confirm(code).then(function (result) {
            var user=result.user;            
  
            $("#successRegsiter").text("You Are Register Successfully.");
            $("#successRegsiter").show();
  
        }).catch(function (error) {
            $("#error").text(error.message);
            $("#error").show();
        });
    }
  
</script>
  
</body>
</html>
