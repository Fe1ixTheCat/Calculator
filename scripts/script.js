////////////////numbers/////////////////////

function oneFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "1";
}

function twoFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "2";
}

function threeFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "3";
}

function fourFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "4";
}

function fiveFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "5";
}

function sixFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "6";
}

function sevenFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "7";
}

function eightFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "8";
}

function nineFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "9";
}

function zeroFunc() {
  let a = document.getElementById('total');
  a.value = a.value + "0";
}

function dotFunc() {
  let a = document.getElementById('total');
  a.value = a.value + ".";
}
////////////////////////////////////

///////simple_functions/////////////

function clearFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');
  a.value = "";
  b.innerHTML = "";
}

function equallyFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');
  let c = a.value;
  let d = b.innerHTML;
  b.innerHTML = parseInt(eval(d + c));
  a.value = "";
}

function additionFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');

  let c = +b.innerHTML + +a.value + "+"
  b.innerHTML = c;
  a.value = "";
}

function subtractionFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');

  let c = +b.innerHTML + +a.value + "-"
  b.innerHTML = c;
  a.value = "";
}

function multiplicationFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');

  let c = +b.innerHTML + +a.value + "*"
  b.innerHTML = c;
  a.value = "";
}

function divisionFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');

  let c = +b.innerHTML + +a.value + "/"
  b.innerHTML = c;
  a.value = "";
}

////////////////////////////////////////////

//////////strong_finction//////////////////

function plusMinusFunc() {
  let a = document.getElementById('total');
  if (a.value >= 0) {
    a.value = "-" + a.value;
  }
  else {
    c = a.value;
    a.value = c.substring(1);
  }
}

function percentFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');

  let c = +b.innerHTML + +a.value + "%"
  b.innerHTML = c;
  a.value = "";
}

///////////////////////////////////////////

///////////////other_function//////////////

function exponentiationFunc() {
  let a = document.getElementById('total');
  let b = document.getElementById('log');

  b.innerHTML = a.value;
  b.innerHTML = +b.innerHTML * +a.value;
  a.value = "";
}

/////////////////////////////////////////////
