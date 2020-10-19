<?php
session_start();

$user = 'pmauser';
$pass = 'Tetradigm1!';
$db = 'LatinDatabase';

$db = new mysqli('localhost', $user, $pass, $db) or die("connection failed");

$myArray = array();
if ($result = $db->query("SELECT * FROM BetaCode"))
{
  while($row = $result->fetch_array(MYSQLI_ASSOC))
  {
    $myArray[] = $row;
  }
  //echo json_encode($myArray);
}

?>
<html>
<body>

Beta <?php $beta = $_POST["beta"]; ?><br>
Welcome <?php echo $_POST["password"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
<script>
  var BetaCodes = <?php echo json_encode($myArray) ?>;
  var allow = false;
console.log(BetaCodes);
  var beta="<?php echo $beta; ?>";
  for (var i=0; i<BetaCodes.length; i++)
  {
    if (BetaCodes[i].code === beta.toUpperCase())
    {
      <?php
        $_SESSION["login"] = $beta;
      ?>
      allow = true;
    }
  }
  if (allow)
  {
    alert("Welcome! Thank you so much for participating in LatinLocator's open Beta! This gives you access to the Aeneid by Vergil so that you may try it out. If you spot any errors, please send an email to Cole at cmorehouse@latinlocator.com. \n Looking for something to look up? Try 'aut puppibus arma'\n Thanks again!");
    window.location.replace("/search.php");
  }
  else
  {
    window.location.replace("/login.php");
  }



</script>
</html>
