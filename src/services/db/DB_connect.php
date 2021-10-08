<?php 

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "pokedex";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  echo "Connection failed:" . $conn->connect_error;
  die();
}

$conn->close();

?>