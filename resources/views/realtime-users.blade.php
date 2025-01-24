<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Realtime Users</title>
</head>

<body>
    <h1>Realtime Users</h1>
    <form id="userForm">
        <input type="text" id="name" placeholder="Name" required>
        <input type="email" id="email" placeholder="Email" required>
        <button type="submit">Add User</button>
    </form>

    <h2>User List</h2>
    <ul id="userList"></ul>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
        import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyDpgCpdNyixuG-29ohRsG46KH1p9nKZtE4",
            authDomain: "lara-10-test.firebaseapp.com",
            databaseURL: "https://lara-10-test-default-rtdb.firebaseio.com/",
            projectId: "lara-10-test",
            storageBucket: "lara-10-test.appspot.com",
            messagingSenderId: "1024739151009",
            appId: "1:1024739151009:web:0a5d9418cbff46a3fd34e0",
            measurementId: "G-1NRLK2NTV1"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        const userForm = document.getElementById('userForm');
        const userList = document.getElementById('userList');

        // Listen for real-time updates
        const usersRef = ref(database, 'users');
        onValue(usersRef, (snapshot) => {
            const users = snapshot.val();
            userList.innerHTML = ''; // Clear the list
            if (users) {
                Object.keys(users).forEach((key) => {
                    const li = document.createElement('li');
                    li.textContent = `${users[key].name} (${users[key].email})`;
                    userList.appendChild(li);
                });
            }
        });

        // Add user on form submit
        userForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent form refresh
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            try {
                await push(usersRef, { name, email });
                userForm.reset(); // Clear the form
            } catch (error) {
                console.error('Error adding user:', error);
            }
        });
    </script>
</body>

</html>
