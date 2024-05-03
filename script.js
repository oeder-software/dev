let l1 = ['e','f','c','h','g','i','b','a','d'];
let l2 = ['g','a','i','d','b','c','f','e','h'];
let l3 = ['b','h','d','e','f','a','c','i','g'];
let l4 = ['d','b','f','a','e','g','i','h','c'];
let l5 = ['a','i','e','f','c','h','d','g','b'];
let l6 = ['h','c','g','b','i','d','a','f','e'];
let l7 = ['i','d','h','c','a','e','g','b','f'];
let l8 = ['f','e','a','g','d','b','h','c','i'];
let l9 = ['c','g','b','i','h','f','e','d','a'];
let init= [1,2,3,4,5,6,7,8,9]
let seed = [];
let rndList = [];
let rndIndex = [];
var remNum = [];
var cellNum;
var startTime; // to keep track of the start time
var stopwatchInterval; // to keep track of the interval
var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped
//import { startStopwatch } from "./stopwatch.js";
var level = "easy";
function OnClickCell(cell)
{
  document.getElementById("clear").style.display="none"
  document.getElementById(cell).style.cursor="not-allowed"
  document.getElementById("numbers").hidden=true
  RemCellColor()
  var indexOfLine = cell[1];
  var indexOfPosition = cell[2]
  cellNum = cell;
  var empCell = "#" + cell;
  var isEmpty = false;
  remNum.forEach(item => {
    if(item == empCell){
      isEmpty = true;
      //document.getElementById(cell).style.background="#dffaf9"
      //document.getElementById("clear").style.display="block"
      for(i = 1; i < 10; i++)
      {
        document.getElementById('l' + indexOfLine + i).style.background="#dffaf9"
      }
      for(i=1; i<10; i++)
      {
        document.getElementById('l' + i+ indexOfPosition).style.background="#dffaf9"
      }
      //document.getElementById(cell).style.background='white'
    }
  });
  if(isEmpty){
    document.getElementById("numbers").hidden=false
    document.getElementById("clear").style.display="block"
    document.getElementById(cell).style.cursor="pointer"
  }
}

function UpdateBoard(){
l1 = ['e','f','c','h','g','i','b','a','d'];
l2 = ['g','a','i','d','b','c','f','e','h'];
l3 = ['b','h','d','e','f','a','c','i','g'];
l4 = ['d','b','f','a','e','g','i','h','c'];
l5 = ['a','i','e','f','c','h','d','g','b'];
l6 = ['h','c','g','b','i','d','a','f','e'];
l7 = ['i','d','h','c','a','e','g','b','f'];
l8 = ['f','e','a','g','d','b','h','c','i'];
l9 = ['c','g','b','i','h','f','e','d','a'];

  init= [1,2,3,4,5,6,7,8,9]
  seed=[]
  rndIndex = [];
  remNum = [];
  rndList=[]
  
  RandomSeed(init, 9, seed)

  for(i=0; i<35; i++)
  {  
  var rndInt = randomLI(1, 9, rndList);
  rndList.push(rndInt);
  }
  for(i=0; i<35; i++)
  {
    var rndInt = randomLI(0,8, rndIndex);
    rndIndex.push(rndInt);
  }
  ResetInsertNumber()
  FillList(l1);
  FillList(l2);
  FillList(l3);
  FillList(l4);
  FillList(l5);
  FillList(l6);
  FillList(l7);
  FillList(l8);
  FillList(l9);
  RemCellColor()
  Mix();
}
function Easy(){
    stopStopwatch()
    resetStopwatch()
  level="easy";
  startStopwatch();
  document.getElementById("easy").style.background="Red"
  document.getElementById("medium").style.background="DarkBlue"
  document.getElementById("hard").style.background="DarkBlue"
  document.getElementById("medium").innerHTML="medium"
  document.getElementById("hard").innerHTML="hard"
  document.getElementById("test").style.visibility = "hidden";
  UpdateBoard()
  RemCell(2)
}
function Medium(){
    stopStopwatch()
    resetStopwatch()
  level = "medium"
  startStopwatch()
  document.getElementById("medium").style.background="Red"
  document.getElementById("easy").style.background="DarkBlue"
  document.getElementById("hard").style.background="DarkBlue"
  document.getElementById("easy").innerHTML="easy"
  document.getElementById("hard").innerHTML="hard"
  document.getElementById("test").style.visibility = "hidden";
  UpdateBoard()
  RemCell(30)

}
function Hard(){
  if(stopwatchInterval != null)
  {
    stopStopwatch()
    resetStopwatch()
  }
  level = "hard"
  startStopwatch()
  document.getElementById("hard").style.background="Red"
  document.getElementById("easy").style.background="DarkBlue"
  document.getElementById("medium").style.background="DarkBlue"
  document.getElementById("easy").innerHTML="easy"
  document.getElementById("medium").innerHTML="medium"
  document.getElementById("test").style.visibility = "hidden";
  UpdateBoard()
  RemCell(40)

}
function RandomSeed (arrayIn,length, arrayOut)
{
	for(i=0; i<length; i++)
	{
	var rnd = arrayIn[Math.floor(Math.random() *arrayIn.length)] ;
	arrayOut.push(rnd);
    let indexOfRnd = arrayIn.indexOf(rnd); 
      if(indexOfRnd > -1)
      {
        arrayIn.splice(indexOfRnd,1);
      }
    }
}
RandomSeed(init, 9, seed)
            
function randomLI(min, max, outList) 
{ 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// for(i=0; i<81; i++)
// {  
// var rndInt = randomLI(1, 9, rndList);
// rndList.push(rndInt);
// }
// for(i=0; i<81; i++)
//   {
//     var rndInt = randomLI(0,8, rndIndex);
//     rndIndex.push(rndInt);
//   }

FillList(l1);
FillList(l2);
FillList(l3);
FillList(l4);
FillList(l5);
FillList(l6);
FillList(l7);
FillList(l8);
FillList(l9);
Mix();


function FillList(list)
{
   for(j=0; j<seed.length; j++)
   {
     switch(j)
     {
     case 0:
         list.splice(list.indexOf('a'), 1, seed[j]);
       break;
     case 1:
         list.splice(list.indexOf('b'), 1, seed[j]);
       break;
     case 2:
         list.splice(list.indexOf('c'), 1, seed[j]);
       break;
     case 3:
         list.splice(list.indexOf('d'), 1, seed[j]);
       break;
     case 4:
         list.splice(list.indexOf('e'), 1, seed[j]);
       break;
     case 5:
         list.splice(list.indexOf('f'), 1, seed[j]);
       break;
     case 6:
         list.splice(list.indexOf('g'), 1, seed[j]);
       break;
     case 7:
         list.splice(list.indexOf('h'), 1, seed[j]);
       break;
     case 8:
         list.splice(list.indexOf('i'), 1, seed[j]);
       break;
     }
   } 
}

function Print(list, str)
{
  for(i=0; i<list.length; i++)
  {
      document.querySelector("#"+str+(1+i)).innerText=list[i];
  }
}

function RemCell(length)
{
    numToRemove = length;
    Print(l1, 'l1');
    Print(l2, 'l2');
    Print(l3, 'l3');
    Print(l4, 'l4');
    Print(l5, 'l5');
    Print(l6, 'l6');
    Print(l7, 'l7');
    Print(l8, 'l8');
    Print(l9, 'l9');
    
    while(remNum.length < length)
    {
        for(i=0; i<81; i++)
    {  
      var rndInt = randomLI(1, 9, rndList);
      rndList.push(rndInt);
      }
      for(i=0; i<81; i++)
        {
          var rndInt = randomLI(0,8, rndIndex);
          rndIndex.push(rndInt);
        }
      for(i=0; i<length; i++)
    {
        let cellToRem= '#l'+ rndList[i] + (rndIndex[i]+1);
        //document.querySelector(cellToRem).innerHTML="<input type = 'text'>"
        document.querySelector(cellToRem).innerHTML=""

        remNum.push(cellToRem)
        let reprociList = 9-rndList[i] + 1;
        let reprociIndex = 9-rndIndex[i]
        let reprociCellToRem = '#l' + reprociList + reprociIndex
        document.querySelector(reprociCellToRem).innerHTML=""
        // document.querySelector(reprociCellToRem).innerHTML="<input type = 'text'>"

        remNum.push(reprociCellToRem)
    }
    for (i=0; i<remNum.length; i++)
    {
      var num = 0;
      for(j=0; j<remNum.length; j++ )
      {
        if(remNum[i] == remNum[j])
        {
          num++;
          if(num>1)
          {
            var indx = remNum.indexOf(remNum[j])
            remNum.splice(indx, 1)
            num--;
          }
        }
      }
    }
}
}

function Check()
{
  var numExist;
  // for(i=0; i<remNum.length; i++)
  for(i=remNum.length-1; i >= 0; i--)
  { 
        var line = []
        line = remNum[i].charAt(2)
        let line1;
        var index = []
        index = remNum[i].charAt(3)
        let indexNum;
        switch (index)
        {
            case "1":
                indexNum = 1-1;
                break;
            case "2":
                indexNum = 2-1;
                break;
            case "3":
                indexNum = 3-1;
                break;
            case "4":
                indexNum = 4-1;
                break;
            case "5":
                indexNum = 5-1;
                break;
            case "6":
                indexNum = 6-1;
                break;
            case "7":
                indexNum = 7-1;
                break;
            case "8":
                indexNum = 8-1;
                break;
            case "9":
                indexNum = 9-1;
                break;
        }
        switch (line)
        {
            case "1":
                line1 = l1;
                break;
            case "2":
                line1 = l2;
                break;
            case "3":
                line1 = l3;
                break;
            case "4":
                line1 = l4;
                break;
            case "5":
                line1 = l5;
                break;
            case "6":
                line1 = l6;
                break;
            case "7":
                line1 = l7;
                break;
            case "8":
                line1 = l8;
                break;
            case "9":
                line1 = l9;
                break;

            }
            let y = 'l' + line + index;
/*         let cellValue = document.getElementById(y).childNodes[0].value;
 */  
let cellValue = document.getElementById(y).innerHTML;
let num = line1[indexNum];
        let cellValueInt = parseInt(cellValue);
      
      
            if ( cellValueInt== num)
              {
/*                         document.getElementById(y).childNodes[0].style.color='green';
 */        
                  document.getElementById(y).style.color="green";
                  var numToRem = "#" +y;
                  var indxofNum = remNum.indexOf(numToRem);
                  remNum.splice(indxofNum,1);
              }
              else
              {
                document.getElementById(y).style.color="red";
              }
              if( cellValue == "" || cellValueInt != num)
              {
                numExist == false;
              }
              else
              {
                  numExist = true;
              }
              
            }
            if(remNum.length == 0)
            {
              stopStopwatch();
           
              document.getElementById("test").style.visibility = "visible";
              document.getElementById("hard").innerHTML="Hard"
              document.getElementById("medium").innerHTML="Medium"
              document.getElementById("easy").innerHTML="Easy"
              document.getElementById("easy").style.background="DarkBlue"
              document.getElementById("medium").style.background="DarkBlue"
              document.getElementById("hard").style.background="DarkBlue"

              // document.getElementById("test").innerHTML="Good job!";
            }
}

function Mix()
{
  let temp = [];
  
  for(i=1; i<10; i+=3)
    {
     let one = eval("l"+i);
     let two = eval("l"+(i+1)); 
     temp=one;
     one=two;
     two=temp;
      for(j=1; j<10; j++)
    {
      var en =eval("l"+ j)
      en.splice(i+1, 0, en[i-1])
      en.splice(i-1, 1)
      var en =l1;
      var ind = en[0];
    }
    }
  
}
function MixRow(start, slut)
{
  let rows =[];
  let row =[];
  let colums = [];
  let colum = [];
  let tempLine = [];
  let rndMix = Math.floor(Math.random()*11);
  
  for (i=start; i<slut; i++)
    {
      rows.push(i);
      colums.push(i)
    }
  
  for(i=0; i<3; i++)
    {
      let num=rows[Math.floor(Math.random()*rows.length)];
      row.push(num); 
      let numColum = colums[Math.floor(Math.random()*colums.length)];
      colum.push(numColum);
      let rowIndex = rows.indexOf(num);
      let columIndex = colums.indexOf(numColum);
    }
    for(i=0; i<row.length; i++)
      {
        if(parseInt(row[i])==start)
          {
            let line1 = eval('l' + row[i]);
            let line2 = eval('l'+row[i+1]);
            tempLine=line1;
            line1=line2;
            line2=tempLine;
          }
       if(parseInt(row[i])==start+1)
          {
            let line1 = eval('l' + row[i]);
            let line2 = eval('l'+row[i+1]);
            tempLine=line1;
            line1=line2;
            line2=tempLine;
          }
        if(parseInt(row[i])==start+2)
          {
            let line1 = eval('l' + row[i]);
            let line2 = eval('l'+row[start]);
            tempLine=line1;
            line1=line2;
            line2=tempLine;
          }
          
              
          
  }
}
  
  function Cheat()
  {
    var cheat = remNum[Math.floor(Math.random() *remNum.length)]
    var line = cheat.charAt(1) + cheat.charAt(2);
    var index = cheat.charAt(3)
    var findLine = eval(line);
    document.querySelector("#"+line+index).innerText=findLine[index-1];
    document.querySelector("#"+line+index).style.color="orange";
    document.querySelector("#"+line+index).style.fontSize="23px";
    document.querySelector("#"+line+index).style.fontStyle ="italic";
    let indexOfRemNum = remNum.indexOf(cheat);
    remNum.splice(indexOfRemNum,1); 

  }
  function InsertNumber(num)
  {
    document.getElementById(cellNum).style.color="black";
    document.getElementById(cellNum).innerText=num;
    document.getElementById(cellNum).style.fontStyle = "italic";
    document.getElementById(cellNum).style.fontSize="23px"

 }
 function ResetInsertNumber()
 {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      var num = 'l' +i +j
      document.getElementById(num).style.color="black";
      document.getElementById(num).style.fontStyle ="normal"
      document.getElementById(num).style.fontSize="18px"
    }
  }

}

  function RemCellColor()
  {
    for(i=1; i<10; i++)
    {
        for(j=1; j<10; j++)
        {
          document.getElementById("l" + j + i).style.backgroundColor="white";
        }
    }
  }

//StopWatch

 function startStopwatch() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
    stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
  }
}
function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable
  }
  function resetStopwatch() {
    stopStopwatch(); // stop the interval
    elapsedPausedTime = 0; // reset the elapsed paused time variable
    document.getElementById(level).innerHTML = "00:00:00"; // reset the display
  }
 function updateStopwatch() {
    var currentTime = new Date().getTime(); // get current time in milliseconds
    var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
    var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
    displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
   document.getElementById(level).innerHTML= displayTime; // update the display
   var txt = "Good job!"
   document.getElementById("test").innerHTML=txt.concat(" your time is ", displayTime);
  }
  
  function pad(number) {
    // add a leading zero if the number is less than 10
    return (number < 10 ? "0" : "") + number;
  }
