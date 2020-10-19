<?php

$user = 'root';
$pass = '';
$db = 'LatinDatabase';

$db = new mysqli('localhost', $user, $pass, $db) or die("connection failed");

$myArray = array();
if ($result = $db->query("SELECT * FROM LatinTexts"))
{
  while($row = $result->fetch_array(MYSQLI_ASSOC))
  {
    $myArray[] = $row;
  }
  //echo json_encode($myArray);
}

$anotherArray = array();
if ($result = $db->query("SELECT * FROM EnglishTexts"))
{
  while($row = $result->fetch_array(MYSQLI_ASSOC))
  {
    $anotherArray[] = $row;
  }
  //echo json_encode($myArray);
}

$nounArray= array();
if ($result = $db->query("SELECT * FROM ProperNouns"))
{
  while($row = $result->fetch_array(MYSQLI_ASSOC))
  {
    $nounArray[] = $row;
  }
  //echo json_encode($myArray);
}

$comArray= array();
if ($result = $db->query("SELECT * FROM EnglishCom"))
{
  while($row = $result->fetch_array(MYSQLI_ASSOC))
  {
    $comArray[] = $row;
  }
  //echo json_encode($myArray);
}

$sumArray= array();
if ($result = $db->query("SELECT * FROM EnglishSum"))
{
  while($row = $result->fetch_array(MYSQLI_ASSOC))
  {
    $sumArray[] = $row;
  }
  //echo json_encode($myArray);
}




$result->close();
$db->close();
$test = "hello world";

?>



<!DOCTYPE html>
<body>

  <head>
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </head>
  <link rel="stylesheet" href="styles.css">
  <h1>

    Search LatinLocator's Databases
  </h1>
  <div id="searchDiv">
    <input name="searchBar" type="text" maxlength="120" id="searchBar"/>
    <button onclick="getResult()">Search</button>
  </div>

<br>
<br>
<div id ="results">
</div>
<div id ="toc">
</div>
<div id="btnDiv">
</div>
<br>



  <div id ="author">
  </div>
  <div id ="title">
  </div>
  <div id ="book">
  </div>
  <div id ="line">
  </div>

  <div id="container">

    <div id="left">
      <div id="inLatin" style="text-align: left;">

      </div>
    </div>

    <div id="right">
      <div id="inEnglish">

      </div>
    </div>
    <div id="comDiv">
      <div id="inCom">

      </div>
      <div id="sumDiv">
      </div>
    </div>
  </div>





<p><span id="txtHint"></span></p>
<p><span id="other"></span></p>
</body>


<script type="text/javascript">var test = "<?php echo $test;?>";
var LatinArray = <?php echo json_encode($myArray) ?>;
var EnglishArray = <?php echo json_encode($anotherArray) ?>;
var NounArray = <?php echo json_encode($nounArray) ?>;
var ComArray = <?php echo json_encode($comArray) ?>;
var SumArray = <?php echo json_encode($sumArray) ?>;</script>
<script type="text/javascript" src="engine.js"></script>


</html>
