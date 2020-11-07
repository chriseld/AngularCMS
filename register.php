<?php

session_start();

include "autoload.php"; ?>

<?php

$servername = "localhost";
$username = env('DB_USERNAME');
$password =  env('DB_PASSWORD');
$dbname =  env('DB_NAME');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$regEmail = $_GET['e'];
$regUsername = $_GET['u'];
$regPassword = $_GET['p'];

$regPassword = password_hash($regPassword, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (email, username, password, role) VALUES ('{$regEmail}', '{$regUsername}', '{$regPassword}', 'user')";
$result = $conn->query($sql);

$sql = "SELECT * FROM users WHERE UPPER(email) = '{$regEmail}'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    $fieldinfo = mysqli_fetch_array($result, MYSQLI_ASSOC);

    $hash = $fieldinfo['password'];

    if (password_verify($p, $hash)) {
        $_SESSION["userid"] = $fieldinfo['id'];
        $_SESSION["username"] = $fieldinfo['username'];
        $_SESSION["role"] = $fieldinfo['role'];

        $sql = "UPDATE users SET lastlogin = NOW() WHERE UPPER(email) = '{$e}'";
        $res = $conn->query($sql);
    };
}

$conn->close();

?>