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

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>

<?php
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>e-pulp</title>
    <link rel="icon" type="image/png" href="./images/icons/fav.png">
    <link rel="stylesheet" href="/style/style.css">
</head>
<body>
    
<div class="container">
<header>
    <h1 class="bannerText">e-pulp</h1>
</header>

<main>

     <nav>
        <img src="/images/icons/darkmode.png" id="switch" onclick="toggleTheme()"></img>
        <img src="/images/icons/profile-dark.png" alt="Log in/register" id="accountModalBtn" onclick="toggleModal('login')">
     </nav>

    <article>
        
    </article>

    <aside>
            
    </aside>

</main>

<footer>
    <p class="copyright">&copy; Chris Eld, 2020</p>
</footer>

<div class="modal">
    <div class="modalBox"></div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="/script/script.js"></script>

</body>
</html>