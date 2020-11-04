<?php 

include "autoload.php";

$servername = "localhost";
$username = env('DB_USERNAME');
$password =  env('DB_PASSWORD');
$dbname =  env('DB_NAME');

$e = strtoupper($_REQUEST["e"]);
$p = $_REQUEST["p"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($e !== "" && $pwd !== "") {
    $sql = "SELECT * FROM users WHERE UPPER(email) = '{$e}'";
    $result = $conn->query($sql);
};

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