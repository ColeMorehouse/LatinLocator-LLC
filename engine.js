

$(document).ready(function(){

  $(".eachWord").hover(function(){

    $(this).css("background-color", "yellow");
    var text = $(this).text();
    //alert(text);
    $('#popup').html(text);
    }, function(){
    $(this).css("background-color", "pink");
    $('#popup').html("");
  });


  $(".nounSp").hover(function(){

    $(this).css("background-color", "yellow");
    var text = $(this).text();
    //alert(text);
    $('#popup').html(text);
    }, function(){
    $(this).css("background-color", "pink");
    $('#popup').html("");
  });
});
var text = "";

  //console.log(AeneidEnArray);
  var returned = [];
  var traverse=0;
  var properNouns = [];
  var a = 200;
  var page = 0;

  function showProcTime(elem, nounID)
  {
    elem.addEventListener("mouseout", clearProcTime);
    elem.innerHTML = '<div class="popupBox">' + NounArray[nounID].def + '</div>';
    elem.style.backgroundColor = "#EFEFEF";
  }

  function clearProcTime(e)
  {

    var elem = e.target;
    elem.removeEventListener("mouseout", clearProcTime);
    elem.innerHTML = NounArray[a].word;
    elem.style.backgroundColor = "#CCCCCC";
  }

  function searchText(searchString)
  {
    var indexes = [];
    var searchedArray = searchString.trim().split(" ");
    for (var j=0; j<LatinArray.length; j++)
    {

      //console.log(j);
      var counter = [0, 0];

      for (var i=0; i<searchedArray.length; i++)
      {
        //console.log(j);
        //console.log(AeneidOneArray[j].content.toLowerCase().indexOf(searchedArray[i]));
        //console.log(AeneidOneArray[j].content);

        if (LatinArray[j].content.toLowerCase().indexOf(searchedArray[i].toLowerCase()) !== -1)
        {
          counter[0]++;
          var lineArray = LatinArray[j].content.toLowerCase().trim().split(" ");
          for (var h=0; h<lineArray.length; h++)
          {
            if (lineArray[h]== (searchedArray[i]).toLowerCase())
            {
              counter[0]++;
              console.log("match!");
            }
          }
        }

        if (counter[0] > 1)
        {
          counter[1] = j+1;
          indexes.push(counter);

        }
      }
    }
    //console.log(indexes);
    indexes = indexes.filter((value, index) => indexes.indexOf(value) == index);


    return indexes;
  }
/*
  function findSection(sectionIndex)
  {
    //console.log(AeneidEnArray);
    for (var i=0; i<AeneidEnArray.length; i++)
    {
      //console.log("got here!!!");
      //console.log("length: " + AeneidEnArray.length)
      //console.log("It is this " + findRange(AeneidEnArray[4].content));
      //console.log("looking for line: " + sectionIndex);
      var arr = [];
      //console.log("AeneidEnArray[i].content = " + AeneidEnArray[i].content);
      arr = findRange(AeneidEnArray[i].content);
      //console.log("arr: " + arr);
      //console.log("AeneidEnArray[i].content = " + AeneidEnArray[i].content);
      if ((arr[1] <= sectionIndex) && (arr[2] >= sectionIndex))
      {
        return i;
      }
    }
    //console.log("book not found");
  }
*/
/*
  function findRange(blockText)
  {
    //console.log("Blcoktext" + blockText);
    var spliced = blockText.substring(blockText.indexOf(">")+1, blockText.indexOf("\n"));
    console.log("spliced" + spliced);
    spliced = spliced.substring(spliced.indexOf(" ")+1);
    //console.log(spliced);

    var bookNumber = spliced.substring(0, spliced.indexOf("."));
    var range = [];
    //range.push(bookNumber);
    spliced = spliced.substring(spliced.indexOf(".")+1);

    range = spliced.split("-");
    range.splice(0,0,bookNumber);
    return range;
    //console.log(range);

  }*/

  function getResult()
  {
    if (typeof getResult.counter == 'undefined' )
    {
        getResult.counter  = 0;
    }
getResult.counter  = 0;
helpIncrease.counter  = 0;
    var intObject = {num: 0};
    var testy = "hic venit";
    var index = 0;
    var tbs = document.getElementById("searchBar").value;
    returned = searchText(tbs);
    document.getElementById("results").innerHTML = "Your search returned " + returned.length + " results";
    console.log("The indexes are " + returned);

    //var next = document.createElement("input");
    //next.type = "button";
    //next.value = "next";
    //next.onclick = helpIncrease(2);
    console.log("counter = " + getResult.counter)
    if (getResult.counter < 1)
    {
      //btnDiv.appendChild(next);
    }
    getResult.counter++;
    document.getElementById("toc").innerHTML = "Viewing number " + (1)  + " out of " + returned.length;
    if (returned.length === 0)
    {

    }
    else
    {
      printResult(index);
    }
    //next.remove();

  }

  function increase()
  {
    traverse+=5;
    printResult(traverse);
  }


  //returns a list of noun objects {id, inlineIndex}
  function checkNouns(lineTBS)
  {
    var nounList = [];
    for (var i=0; i<NounArray.length; i++)
    {
      if (lineTBS.indexOf(NounArray[i].word) !== -1)
      {
        var inlineNoun = {id: i, index: lineTBS.indexOf(NounArray[i].word)};
        nounList.push(inlineNoun);
      }
    }
    return nounList;
  }

function spliceNouns(nounList, longString)
{

  for (var u = 0; u<nounList.length; u++)
  {
    if (checkNouns(longString) == "noun not found")
    {
      //console.log("noun not found, asshole");
    }
    else
    {
      var nounObject = nounList[u];
      console.log("nounObjectJSON = " + JSON.stringify(nounObject));
      var splitSentence = longString.split(" ");
      console.log("splitSentence = " + JSON.stringify(splitSentence));

      for (var j=0; j<splitSentence.length; j++)
      {
        if(NounArray[nounObject.id].word.toLowerCase() === splitSentence[j].toLowerCase())
        {
          console.log("Should match twice");
          splitSentence[j] = "<span~class='nounSp'>" + splitSentence[j] +"</span>";
        }
      }
      for (var j=0; j<splitSentence.length; j++)
      {
        if (j != splitSentence.length-1)
        {
        longString += splitSentence[j] + " ";
        }
longString += splitSentence[j];
      }
      //console.log(nounObject);
      /*
      var start = nounObject.index;
      var end = start + NounArray[nounObject.id].word.length;
      var mid = longString.substring(start, end);
      //console.log("should be 200 " + nounObject.id);
      //console.log(NounArray);
      //console.log(NounArray[nounObject.id].def);
      a = nounObject.id;
      console.log("longString " + longString);
      longString = longString.substring(0, longString.indexOf(mid)) + "<span class='nounSp'>" +mid +"</span>"  + longString.substring(end);
      */

    }
  }
  return longString;
}


  function helpIncrease(delta)
  {
    if (typeof helpIncrease.counter == 'undefined' )
    {
        helpIncrease.counter = 0;
    }
    if (helpIncrease.counter == 0)
    {
      document.getElementById("preBtn").style.visibility = "hidden";
    }
    helpIncrease.counter+=delta;

    if (helpIncrease.counter >= returned.length)
    {
      helpIncrease.counter = 0;
    }
    document.getElementById("toc").innerHTML = "Viewing number " + (helpIncrease.counter+1)  + " out of " + returned.length;
    if (helpIncrease.counter <= 1)
    {
      alert(helpIncrease.counter);
    }
    alert(helpIncrease.counter);

    printResult(helpIncrease.counter);
  }



  function findOverlap(start,end,comArr)
  {
    var startAuthor = LatinArray[start].author;
    var startTitle = LatinArray[start].title;
    var startBook = LatinArray[start].book;
    var startChapter = LatinArray[start].chapter;
    var startLine = LatinArray[start].line;
    var endLine = LatinArray[end].line;


    var actIndexes = [];
    var comText = "";

    for (var k=0; k<comArr.length; k++)
    {
      if (comArr[k].author == startAuthor)
      {
        if (comArr[k].title == startTitle)
        {
          if (comArr[k].book == startBook)
          {
            if (comArr[k].chapter == startChapter)
            {
              if (comArr[k].line >= startLine && comArr[k].line <= endLine)
              {
                actIndexes = [];
                //console.log("hello" + actIndexes);
                for (var h=0; h<comArr.length; h++)
                {//Should be 183
                  if (comArr[h].line == startLine)
                  {
                    actIndexes.push(h-1);
                  }
                }

                for (var j=0; j<actIndexes.length; j++)
                {
                  comText = comText + comArr[actIndexes[j]].content + "<br>";
                }
              }
            }
          }
        }
      }
    }

    return comText;
  }



  function findSum(start, end, sumArray)
  {
    var startAuthor = LatinArray[start].author;
    var startTitle = LatinArray[start].title;
    var startBook = LatinArray[start].book;
    var startChapter = LatinArray[start].chapter;
    var startLine = LatinArray[start].line;
    var endLine = LatinArray[end].line;
    var tbr = "";
    var startRange;
    var endRange;
    for (var k=0; k<sumArray.length; k++)
    {
      startRange = sumArray[k].line;
      endRange = sumArray[k].content.substring( sumArray[k].content.indexOf("-")+1,  sumArray[k].content.indexOf("]"));
      endRange = parseInt(endRange, 10);
      //console.log("endRange = " + endRange);
      if (sumArray[k].author == startAuthor)
      {
        //console.log(startAuthor);
        if (sumArray[k].title == startTitle)
        {
          //console.log(startTitle);
          if (sumArray[k].book == startBook)
          {
            //console.log(startBook);
            if (sumArray[k].chapter == startChapter)
            {
              //console.log(startChapter);
              //console.log(sumArray[k].line + "," + startLine);
              if (startLine > startRange)
              {
                if (startLine < endRange)
                {
                console.log(startLine + ">" + startRange);
                console.log(startLine + "<" + endRange);
                actIndexes = [];
                console.log("poop" + actIndexes);
                for (var h=0; h<sumArray.length; h++)
                {//Should be 183
                  if (sumArray[h].line == startRange)
                  {
                    actIndexes.push(h);
                    //console.log("ACK");
                  }
                }
                }


              }
            }
          }
        }
      }
    }
    console.log(actIndexes);

    for (var j=0; j<actIndexes.length; j++)
    {
      tbr = tbr + sumArray[actIndexes[j]].content + "<br>";
    }
    return tbr;
  }



  function showHint(str)
  {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200)
      {

        //document.getElementById("other").innerHTML = this.responseText;
        document.getElementById("other").innerHTML = "Loading...";
        var obj = this.responseText;
        obj = getParse(obj)
        var info = "";
        for (var y = 0; y<obj.length; y++)
        {

          info += "<b>" + (obj[y].par + "</b>"+ "<br>");
          if (obj[y].name != null)
          {
            obj[y].name = obj[y].name.substring(0, obj[y].name.indexOf(obj[y].par+" "));
            info += (obj[y].name + "<br>");
          }
          info += (obj[y].def + "<br>");
          for (var x=0; x<obj[y].PosArray.length; x++)
          {
            if (obj[y].par == "N")
            {
              info += ("Declension: " + obj[y].PosArray[x].declension + ", " + "Case: " + obj[y].PosArray[x].case + ", " + "Number: " + obj[y].PosArray[x].number + "<br>");
            }
            else if (obj[y].par == "V")
            {
              info += ("Tense: " + obj[y].PosArray[x].tense + ", " + "Conjugation: " + obj[y].PosArray[x].conjugation + ", " + "Voice: " + obj[y].PosArray[x].voice + ", " + "Mood: " + obj[y].PosArray[x].mood + ", " + "Person: " + obj[y].PosArray[x].person + ", " + "Number: " + obj[y].PosArray[x].number + "<br>");
            }
          }
          info += "<br>";
        }
        console.log(info);
        console.log(info.substring(0, 7));
        if (info.substring(0, 7) == "<b>this")
        {
          document.getElementById("other").innerHTML = "Not found, is likely a proper noun or a compounded word";
        }
        else
        {
          document.getElementById("other").innerHTML = info;
        }
      }
    }
    xmlhttp.open("GET", "getText.php?q="+str, true);
    xmlhttp.send();
  }



}




function getParse(content)
{

  content = content.substring(content.indexOf("<pre")+6);
  content = content.substring(0, content.indexOf("\n</pre"));
  var res = content.split(";\n");
  var words = [];

  //arr of words
  var seps = [];

  var defs = [];
  var names = [];

  //not important
  for (var i=0; i<res.length; i++)
  {
    if (res[i] == "")
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

        var pos = (lines[z].substring(i, i+j));
        lines[z] = lines[z].substring(i+1);
        lines[z] = lines[z].trim();

        var dec;
        var cas;
        var num;

        var ten;
        var con;
        var voi;
        var moo;
        var per;


        if (pos == "N")
        {
          dec = lines[z].substring(0,1);
          lines[z] = lines[z].substring(1+2);
          lines[z] = lines[z].trim();
          cas = lines[z].substring(0,3);
          lines[z] = lines[z].substring(1+2);
          lines[z] = lines[z].trim();
          num = lines[z].substring(0,1);
          var parse = {declension: dec, case: cas, number: num};
          list.push(parse);
          console.log();
        }
        if (pos == "V")
        {
          con = lines[z].substring(0,1);
          console.log("con " + con);
          lines[z] = lines[z].substring(1);
          lines[z] = lines[z].trim();
          lines[z] = lines[z].substring(2);
          console.log(lines[z]);

          var i = 0;
          while (true)
          {
            var a = lines[z].substring(i, i+1);
            if (a == " ")
            {
              break;
            }
            i++;
          }

          ten = lines[z].substring(0, i);
          lines[z] = lines[z].substring(i);
          console.log("ten " + ten);
          lines[z] = lines[z].trim();

          i = 0;
          while (true)
          {
            var a = lines[z].substring(i, i+1);
            if (a == " ")
            {
              break;
            }
            i++;
          }

          voi = lines[z].substring(0, i);
          console.log("voi " + voi);
          lines[z] = lines[z].substring(i);
          lines[z] = lines[z].trim();

          i = 0;
          while (true)
          {
            var a = lines[z].substring(i, i+1);
            if (a == " ")
            {
              break;
            }
            i++;
          }

          moo = lines[z].substring(0,i);
          console.log("moo " + moo);
          lines[z] = lines[z].substring(i);
          lines[z] = lines[z].trim();

          i = 0;
          while (true)
          {
            var a = lines[z].substring(i, i+1);
            if (a == " ")
            {
              break;
            }
            i++;
          }

          per = lines[z].substring(0, i);
          console.log("per " + per);
          lines[z] = lines[z].substring(i);
          lines[z] = lines[z].trim();
          num = lines[z];
          console.log("num " + num)



          console.log(lines[z]);
          console.log("verb");
          var parse = {tense: ten, conjugation: con, voice: voi, mood: moo, person: per, number: num};
          list.push(parse);
        }


      }
    }
      console.log("list" + list);
    console.log(content);

    res[l] = content;
    words.push(lines);
    var word = {par: pos, def: defs[l], name: names[l], PosArray: list};
    console.log(word);
    seps.push(word);
  }

  //console.log(res);
  //console.log(words);
  //console.log(word);
  console.log(seps);
  return seps;
}

  function printResult(dispNum)
  {
    var testy = "hic venit";
    var nouns = [];
    var exp = "some text to display";



    //name = {line: int, index: int, disc: string};

    var tbs = document.getElementById("searchBar").value;
    var returned = searchText(tbs);
    //console.log("returned = " + returned);
    //getResults(returned);

    for (var i=0; i<returned.length; i++)
    {
      for (var j=0; j<returned.length-1; j++)
      {
        var t = [];
        if (returned[j][0]<returned[j+1][0])
        {
          t = returned[j];
          returned[j] = returned[j+1];
          returned[j+1] = t;
        }
      }
    }
    //console.log("sorted = " + returned);
    document.getElementById("author").innerHTML = "Author: " + LatinArray[returned[dispNum][1]-1].author;
    document.getElementById("title").innerHTML = "Text: " + LatinArray[returned[dispNum][1]-1].title ;
    document.getElementById("book").innerHTML = "Book: "  + LatinArray[returned[dispNum][1]-1].book;
    document.getElementById("line").innerHTML = "Line Number: " + LatinArray[returned[dispNum][1]-1].line;
    //var text = returned[0] + " - " + AeneidOneArray[returned[0]-1].content;
    var avoidError = 2;
    if (returned[dispNum][1] < 3)
    {
      avoidError = 3-returned[dispNum][1];
    }

    text = "";
    var splitLine = [];

    for (var i=0; i<5; i++)
    {
      if (i==avoidError)
      {
        var longString = LatinArray[returned[dispNum][1]-1-avoidError+i].content;
        //var nounList = checkNouns(longString);
        //longString = spliceNouns(nounList, longString);
        var wordArray = longString.split(" ");
        //alert(JSON.stringify(wordArray));
        for (var v = 0; v<wordArray.length; v++)
        {
          var isNoun = false;

          for (var j=0; j<NounArray.length; j++)
          {
            var end = wordArray[v].replace(/[ ,.]/g, "");
            if (wordArray[v] == NounArray[j].word)
            {
              //alert(end);
              isNoun = true;
              break;
            }
            if (NounArray[j].word == end)
            {
              //alert(end);
              isNoun = true;
              break;
            }
          }
          if (isNoun == true)
          {
            //alert('match');
            wordArray[v] = "<span~class='nounSp'>" + wordArray[v] +"</span>";
            wordArray[v] = "<span~class='eachWord'~style='cursor:~pointer;'>" + wordArray[v] + "</span>";
          }
          else
          {
            wordArray[v] = "<span~class='eachWord'~style='cursor:~pointer;'>" + wordArray[v] + "</span>";
          }
        }


        longString = "";
        for (var v = 0; v<wordArray.length; v++)
        {
          longString += wordArray[v] + "~";
        }



        for (var z=0; z<longString.length; z++)
        {
          var f = longString.substring(z, z+1);
          if (f == "~")
          {
            longString = longString.substring(0, z) + " " + longString.substring(z+1);
          }
        }
        /*
        var start = ;
        var end = LatinArray[returned[dispNum][1]-1-avoidError+i].content.indexOf(thisNoun)+thisNoun.length;
        var mid = longString.substring(start, end);
        console.log("the mid is " + longString.substring(start, end));*/
        console.log("longString" + longString);
        //text += "<b>" + (LatinArray[returned[dispNum][1]-1-avoidError+i].line) +  " - " + LatinArray[returned[dispNum][1]-1-avoidError+i].content + "</b>" + "<br>";
        text += "<b>" + (LatinArray[returned[dispNum][1]-1-avoidError+i].line) +  " - " + longString + "</b>" + "<br>";


        //text += "<b>" + (LatinArray[traverse-5+i].line) +  " - " + LatinArray[traverse-5+i].content + "</b>" + "<br>";
      }
      else
      {
        //text += "" + (LatinArray[traverse-5+i].line) +  " - " + LatinArray[traverse-5+i].content +  "<br>";
        var longString = LatinArray[returned[dispNum][1]-1-avoidError+i].content;
        //var nounList = checkNouns(longString);
        //longString = spliceNouns(nounList, longString);
        var wordArray = longString.split(" ");
        //alert(JSON.stringify(wordArray));
        for (var v = 0; v<wordArray.length; v++)
        {
          var isNoun = false;

          for (var j=0; j<NounArray.length; j++)
          {
            var end = wordArray[v].replace(/[ ,.]/g, "");
            if (wordArray[v] == NounArray[j].word)
            {
              //alert(end);
              isNoun = true;
              break;
            }
            if (NounArray[j].word == end)
            {
              //alert(end);
              isNoun = true;
              break;
            }
          }
          if (isNoun == true)
          {
            //alert('match');
            wordArray[v] = "<span~class='nounSp'>" + wordArray[v] +"</span>";
            wordArray[v] = "<span~class='eachWord'~style='cursor:~pointer;'>" + wordArray[v] + "</span>";
          }
          else
          {
            wordArray[v] = "<span~class='eachWord'~style='cursor:~pointer;'>" + wordArray[v] + "</span>";
          }
        }


        longString = "";
        for (var v = 0; v<wordArray.length; v++)
        {
          longString += wordArray[v] + "~";
        }



        for (var z=0; z<longString.length; z++)
        {
          var f = longString.substring(z, z+1);
          if (f == "~")
          {
            longString = longString.substring(0, z) + " " + longString.substring(z+1);
          }
        }



        text += (LatinArray[returned[dispNum][1]-1-avoidError+i].line) +  " - " + longString + "<br>";
      }
    }
    //traverse-=5;
    var textEn = "";
    for (var i=0; i<5; i++)
    {
      if (i==avoidError)
      {
        //textEn += "<b>" + (EnglishArray[traverse-5+i].line) +  " - " + EnglishArray[traverse-5+i].content + "</b>" + "<br>";
        textEn += "<b>" + (EnglishArray[returned[dispNum][1]-1-avoidError+i].line) +  " - " + EnglishArray[returned[dispNum][1]-1-avoidError+i].content + "</b>" + "<br>";
      }
      else
      {
        //textEn += "<b>" + (EnglishArray[traverse-5+i].line) +  " - " + EnglishArray[traverse-5+i].content + "</b>" + "<br>";
        textEn += (EnglishArray[returned[dispNum][1]-1-avoidError+i].line) +  " - " + EnglishArray[returned[dispNum][1]-1-avoidError+i].content + "<br>";
      }
    }

    text = text.split('~').join(' ')

    document.getElementById("inLatin").innerHTML = text;
    document.getElementById("inEnglish").innerHTML = textEn;
    document.getElementById("inLatin").style.outline = "1px solid grey";
    document.getElementById("inEnglish").style.outline = "1px solid grey";
    document.getElementById("inCom").style.outline = "1px solid grey";
    document.getElementById("sumDiv").style.outline = "1px solid grey";
    document.getElementById("Results").style.outline = "1px solid grey";
    document.getElementById("ParsingBox").style.outline = "1px solid grey";
    document.getElementById("NounBox").style.outline = "1px solid grey";
    document.getElementById("preBtn").style.visibility = "visible";
    document.getElementById("nexBtn").style.visibility = "visible";
    //document.getElementById("comDiv").style.display = "flex";
    //findRange(AeneidEnArray[4].content);
    //console.log((AeneidEnArray[4].content));
    //console.log("this is it: " + findSection(4));

    //console.log("ayyy " + findRange(AeneidOneArray[4].content));
    var comText = "<b> <span style='text-decoration: underline;'>John Conington, 1863 </span> <br> <br> </b>";
    comText += findOverlap(LatinArray[returned[dispNum][1]-1-avoidError].line, LatinArray[returned[dispNum][1]-1-avoidError].line, ComArray);
    comText += findOverlap(LatinArray[returned[dispNum][1]-1-avoidError+1].line, LatinArray[returned[dispNum][1]-1-avoidError+1].line, ComArray);
    comText += findOverlap(LatinArray[returned[dispNum][1]-1-avoidError+2].line, LatinArray[returned[dispNum][1]-1-avoidError+2].line, ComArray);
    comText += findOverlap(LatinArray[returned[dispNum][1]-1-avoidError+3].line, LatinArray[returned[dispNum][1]-1-avoidError+3].line, ComArray);
    comText += findOverlap(LatinArray[returned[dispNum][1]-1-avoidError+4].line, LatinArray[returned[dispNum][1]-1-avoidError+4].line, ComArray);
    document.getElementById("inCom").innerHTML = "" + comText;
    var sumText = "";
    sumText += findSum(LatinArray[returned[dispNum][1]-1-avoidError+2].line, LatinArray[returned[dispNum][1]-1-avoidError+2].line, SumArray);
    document.getElementById("sumDiv").innerHTML = "" + sumText;

    var elements = document.getElementsByClassName("eachWord");
    var nounElements = document.getElementsByClassName("nounSp");

    var myFunction = function() {
        document.getElementById("other").innerHTML = "<span style='font-size: 160%;'>Loading...</span>";
        var thing = this.textContent;
        showHint(thing);
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }

    var showNouns = function()
    {
      var thisNoun = this.textContent;
      console.log("thisNoun -" + thisNoun + "-");
      var tbr = -1;
      for (var h=0; h<NounArray.length; h++)
      {
        if ((thisNoun.replace(/[ ,.]/g, "") == NounArray[h].word.replace(/[ ,.]/g, "")) || (thisNoun.replace(/[ ,.]/g, "") == "class='nounSp'>"+NounArray[h].word.replace(/[ ,.]/g, "")))
        {
          tbr = h;
          break;
        }
      }
      console.log("tbr = " + tbr);
      document.getElementById("nounDef").innerHTML = NounArray[tbr].def;

    };

    var noNouns = function()
    {
      setTimeout(stopIt, 500);


    };

    function stopIt()
    {
document.getElementById("nounDef").innerHTML = "";
    };

    for (var i = 0; i < nounElements.length; i++) {
        nounElements[i].addEventListener('mouseover', showNouns, false);
        nounElements[i].addEventListener('mouseout', noNouns, false);
    }


  }

  //document.getElementById("myForm").onsubmit = function() {showHint("arma")};

  //showHint("arma");
