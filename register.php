<?php

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

$conn->close();

?>