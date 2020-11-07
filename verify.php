<?php 

session_start();

include "autoload.php";

$e = strtoupper($_REQUEST["e"]);
$u = strtoupper($_REQUEST["u"]);

$servername = "localhost";
$username = env('DB_USERNAME');
$password =  env('DB_PASSWORD');
$dbname =  env('DB_NAME');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($e !== "" && $u !== "") {
    $sql = "UPDATE users SET role = 'verified' WHERE UPPER(username) = '{$u}' AND UPPER(email) = '{$e}'";
    $result = $conn->query($sql);
};

if ($result > 0) {
    $returnStr = "Thank you for verifying your account.";    
} else {
    $returnStr = "Sorry, something went wrong.";
};

echo '<script>alert("' . $returnStr . '"); location.replace("index.php");</script>';

$conn->close();

?>