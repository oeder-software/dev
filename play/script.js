let l1 = ["e", "f", "c", "h", "g", "i", "b", "a", "d"];
let l2 = ["g", "a", "i", "d", "b", "c", "f", "e", "h"];
let l3 = ["b", "h", "d", "e", "f", "a", "c", "i", "g"];
let l4 = ["d", "b", "f", "a", "e", "g", "i", "h", "c"];
let l5 = ["a", "i", "e", "f", "c", "h", "d", "g", "b"];
let l6 = ["h", "c", "g", "b", "i", "d", "a", "f", "e"];
let l7 = ["i", "d", "h", "c", "a", "e", "g", "b", "f"];
let l8 = ["f", "e", "a", "g", "d", "b", "h", "c", "i"];
let l9 = ["c", "g", "b", "i", "h", "f", "e", "d", "a"];
let init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let seed = [];
let rndList = [];
let rndIndex = [];
var remNum = [];
var insertedNumberBeforeCheck = [];
var cellNum;
var startTime; // to keep track of the start time
var stopwatchInterval; // to keep track of the interval
var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped
var level = "easy";
var annotationisactive = false;
var indexOfLine;
var indexOfPosition;
document.getElementById("numbers").hidden = false;
document.getElementById("clear").style.display = "block";

function OnClickCell(cell) {
  document.getElementById(cell).style.cursor = "pointer";
  RemCellColor();
  SetNumberButtonColor("darkblue");

  indexOfLine = cell[1];
  indexOfPosition = cell[2];

  cellNum = cell;
  var empCell = "#" + cell;
  var isEmpty = false;
  remNum.forEach((item) => {
    document.getElementById("l" + item[2] + item[3]).style.background =
      "transparent";
  });

  remNum.forEach((item) => {
    if (item == empCell) {
      isEmpty = true;
      for (i = 1; i < 10; i++) {
        document.getElementById("l" + indexOfLine + i).style =
          "background-color: rgb(135 206 250/ 10%);";
        document.getElementById("l" + indexOfLine + i).style.fontWeight =
          "bold";
      }
      for (i = 1; i < 10; i++) {
        document.getElementById("l" + i + indexOfPosition).style =
          "background-color: rgb(135 206 250/ 10%);";
        document.getElementById("l" + i + indexOfPosition).style.fontWeight =
          "bold";
      }
      ColorCellsInTableLightBlue(cell);
        document.getElementById(cell).style =
          "background-color: rgb(10 246 10/ 10%);";

    }
  });
  if (isEmpty) {
    document.getElementById("numbers").hidden = false;
    document.getElementById("clear").style.display = "block";
    document.getElementById(cell).style.cursor = "crosshair";
    SetNumberButtonColor("darkblue");
  }
  if (!isEmpty) {
    SetNumberButtonColor("darkgrey");
    var list = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
    var chosenNum = document.getElementById(cell).innerHTML;
    if (annotationisactive == true) {
      document.getElementById(cell).style.backgroundColor = "";
    } else if (remNum.length > 0) {
      document.getElementById(cell).style.backgroundColor = "lightblue";
    } else {
      document.getElementById(cell).style.backgroundColor = "white";
    }
    var greenCell = [];
    greenCell = remNum.slice();
    for (i = 0; i < 9; i++) {
      for (j = 0; j < 9; j++) {
        var numIsNull = true;
        var line = list[i];
        var lineNum = line[j];
        if (chosenNum == lineNum) {
          remNum.forEach((number) => {
            if (number == "#l" + (i + 1) + (j + 1)) {
              numIsNull = false;
            }
          });
          if (numIsNull == true) {
            remNum.forEach((item) => {
              var indexOfLineOther = i + 1;
              var indexOfPositionOther = j + 1;
              var lineStartOther;
              var lineEndOther;
              var posStartOther;
              var posEndOther;
              if (indexOfLineOther < 4) {
                lineEndOther = 4;
                lineStartOther = 0;
              }
              if (indexOfLineOther > 3 && indexOfLineOther < 7) {
                lineEndOther = 7;
                lineStartOther = 3;
              }
              if (indexOfLineOther > 6 && indexOfLineOther < 10) {
                lineEndOther = 10;
                lineStartOther = 6;
              }
              if (indexOfPositionOther < 4) {
                posEndOther = 4;
                posStartOther = 0;
              }
              if (indexOfPositionOther > 3 && indexOfPositionOther < 7) {
                posEndOther = 7;
                posStartOther = 3;
              }
              if (indexOfPositionOther > 6 && indexOfPositionOther < 10) {
                posEndOther = 10;
                posStartOther = 6;
              }

              remNum.forEach((el) => {
                if (
                  el[3] > posStartOther &&
                  el[3] < posEndOther &&
                  el[2] > lineStartOther &&
                  el[2] < lineEndOther
                ) {
                  document.getElementById(
                    "l" + el[2] + el[3]
                  ).style.background = "red";
                  greenCell.splice(greenCell.indexOf("#l" + el[2] + el[3]), 1);
                }
              });
              if (item[2] == indexOfLineOther) {
                document.getElementById(
                  "l" + item[2] + item[3]
                ).style.background = "red";
                greenCell.splice(
                  greenCell.indexOf("#l" + item[2] + item[3]),
                  1
                );
              }
              if (item[3] == indexOfPositionOther) {
                document.getElementById(
                  "l" + item[2] + item[3]
                ).style.background = "red";
                greenCell.splice(
                  greenCell.indexOf("#l" + item[2] + item[3]),
                  1
                );
              }
              greenCell.forEach((green) => {
                document.getElementById(
                  "l" + green[2] + green[3]
                ).style.backgroundColor = "lightgreen";
              });
            });
          }
        }
      }
    }
  }
  //var newinse = document.querySelector(cell).innerText;
}

function UpdateBoard() {
  l1 = ["e", "f", "c", "h", "g", "i", "b", "a", "d"];
  l2 = ["g", "a", "i", "d", "b", "c", "f", "e", "h"];
  l3 = ["b", "h", "d", "e", "f", "a", "c", "i", "g"];
  l4 = ["d", "b", "f", "a", "e", "g", "i", "h", "c"];
  l5 = ["a", "i", "e", "f", "c", "h", "d", "g", "b"];
  l6 = ["h", "c", "g", "b", "i", "d", "a", "f", "e"];
  l7 = ["i", "d", "h", "c", "a", "e", "g", "b", "f"];
  l8 = ["f", "e", "a", "g", "d", "b", "h", "c", "i"];
  l9 = ["c", "g", "b", "i", "h", "f", "e", "d", "a"];

  init = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  seed = [];
  rndIndex = [];
  remNum = [];
  rndList = [];

  RandomSeed(init, 9, seed);

  for (i = 0; i < 35; i++) {
    var rndInt = randomLI(1, 9, rndList);
    rndList.push(rndInt);
  }
  for (i = 0; i < 35; i++) {
    var rndInt = randomLI(0, 8, rndIndex);
    rndIndex.push(rndInt);
  }
  ResetInsertNumber();
  FillList(l1);
  FillList(l2);
  FillList(l3);
  FillList(l4);
  FillList(l5);
  FillList(l6);
  FillList(l7);
  FillList(l8);
  FillList(l9);
  RemCellColor();
  Mix();
}
function VeryEasy() {
  stopStopwatch();
  resetStopwatch();
  RemoveAnnotationTable();
  SetNumberButtonColor("darkblue");
  level = "veryeasy";
  startStopwatch();
  document.getElementById("veryeasy").style.background = "Red";
  document.getElementById("easy").style.background = "DarkBlue";
  document.getElementById("medium").style.background = "DarkBlue";
  document.getElementById("hard").style.background = "DarkBlue";
  document.getElementById("impossible").style.background = "DarkBlue";
  document.getElementById("easy").innerHTML = "Easy";
  document.getElementById("medium").innerHTML = "Medium";
  document.getElementById("hard").innerHTML = "Hard";
  document.getElementById("impossible").innerHTML = "Impossible";
  document.getElementById("test").style.visibility = "hidden";
  //InsertAnnotationCellsInTables();
  UpdateBoard();
  RemCell(18);
  InsertAnnotationCellsInTables();
}

function Easy() {
  stopStopwatch();
  resetStopwatch();
  RemoveAnnotationTable();
  SetNumberButtonColor("darkblue");
  level = "easy";
  startStopwatch();
  document.getElementById("veryeasy").style.background = "darkblue";
  document.getElementById("easy").style.background = "red";
  document.getElementById("medium").style.background = "DarkBlue";
  document.getElementById("hard").style.background = "darkblue";
  document.getElementById("impossible").style.background = "DarkBlue";
  document.getElementById("veryeasy").innerHTML = "Very easy";
  document.getElementById("medium").innerHTML = "Medium";
  document.getElementById("easy").innerHTML = "Easy";
  document.getElementById("impossible").innerHTML = "Impossible";
  document.getElementById("test").style.visibility = "hidden";
  //InsertAnnotationCellsInTables();
  UpdateBoard();
  RemCell(27);
  InsertAnnotationCellsInTables();
}
function Medium() {
  stopStopwatch();
  resetStopwatch();
  RemoveAnnotationTable();
  SetNumberButtonColor("darkblue");

  level = "medium";
  startStopwatch();
  document.getElementById("veryeasy").style.background = "darkblue";
  document.getElementById("easy").style.background = "darkblue";
  document.getElementById("medium").style.background = "red";
  document.getElementById("hard").style.background = "DarkBlue";
  document.getElementById("impossible").style.background = "DarkBlue";
  document.getElementById("veryeasy").innerHTML = "Very easy";
  document.getElementById("hard").innerHTML = "Hard";
  document.getElementById("easy").innerHTML = "Easy";
  document.getElementById("impossible").innerHTML = "Impossible";
  document.getElementById("test").style.visibility = "hidden";
  UpdateBoard();
  RemCell(45);
  InsertAnnotationCellsInTables();
}
function Hard() {
  if (stopwatchInterval != null) {
    stopStopwatch();
    resetStopwatch();
  }
  RemoveAnnotationTable();
  SetNumberButtonColor("darkblue");

  level = "hard";
  startStopwatch();
  document.getElementById("veryeasy").style.background = "darkblu";
  document.getElementById("easy").style.background = "DarkBlue";
  document.getElementById("medium").style.background = "DarkBlue";
  document.getElementById("hard").style.background = "red";
  document.getElementById("impossible").style.background = "DarkBlue";
  document.getElementById("easy").innerHTML = "Easy";
  document.getElementById("medium").innerHTML = "Medium";
  document.getElementById("veryeasy").innerHTML = "Very easy";
  document.getElementById("impossible").innerHTML = "Impossible";
  document.getElementById("test").style.visibility = "hidden";
  UpdateBoard();
  RemCell(54);
  InsertAnnotationCellsInTables();
}
function Impossible() {
  if (stopwatchInterval != null) {
    stopStopwatch();
    resetStopwatch();
  }
  RemoveAnnotationTable();
  SetNumberButtonColor("darkblue");

  level = "impossible";
  startStopwatch();
  document.getElementById("veryeasy").style.background = "darkblue";
  document.getElementById("easy").style.background = "darkblue";
  document.getElementById("medium").style.background = "DarkBlue";
  document.getElementById("hard").style.background = "DarkBlue";
  document.getElementById("impossible").style.background = "red";
  document.getElementById("veryeasy").innerHTML = "Very easy";
  document.getElementById("medium").innerHTML = "Medium";
  document.getElementById("easy").innerHTML = "Easy";
  document.getElementById("hard").innerHTML = "Hard";
  document.getElementById("test").style.visibility = "hidden";
  UpdateBoard();
  RemCell(63);
  InsertAnnotationCellsInTables();
}

function RandomSeed(arrayIn, length, arrayOut) {
  for (i = 0; i < length; i++) {
    var rnd = arrayIn[Math.floor(Math.random() * arrayIn.length)];
    arrayOut.push(rnd);
    let indexOfRnd = arrayIn.indexOf(rnd);
    if (indexOfRnd > -1) {
      arrayIn.splice(indexOfRnd, 1);
    }
  }
}
RandomSeed(init, 9, seed);

function randomLI(min, max, outList) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function FillList(list) {
  for (j = 0; j < seed.length; j++) {
    switch (j) {
      case 0:
        list.splice(list.indexOf("a"), 1, seed[j]);
        break;
      case 1:
        list.splice(list.indexOf("b"), 1, seed[j]);
        break;
      case 2:
        list.splice(list.indexOf("c"), 1, seed[j]);
        break;
      case 3:
        list.splice(list.indexOf("d"), 1, seed[j]);
        break;
      case 4:
        list.splice(list.indexOf("e"), 1, seed[j]);
        break;
      case 5:
        list.splice(list.indexOf("f"), 1, seed[j]);
        break;
      case 6:
        list.splice(list.indexOf("g"), 1, seed[j]);
        break;
      case 7:
        list.splice(list.indexOf("h"), 1, seed[j]);
        break;
      case 8:
        list.splice(list.indexOf("i"), 1, seed[j]);
        break;
    }
  }
}

function Print(list, str) {
  for (i = 0; i < list.length; i++) {
    document.querySelector("#" + str + (1 + i)).innerText = list[i];
  }
}

function RemCell(length) {
  numToRemove = length;
  Print(l1, "l1");
  Print(l2, "l2");
  Print(l3, "l3");
  Print(l4, "l4");
  Print(l5, "l5");
  Print(l6, "l6");
  Print(l7, "l7");
  Print(l8, "l8");
  Print(l9, "l9");

  for (i = 0; i < length * 2; i++) {
    var rndInt = randomLI(1, 9, rndList);
    rndList.push(rndInt);
  }
  for (i = 0; i < length * 2; i++) {
    var rndInt = randomLI(0, 8, rndIndex);
    rndIndex.push(rndInt);
  }
  for (i = 0; i < length * 2; i++) {
    let cellToRem = "#l" + rndList[i] + (rndIndex[i] + 1);
    remNum.push(cellToRem);
  }
  for (let i = 0; i < remNum.length - 1; i++) {
    var num1Line = eval(remNum[i].slice(1, 3));
    var index = remNum[i].slice(3);
    var num1 = num1Line[index - 1];
    // var l = remNum[i].slice(2, -1);
    // var inx = remNum[i].slice(3);
    var lineToCheck;
    var indexToCheck;
    for (let j = 0; j < remNum.length - 1; j++) {
      if (remNum[j][2] == remNum[i][2] && remNum[i] != remNum[j]) {
        var num2Line = eval(remNum[j].slice(1, 3));
        var index2 = remNum[j].slice(3);
        var num2 = num2Line[index2 - 1];
        for (let k = 0; k < remNum.length - 1; k++) {
          if (remNum[k][3] == remNum[j][3] && remNum[j] != remNum[k]) {
            var num3Line = eval(remNum[k].slice(1, 3));
            var index3 = remNum[k].slice(3);
            var num3 = num3Line[index3 - 1];
                 lineToCheck = parseInt(remNum[k].slice(2, -1));
                 indexToCheck = parseInt(index3-1);

            if (num1 == num3) {
              for (let l = 0; l < remNum.length; l++) {
                // lineToCheck = parseInt(remNum[l][2]);
                // indexToCheck = parseInt(remNum[k][2]);
                if (remNum[l][2] == remNum[k][2] && remNum[k] != remNum[l]) {
                  var num4Line = eval(remNum[l].slice(1, 3));
                  var index4 = remNum[l].slice(3);
                  var num4 = num4Line[index4 - 1];
                  if (num4 == num2 && index == index4) {
                    remNum.splice(l, 1);
                  }
                }
              }
              FindFourthNumberToDel(lineToCheck , indexToCheck,num1, num2, num3);
            }
          }
        }
      }
    }
  }
  for (i = remNum.length - 1; i > -1; i--) {
    var num = 0;
    for (j = remNum.length - 1; j > -1; j--) {
      if (remNum[i] == remNum[j]) {
        num++;
        if (num > 1) {
          var indx = remNum.indexOf(remNum[j]);
          remNum.splice(indx, 1);
          num--;
        }
      }
    }
  }
  while (remNum.length > length + 1) {
    for (i = remNum.length - 1; i > length; i--) {
      remNum.splice(i, 1);
    }
  }
  for (i = 0; i < remNum.length; i++) {
    document.querySelector(remNum[i]).innerHTML = "";
  }
}

function Check() {
  var numExist;
  for (i = remNum.length - 1; i >= 0; i--) {
    var line = [];
    line = remNum[i].charAt(2);
    let line1;
    var index = [];
    index = remNum[i].charAt(3);
    let indexNum;
    switch (index) {
      case "1":
        indexNum = 1 - 1;
        break;
      case "2":
        indexNum = 2 - 1;
        break;
      case "3":
        indexNum = 3 - 1;
        break;
      case "4":
        indexNum = 4 - 1;
        break;
      case "5":
        indexNum = 5 - 1;
        break;
      case "6":
        indexNum = 6 - 1;
        break;
      case "7":
        indexNum = 7 - 1;
        break;
      case "8":
        indexNum = 8 - 1;
        break;
      case "9":
        indexNum = 9 - 1;
        break;
    }
    switch (line) {
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
    let y = "l" + line + index;
    let cellValue = document.getElementById(y).innerHTML;
    let num = line1[indexNum];
    let cellValueInt = parseInt(cellValue);

    if (cellValueInt == num) {
      document.getElementById(y).style.color = "green";
      var numToRem = "#" + y;
      var indxofNum = remNum.indexOf(numToRem);
      remNum.splice(indxofNum, 1);
      for (let i = 1; i < 5; i++) {
        document.getElementById("a" + y + i).innerText = "";
        document.getElementById("a" + y + i).style = "backgroun-color: white;";
      }
    } else {
      document.getElementById(y).style.color = "red";
    }
  }
  if (remNum.length == 0) {
    stopStopwatch();

    document.getElementById("test").style.visibility = "visible";
    document.getElementById("hard").innerHTML = "Hard";
    document.getElementById("medium").innerHTML = "Medium";
    document.getElementById("easy").innerHTML = "Easy";
    document.getElementById("veryeasy").innerHTML = "Very easy";
    document.getElementById("impossible").innerHTML = "Impossible";
    document.getElementById("impossible").style.background = "DarkBlue";
    document.getElementById("veryeasy").style.background = "DarkBlue";
    document.getElementById("easy").style.background = "DarkBlue";
    document.getElementById("medium").style.background = "DarkBlue";
    document.getElementById("hard").style.background = "DarkBlue";
  }
}

function Mix() {
  let temp = [];

  for (i = 1; i < 10; i += 3) {
    let one = eval("l" + i);
    let two = eval("l" + (i + 1));
    temp = one;
    one = two;
    two = temp;
    for (j = 1; j < 10; j++) {
      var en = eval("l" + j);
      en.splice(i + 1, 0, en[i - 1]);
      en.splice(i - 1, 1);
      var en = l1;
      var ind = en[0];
    }
  }
}
function MixRow(start, slut) {
  let rows = [];
  let row = [];
  let colums = [];
  let colum = [];
  let tempLine = [];
  let rndMix = Math.floor(Math.random() * 11);

  for (i = start; i < slut; i++) {
    rows.push(i);
    colums.push(i);
  }

  for (i = 0; i < 3; i++) {
    let num = rows[Math.floor(Math.random() * rows.length)];
    row.push(num);
    let numColum = colums[Math.floor(Math.random() * colums.length)];
    colum.push(numColum);
    let rowIndex = rows.indexOf(num);
    let columIndex = colums.indexOf(numColum);
  }
  for (i = 0; i < row.length; i++) {
    if (parseInt(row[i]) == start) {
      let line1 = eval("l" + row[i]);
      let line2 = eval("l" + row[i + 1]);
      tempLine = line1;
      line1 = line2;
      line2 = tempLine;
    }
    if (parseInt(row[i]) == start + 1) {
      let line1 = eval("l" + row[i]);
      let line2 = eval("l" + row[i + 1]);
      tempLine = line1;
      line1 = line2;
      line2 = tempLine;
    }
    if (parseInt(row[i]) == start + 2) {
      let line1 = eval("l" + row[i]);
      let line2 = eval("l" + row[start]);
      tempLine = line1;
      line1 = line2;
      line2 = tempLine;
    }
  }
}

function Cheat() {
  var cheat = remNum[Math.floor(Math.random() * remNum.length)];
  var line = cheat.charAt(1) + cheat.charAt(2);
  var index = cheat.charAt(3);
  var findLine = eval(line);
  document.querySelector("#" + line + index).innerText = findLine[index - 1];
  document.querySelector("#" + line + index).style.color = "orange";
  document.querySelector("#" + line + index).style.fontSize = "23px";
  document.querySelector("#" + line + index).style.fontStyle = "italic";
  let indexOfRemNum = remNum.indexOf(cheat);
  remNum.splice(indexOfRemNum, 1);
  for (let i = 1; i < 5; i++) {
    document.getElementById("a" + line + index + i).innerText = "";
    document.getElementById("a" + line + index + i).style =
      "background-color: transparent;";
  }
}
function InsertNumber(num) {
  if (cellNum.length == 3 && annotationisactive == false) {
    document.getElementById(cellNum).style.color = "black";
    document.getElementById(cellNum).innerText = num;
    insertedNumberBeforeCheck.add(num);
    document.getElementById(cellNum).style.fontStyle = "italic";
    document.getElementById(cellNum).style.fontSize = "23px";
    document.getElementById(cellNum).style.backgroundColor =
      "rbg(255 255 250 10%";
  }
  if (cellNum.length == 5) {
    document.getElementById(cellNum).style.color = "black";
    document.getElementById(cellNum).innerText = num;
    document.getElementById(cellNum).style.fontWeight = "bold";
    document.getElementById(cellNum).style.fontSize = "10px";
    document.getElementById(cellNum).style.opacity = "1";
  }
  if (num == "") {
    document.getElementById(cellNum).style.backgroundColor = "#dffaf9";
    document.getElementById(cellNum).style.opacity = "0.9";
  }
}
function ResetInsertNumber() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      var num = "l" + i + j;
      document.getElementById(num).style.color = "black";
      document.getElementById(num).style.fontStyle = "normal";
      document.getElementById(num).style.fontSize = "18px";
    }
  }
}

function RemCellColor() {
  for (i = 1; i < 10; i++) {
    for (j = 1; j < 10; j++) {
      document.getElementById("l" + j + i).style.backgroundColor =
        "transparent";
      document.getElementById("l" + j + i).style.fontWeight = "normal";
    }
  }
}

function RemAnnotationColor() {
  for (let k = 1; k < 5; k++) {
    document.getElementById("al" + j + i + k).style =
      "background-color: tranparent;";
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
  document.getElementById(level).innerHTML = displayTime; // update the display
  var txt = "Good job!";
  document.getElementById("test").innerHTML = txt.concat(
    " your time is ",
    displayTime
  );
}

function pad(number) {
  // add a leading zero if the number is less than 10
  return (number < 10 ? "0" : "") + number;
}
function annotationoff() {
  switch (annotationisactive) {
    case true:
      document.getElementById("div1").style = "z-index: 4; position: absolute;";
      document.getElementById("div2").style = "z-index: 2; position: relative;";
      annotationisactive = false;
      // document.getElementById("buttonanno").style =
      //   "background-color: darkblue";
      // document.getElementById("buttonanno").innerText = "Annotation on";
      var buttonColor = document.getElementsByClassName("buttonNum");
      var i = 0;
      while (i < buttonColor.length) {
        buttonColor[i].style = "background-color: darkblue; color: white;";
        i++;
      }
      document.getElementById("imgEdit").setAttribute("src", "edit-w.png");
      document.getElementById("imgCheck").setAttribute("src", "check-w.png");
      document.getElementById("imgDel").setAttribute("src", "delete-w.png");
      document.getElementById("imgAdd").setAttribute("src", "add-w.png");
      SetAnnotationCellColor("transparent", 0.9);

      break;
    case false:
      document.getElementById("div1").style = "z-index: 2; position: initial;";
      document.getElementById("div2").style = "z-index: 4; position: initial";
      RemCellColor();
      annotationisactive = true;
      // document.getElementById("buttonanno").style =
      //   "background-color: lightblue; color: black;";
      // document.getElementById("buttonanno").innerText = "Annotation off";
      SetAnnotationCellColor("rgb(73, 208, 238)", 0.3);
      var buttonColor = document.getElementsByClassName("buttonNum");
      var i = 0;
      while (i < buttonColor.length) {
        buttonColor[i].style = "background-color: lightskyblue; color: black;";
        i++;
      }
      document.getElementById("imgEdit").setAttribute("src", "edit-b.png");
      document.getElementById("imgCheck").setAttribute("src", "check-b.png");
      document.getElementById("imgDel").setAttribute("src", "delete-b.png");
      document.getElementById("imgAdd").setAttribute("src", "add-b.png");

      break;
  }
}

function OnClickCellAnnotation(cell) {
  //RemCellColor();
  SetNumberButtonColor("lightskyblue");
  document.getElementById("numbers").hidden = false;
  document.getElementById("clear").style.display = "block";

  let newcell = cell.id;
  cellNum = newcell;
  SetAnnotationCellColor("lightblue", 0.4);
  document.getElementById(newcell).style = "background-color: black; ";
  document.getElementById(newcell).style = "opacity: 1;";
}
function InsertAnnotationCellsInTables() {
  let list = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < remNum.length; j++) {
      for (let k = 0; k < remNum.length; k++) {
        let emptyCell = remNum[k].slice(2);
        if (emptyCell == "" + i + j) {
          var a = document.createElement("table");
          a.setAttribute("class", "notation");
          a.setAttribute("id", "table" + i + j);
          a.style =
            "width: 24px: height: 24px; border-color: darkblue; margin-left: auto; margin-right: auto";
          document.getElementById("al" + i + j).appendChild(a);
          document.getElementById("al" + i + j).setAttribute("onclick", "");

          var b = document.createElement("tr");
          b.setAttribute("id", "tr" + i + j + "1");
          b.style = "border: 0px;";
          document.getElementById("table" + i + j).appendChild(b);

          var c = document.createElement("td");
          c.setAttribute("id", "al" + i + j + "1");
          c.style = "width: 11px; height: 11px;";
          //c.setAttribute("onclick", "OnClickCellAnnotation('al' + i + j +'1')");
          document.getElementById("tr" + i + j + "1").appendChild(c);

          var d = document.createElement("td");
          d.setAttribute("id", "al" + i + j + "2");
          d.style = "width: 11px; height: 11px;";
          //d.setAttribute("onclick", "OnClickCellAnnotation('al' + i + j +'2')");

          document.getElementById("tr" + i + j + "1").appendChild(d);

          var e = document.createElement("tr");
          e.setAttribute("id", "tr" + i + j + "2");
          document.getElementById("table" + i + j).appendChild(e);

          var f = document.createElement("td");
          f.setAttribute("id", "al" + i + j + "3");
          f.style = "width: 11px; height: 11px;";
          //f.setAttribute("onclick", "OnClickCellAnnotation('al' + i + j +'3')");

          document.getElementById("tr" + i + j + "2").appendChild(f);

          var g = document.createElement("td");
          g.setAttribute("id", "al" + i + j + "4");
          g.style = "width: 11px; height: 11px;";
          //g.setAttribute("onclick", "OnClickCellAnnotation('al' + i + j +'4')");
          document.getElementById("tr" + i + j + "2").appendChild(g);
          var cellid1 = "al" + i + j + "1";
          var cellid2 = "al" + i + j + "2";
          var cellid3 = "al" + i + j + "3";
          var cellid4 = "al" + i + j + "4";
          document
            .getElementById("al" + i + j + "1")
            .setAttribute("onclick", "OnClickCellAnnotation(" + cellid1 + ")");
          document
            .getElementById("al" + i + j + "2")
            .setAttribute("onclick", "OnClickCellAnnotation(" + cellid2 + ")");
          document
            .getElementById("al" + i + j + "3")
            .setAttribute("onclick", "OnClickCellAnnotation(" + cellid3 + ")");

          document
            .getElementById("al" + i + j + "4")
            .setAttribute("onclick", "OnClickCellAnnotation(" + cellid4 + ")");
        }
      }
    }
  }
}
function SetAnnotationCellColor(color, opacity) {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      for (let l = 0; l < remNum.length; l++) {
        if (remNum[l].slice(2) == "" + i + j) {
          for (let k = 1; k < 5; k++) {
            document.getElementById("al" + i + j + k).style.backgroundColor =
              color;
            document.getElementById("al" + i + j + k).style.opacity = opacity;
          }
        }
      }
    }
  }
  for (let i = 1; i < 10; i++) {
    document.getElementById("buttonNum" + i).disabled = false;
  }
}
function RemoveAnnotationTable() {
  var remTable = document.getElementsByClassName("notation");
  while (remTable.length > 0) {
    remTable[0].remove();
  }

  document.getElementById("div1").style = "z-index: 4; position: absolute;";
  document.getElementById("div2").style = "z-index: 2; position: relative;";
  annotationisactive = false;
  // document.getElementById("buttonanno").style = "background-color: darktblue";
  // document.getElementById("buttonanno").innerText = "Annotation on";
}
function ColorCellsInTableLightBlue(cell) {
  var lineStart;
  var lineEnd;
  var cellStart;
  var cellEnd;
  if (cell[1] >= 1 && cell[1] <= 3) {
    lineStart = 1;
    lineEnd = 3;
  }
  if (cell[1] >= 4 && cell[1] <= 6) {
    lineStart = 4;
    lineEnd = 6;
  }
  if (cell[1] >= 7 && cell[1] <= 9) {
    lineStart = 7;
    lineEnd = 9;
  }
  if (cell[2] >= 1 && cell[2] <= 3) {
    cellStart = 1;
    cellEnd = 3;
  }
  if (cell[2] >= 4 && cell[2] <= 6) {
    cellStart = 4;
    cellEnd = 6;
  }
  if (cell[2] >= 7 && cell[2] <= 9) {
    cellStart = 7;
    cellEnd = 9;
  }

  for (let i = lineStart; i < lineEnd + 1; i++) {
    for (let j = cellStart; j < cellEnd + 1; j++) {
      document.getElementById("l" + i + j).style =
        "background-color: rgb(135 206 250/ 10%);";
      document.getElementById("l" + i + j).style.fontWeight = "bold";
    }
  }
}
function SetNumberButtonColor(color) {
  var buttonColor = document.getElementsByClassName("buttonNum");
  var i = 0;
  while (i < buttonColor.length) {
    buttonColor[i].style = "background-color:" + color + "; color: white;";
    i++;
  }
  if (color == "darkgrey") {
    for (let i = 1; i < 10; i++) {
      document.getElementById("buttonNum" + i).disabled = true;
    }
    document.getElementById("anno").disabled = false;
    document.getElementById("clear").disabled = true;
    document.getElementById("add").disabled = false;
    document.getElementById("check").disabled = false;
  }
  if (color == "darkblue") {
    for (let i = 1; i < 10; i++) {
      document.getElementById("buttonNum" + i).disabled = false;
    }
    document.getElementById("anno").disabled = false;
    document.getElementById("clear").disabled = false;
    document.getElementById("add").disabled = false;
    document.getElementById("check").disabled = false;
  }

  document.getElementById("imgEdit").setAttribute("src", "edit-w.png");
  document.getElementById("imgCheck").setAttribute("src", "check-w.png");
  document.getElementById("imgAdd").setAttribute("src", "add-w.png");
  document.getElementById("imgDel").setAttribute("src", "delete-w.png");

  if (color == "lightskyblue") {
    document.getElementById("imgEdit").setAttribute("src", "edit-b.png");
    document.getElementById("imgCheck").setAttribute("src", "check-b.png");
    document.getElementById("imgAdd").setAttribute("src", "add-b.png");
    document.getElementById("imgDel").setAttribute("src", "delete-b.png");
    for (let i = 1; i < 10; i++) {
      document.getElementById("buttonNum" + i).style =
        "background-color:" + color + "; color: black;";
    }
  }
}
function FindFourthNumberToDel(lineInTableToCheck, indexInTableToCheck,num1, num2, num3){
  var lineToCheck;
  var indexToCheck;
switch (lineInTableToCheck) {
  case 1:
    lineToCheck = 1;
    break;
  case 2:
    lineToCheck = 1;
    break;
  case 3:
    lineToCheck = 1;
    break;
  case 4:
    lineToCheck = 4;
    break;
  case 5:
    lineToCheck = 4;
    break;
  case 6:
    lineToCheck = 4;
    break;
  case 7:
    lineToCheck = 7;
    break;
  case 8:
    lineToCheck = 7;
    break;
  case 9:
    lineToCheck = 7;
    break;
}
switch (indexInTableToCheck) {
  case 1:
    indexToCheck = 0;
    break;
  case 2:
    indexToCheck = 0;
    break;
  case 3:
    indexToCheck = 0;
    break;
  case 4:
    indexToCheck = 3;
    break;
  case 5:
    indexToCheck = 3;
    break;
  case 6:
    indexToCheck = 3;
    break;
  case 7:
    indexToCheck = 6;
    break;
  case 8:
    indexToCheck = 6;
    break;
  case 9:
    indexToCheck = 6;
    break;
}
for (let i = 0; i < 3; i++) {
  var line = eval("l" + (lineToCheck + i));
  for (let j = 0; j < 3; j++) {
    var num = line[indexToCheck + j]
    var indexOfNumToRemove = remNum.indexOf(
      "#l" + (lineToCheck + i) + (indexToCheck + j)
    );
    if (num = num2) {
      var numToRem = "#l" + (lineToCheck + i)+ (indexToCheck +j);
      // var indx = remNum.indexOf("#l" + lineInTableToCheck + indexInTableToCheck);
      // remNum.splice(indx, 1)
      var x = 1;
    }
    
  }
  
}
}