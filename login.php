<?php
session_start();



?>


<!DOCTYPE html>
<html lang="en">



<body>



  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LatinLocator</title>
</head>


<div id="topBar">




<div class="grid-container">

<div style="grid-row: 2 / span 2; grid-column: 2 / span 2;background-image: url('NewestLogoBordorCrop.png'); background-size:contain;background-position: center; background-repeat: no-repeat;">
</div>

<div class="grid-container-two" style="grid-row: 5 / span 4; grid-column: 2 / span 2;background-color: white; width: 50vmax;">
  <div style="grid-row: 1; grid-column: 1 / span 4; ">
    <h1 style="font-family: GorditaLight; padding: 10px; overflow-y: hidden;">Please sign in to Continue</h1>
  </div>
  <div style="grid-row: 2; grid-column: 1; border-top: 1px solid lightgray;"> </div>
  <div style="grid-row: 3; grid-column: 1; ">
    <h3 style="font-family: GorditaLight; margin: 10px; padding: 10px; padding-bottom: 20px; padding-top: 0; font-size: contain; text-decoration: underline; "> <span onclick="forgot()" class="link">Forgot Password?</span>
    </h3>
  </div>
  <div style="grid-row: 4; grid-column: 1;">
    <h3 id="link" style="font-family: GorditaLight; margin: 10px; padding: 10px; padding-bottom: 20px; padding-top: 0; text-decoration: underline; display: block;"> <span id="betaThing" class="link" onclick="betaPop()" style="display: inherit; ">Beta?</span>
    </h3>
    <h3 id="linkS" style="font-family: GorditaLight; margin: 10px; padding: 10px; padding-bottom: 20px; padding-top: 0; text-decoration: underline; display: none;"> <span id="signThing" class="link" onclick="signPop()" style="display: inherit; ">Sign In?</span>
    </h3>
  </div>
  <div style="grid-row: 2 / span 3; grid-column: 2 / span 3; display: flex; align-items: center; justify-content: center;">
    <form action="check.php" method="post" style=" height: 100% !important; width: 100%; border-left: 1px solid lightgray;">

    <div class="grid-container-four" style="height: 100%; width: 100%;">
      <div class="popup" style="grid-row: 1 / span 2; grid-column: 1; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; "><input id="betaIn" style="text-transform:uppercase; font-size: 200%; visibility: hidden;height: 60%; width: 80%; border-radius: 15px; border: 2px solid lightgray; padding-left: 10px; padding-top: 5px; font-family: Gordita;" type="text" name="beta" placeholder="Your Beta Code..."></div>
        <div style=" grid-row: 1; grid-column: 1;"><input id="emIn" style="visibility: visible;height: 60%; width: 80%; border-radius: 15px; border: 2px solid lightgray; padding-left: 10px; padding-top: 5px; font-size: 100%; font-family: Gordita;" type="text" name="email" placeholder="Your Email..."></div>
        <div style="grid-row: 2; grid-column: 1;"><input id="psIn" style="height: 60%; width: 80%; border-radius: 15px; border: 2px solid lightgray; padding-left: 10px; padding-top: 5px; font-size: 100%; font-family: Gordita;" type="password" name="password" placeholder="Your Password..."></div>
        <div style="grid-row: 3; grid-column: 1;"><input id="butt" style="width: 60%; height: 80%; border-radius: 15px; border: 2px solid lightgray; cursor: pointer; font-size: 100%; font-family: Gordita; padding-top: 5px;" type="submit" value="Continue"></div>
    </div>
  </form>

  </div>
</div>


</div>

<div id ="footer">
  <p>
  3000 K Street<br> Washington D.C, 20007 <br>
  </p>
  <p>
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-instagram"></a>
  </p>
  <p>
11718 Bowman Green Drive <br> Reston, VA 20190 <br>  </p>
</div>



<style>

html
{
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
background-color: white;

/* Full height */
height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}



iframe
{
  object-fit:cover;
}

input:focus
{
outline: 0px solid gray;
border: 2px solid black !important;
}

.link:hover
{
  cursor: pointer;
  font-weight: bold;
  color: blue;
}

@font-face
{
   font-family: "Gordita";
   src: url(GorditaRegular.otf);
   font-weight: normal;
}

@font-face
{
  font-family: "GorditaLightItalic";
  src: url(Gordita_Light_Italic.otf);
  font-weight: lighter;
}

@font-face
{
  font-family: "ROMAN";
  src: url(Baskervville-Regular.otf);
}

@font-face
{
  font-family: "GorditaLight";
  src: url(Gordita_Light.otf);
}

.grid-container
{
  display: grid;
  background-color: white;
  height: 100%;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.grid-container-two
{
  display: grid;
  background-color: purple;
  height: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
}

.grid-container-four
{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
}

.link:hover
{
  cursor: pointer;
}





#small
{
  height: 100%;
  width: 100%;

}

#butt:hover
{
  border: 2px solid black !important;
}


body
{
  height: 9px;
  /*background-image: url("FullColor.gif");*/

background-repeat: no-repeat;
background-attachment: fixed;
background-size: 100% 100%;
}





  #footer
  {
   position: fixed;
   left: 0;
   bottom: 0;
   height: 8%;
   width: 100%;

   color: black;
   text-align: center;
   font-size: 64%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: darkgray;
   opacity: 0.8;

  }

  #farLeft
  {
    height: 80%;
    width: 0%;
    float: left;
    background-color: purple;
      opacity: 0.6;
  }

#farRight
{
  height: 80%;
  width: 100%;
  float: right;
  background-color: purple;
    opacity: 0.6;
    display: inline-block;
    position: relative;




}



#footer p
{

   font-weight: bold;
   width: 33%;
   color: 333333;
   font-family: "GorditaLightItalic";
}
  #topBar
  {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;


    text-align: center;



  }



    .fa {
      padding: 10px;
      font-size: 1.5vw;
      width: 1.5vw;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
      border-radius: 50%;
    }

    .fa:hover {
        opacity: 0.7;
    }

    .fa-facebook {
      background: purple;
      color: #fede32;
    }

    .fa-twitter {
      background: purple;
      color: #fede32;
    }

    .fa-instagram {
      background: purple;
      color: #fede32;
    }

    .fa2 {
      padding: 10px;
      font-size: 1.5vw;
      width: 1.5vw;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
      border-radius: 50%;
    }

    .fa2:hover {
        opacity: 0.7;
    }

    .fa2-facebook {
      background: purple;
      color: #fede32;
    }

    .fa2-twitter {
      background: purple;
      color: #fede32;
    }

    .fa2-instagram {
      background: purple;
      color: #fede32;
    }

  img
  {
    float: left;
    width: 39vh;
    padding-top: 14.5vh;
    padding-left: -4%;
    opacity: 1;
  }


</style>



<script>

//NoLine: ls5j29hb2n
//Line: esp7nfx3i9

var cw = $('.circleBox').width();
$('.circleBox').css({'height':cw+'px'});

var fb = $('#fb').width();
$('#fb').css({'height':fb+'px'});

var tw = $('#tw').width();
$('#tw').css({'height':tw+'px'});

var ig = $('#ig').width();
$('#ig').css({'height':ig+'px'});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
 window.location.href = "http://www.LatinLocator.com/UnderConstruction.html";
}

</script>
<script>
function betaPop()
{
  document.getElementById("emIn").style.visibility = "hidden";
  document.getElementById("psIn").style.visibility = "hidden";
  document.getElementById("betaIn").style.visibility = "visible";
  document.getElementById("linkS").style.display = "block";
  document.getElementById("link").style.display = "none";
  document.getElementById("betaIn").style.zIndex = "30";
  document.getElementById("emIn").style.zIndex = "1";
  document.getElementById("psIn").style.zIndex = "1";


}

function signPop()
{
  document.getElementById("emIn").style.visibility = "visible";
  document.getElementById("psIn").style.visibility = "visible";
  document.getElementById("betaIn").style.visibility = "hidden";
  document.getElementById("linkS").style.display = "none";
  document.getElementById("link").style.display = "block";
  document.getElementById("betaIn").style.zIndex = "1";
  document.getElementById("emIn").style.zIndex = "30";
  document.getElementById("psIn").style.zIndex = "30";
}

function forgot()
{
  alert("Please email cmorehouse@latinlocator.com. It will be resolved soon.");
}
</script>
</div>
</body>

</html>
