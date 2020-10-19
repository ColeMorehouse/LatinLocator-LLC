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
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
<body>

<div id="container">

<div class="grid-container">

  <div id="Logo" style="background-image: url('NewestLogoBordor.png'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 8fr; visibility: visible !important;"></div>
  <div id="Button1">
  </div>
  <div id="SearchBar" style="display: flex; justify-content: center; align-items: center; visibility: visible !important;">
      <input name="searchBar" type="text" maxlength="120" id="searchBar" style="width: 80%; height: 20%; font-size: 100%; text-align: center; font-family: Gordita;"/>
      <button onclick="getResult()" style="height: 20%; font-size: 100%;">Search</button>

  </div>



  <div id="Results" style="font-size: 120%; padding: 6px; outline-offset: -1px; overflow: scroll; visibility: visible !important;">
    <div id ="author" style='visibility: visible !important;'>
    </div>
    <div id ="title" style='visibility: visible !important;'>
    </div>
    <div id ="book" style='visibility: visible !important;'>
    </div>
    <div id ="line" style='visibility: visible !important;'>
    </div>
  </div>
  <div id="Indexes" style="display: flex; align-items: center; justify-content: center; visibility: visible !important;">
    <button id="preBtn" onclick="helpIncrease(-1)" style="visibility: hidden;">Previous</button>
    <div style="margin-left: 2%; margin-right: 2%;">
      <div id ="results">
      </div>
      <div id ="toc">
      </div>
    </div>
    <button id="nexBtn" onclick="helpIncrease(1)" style="visibility: hidden;">Next</button>
  </div>
  <div id="ParsingBox" style="overflow: scroll; margin-top: 10%; padding: 6px; outline-offset: -1px;">
    <div id="other"> </div>
  </div>
  <div id="NounBox" style="display: flex; justify-content: center; align-items: center; overflow: scroll; margin-top: 10%; padding: 6px; outline-offset: -1px; margin-right: 5%;">
    <div id="nounDef" style="width: auto; height: auto; font-size: 180%; "> </div>
  </div>
  <div id="LatinBox" style="text-align: left; display: flex; align-items: center; justify-content: right; overflow: scroll;">
    <div id="inLatin" style="width: 80%; line-height: 1.5; padding-left: 5%; font-size: 120%; height: 80%; padding: 6px; outline-offset: -1px; overflow: scroll;">
    </div>
  </div>
  <div id="EnglishBox" style="text-align: left; display: flex; align-items: center; justify-content: left; ">
    <div id="inEnglish" style="width: 80%; line-height: 1.5; padding-left: 5%; font-size: 120%; height: 80%;; padding: 6px; outline-offset: -1px; overflow: scroll;">
    </div>
  </div>
  <div id="SumBox">
    <div id="sumDiv" style="text-align: left; overflow-y:scroll; height: auto; padding: 0; margin-left: 10%; padding: 6px; outline-offset: -1px;">
    </div>
  </div>
  <div id="ComBox" style="">
      <div id="inCom" style="text-align: left; overflow:scroll; height: 100%; padding: 0; margin-right: 10%; padding: 6px; outline-offset: -1px;">
      </div>
  </div>
</div>

</div>

</body>



<style>


html
{
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;

/* Full height */
height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;

padding: 0;
margin: 0;
visibility: hidden;
}

body
{
  height: 100% !important;
  /*background-image: url("FullColor.gif");*/

background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;

padding: 0;
margin: 0;
}

/*
#Logo { grid-area: Logo; }
#SearchBar { grid-area: SearchBar; }
#Button1 { grid-area: Button1; }
#Button2 { grid-area: Button2; }
#Results { grid-area: Results; }
#Indexes { grid-area: Indexes; }
#ParsingBox { grid-area: ParsingBox; }
#NounBox { grid-area: NounBox; }

#LatinBox { grid-area: LatinBox; }
#EnglishBox { grid-area: EnglishBox; }
#SumBox { grid-area: SumBox; }
#ComBox { grid-area: ComBox; }

grid-template-areas:
  'Logo Logo Logo SearchBar SearchBar SearchBar SearchBar SearchBar SearchBar Button1 Button1 Button1'
  'Results Results Results Indexes Indexes Indexes ParsingBox ParsingBox ParsingBox NounBox NounBox NounBox'
  'Results Results Results Indexes Indexes Indexes ParsingBox ParsingBox ParsingBox NounBox NounBox NounBox'
  'LatinBox LatinBox LatinBox LatinBox LatinBox LatinBox EnglishBox EnglishBox EnglishBox EnglishBox EnglishBox EnglishBox'
  'LatinBox LatinBox LatinBox LatinBox LatinBox LatinBox EnglishBox EnglishBox EnglishBox EnglishBox EnglishBox EnglishBox'
  'SumBox SumBox SumBox ComBox ComBox ComBox ComBox ComBox ComBox ComBox ComBox ComBox'
  'SumBox SumBox SumBox ComBox ComBox ComBox ComBox ComBox ComBox ComBox ComBox ComBox';
*/

.grid-container
{
  display: grid;


  grid-gap: 10px;
  background-color: red;
  padding: 0;
  height: 100% ;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: white;
}

.grid-container > div
{
  background-color: white;
  text-align: center;
  font-size: 100%;
}

#container
{
  height: 100% !important;
  background-color: green !important;
  width: 100% !important;
}

#Logo
{
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
}

#SearchBar
{
  grid-row: 1 / span 2;
  grid-column: 3 / span 4;
}

#ParsingBox
{
  grid-row: 1 / span 2;
  grid-column: 7 / span 3;
}

#NounBox
{
  grid-row: 1 / span 2;
  grid-column: 10 / span 3;
}

#Results
{
  grid-row: 3;
  grid-column: 6 / span 2;
}

#Indexes
{
  grid-row: 8;
  grid-column: 1 / span 12;
}

#LatinBox
{
  grid-row: 4 / span 2;
  grid-column: 1 / span 6;
}

#EnglishBox
{
  grid-row: 4 / span 2;
  grid-column: 7 / span 6;
}

#SumBox
{
  grid-row: 6 / span 2;
  grid-column: 1 / span 3;
}

#ComBox
{
  grid-row: 6 / span 2;
  grid-column: 4 / span 9;
}

button:hover
{
  cursor: pointer;
}


</style>


<script type="text/javascript">var test = "<?php echo $test;?>";
var LatinArray = <?php echo json_encode($myArray) ?>;
var EnglishArray = <?php echo json_encode($anotherArray) ?>;
var NounArray = <?php echo json_encode($nounArray) ?>;
var ComArray = <?php echo json_encode($comArray) ?>;
var SumArray = <?php echo json_encode($sumArray) ?>;</script>
<script type="text/javascript" src="engine.js"></script>


</html>
