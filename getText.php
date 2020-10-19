<html>

</html>

<?php
// get the q parameter from URL
$q = $_REQUEST["q"];
/*
//$contents = file_get_contents("http://archives.nd.edu/cgi-bin/wordz.pl?keyword=arma");
$url = "http://archives.nd.edu/cgi-bin/wordz.pl?keyword=$q";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Length: 0'));



$contents = curl_exec($ch);
curl_close($ch);
*/
$url = "http://archives.nd.edu/cgi-bin/wordz.pl?keyword=$q";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$contents = curl_exec($ch);
curl_close($ch);

//$contents = "hello'/n'hello";
echo $contents;
//$contents = file_get_contents("http://archives.nd.edu/cgi-bin/wordz.pl?keyword=arma");
//$xml = new SimpleXMLElement("<note>Hello <to>Tove</to><from>Jani</from>World!</note>");

//echo $contents;
//echo strpos($contents,"amici");
// Output "no suggestion" if no hint was found or output correct values
//$hint = "returned";
//echo $q;
?>

<script type="text/javascript">

var content = <?php echo json_encode($contents) ?>;


console.log("content: " + content);
content = content.toString();
content = content.substring(content.toString().indexOf("<pre")+6);
content = content.substring(0, content.toString().indexOf("\n</pre"));
var res = content.toString().split(";\n");
var words = [];

//arr of words
var seps = [];

var defs = [];
var names = [];

//not important

for (var i=0; i<res.length; i++)
{
  var temp = res[i];
  temp = temp.replaceAll("<br>", "");
  if (res[i] == "")
  {
    res.pop(i);
  }
  if (res[i] == "*")
  {
    res.pop(i);
  }
  if (temp.toString().length < 10)
  {
    res.pop(i);
  }
}


var lines = [];

//The possible words (two)
for (var l = 0; l<res.length; l++)
{

  //arr of possible parsings
  var list = [];
  content = res[l];
  lines = content.split("\n");
  for (var z=0; z<lines.length; z++)
  {
    if(z == lines.length-1)
    {
      //Run the def
      lines[z] = lines[z].substring(0, lines[z].indexOf(';')+1);
      defs.push(lines[z]);

    }
    else if(z == lines.length-2)
    {
      //Run the name
      names.push(lines[z]);

    }
    else
    {
      //Run the other
      lines[z] = lines[z].substring(lines[z].indexOf(" "));
      var i = 0;
      var j = 0;
      while (true)
      {
        var a = lines[z].substring(i, i+1);
        if (a != " ")
        {
          break;
        }
        i++;
      }
      while (true)
      {
        var a = lines[z].substring(i+j, i+j+1);
        if (a == " ")
        {
          break;
        }
        j++;
      }

      var pos = (lines[z].substring(i, i+j) + "-");
      lines[z] = lines[z].substring(i+1);
      lines[z] = lines[z].trim();

      if (pos == "N")
      {
        var dec = lines[z].substring(0,1);
        lines[z] = lines[z].substring(1+2);
        lines[z] = lines[z].trim();
        var cas = lines[z].substring(0,3);
        lines[z] = lines[z].substring(1+2);
        lines[z] = lines[z].trim();
        var num = lines[z].substring(0,1);
      }

      var parse = {declension: dec, case: cas, number: num};
      list.push(parse);
    }
  }
    console.log("list" + list);
  console.log(content);

  res[l] = content;
  words.push(lines);
  var word = {def: defs[l], name: names[l], PosArray: list};
  seps.push(word);
}

//console.log(res);
//console.log(words);
//console.log(word);
console.log(seps);


</script>
