<?php
session_start();

include_once("connect.php");

if (isset($_POST['username']) && isset($_POST['password']))
{
  if ($_POST['username'] != "")
  {
    $usr = $_POST['username'];
    $psw = $_POST['password'];
    $sql_store = "INSERT into users(userName, password) VALUES ('$usr', '$psw')";
    $sql = mysqli_query($db, $sql_store) or die("password has been taken");
  }
  else
  {
    echo "please enter information, jackass";
  }
}
else
{
  echo "please enter information, jackass";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>form submit</title>

</head>
<body>
  <h1>
    please submit the form below
  </h1>
  <form action="formSubmition.php" method="POST">
    <input type="text" name="username" value="" placeholder="username">
    <input type="text" name="password" value="" placeholder="password">
    <input type="submit" name = "submit" value="Submit">
  </form>
</body>
</html>
