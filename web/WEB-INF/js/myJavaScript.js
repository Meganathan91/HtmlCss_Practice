function myFunction() {

const person = { name: 'Vimal', age: 23, sex: 'Male' };
let text = "" ;
for (let key in person) {
text += "  "+key + " : " + person[key]+"<br>";
document.getElementById("for_in_object").innerHTML = text +" ";
}

const colors = ['red', 'blue', 'green'];
let rbg = "";
for(let key in colors) {
rbg += "  "+ key + " : " + colors[key]+"<br>";
document.getElementById("for_in_array").innerHTML =  rbg;
}

const cars = ['bmw', 'audi', 'volvo'];
let ofArray = "";
for(let key of cars) {
ofArray +=  "array iterate : "+key +"<br>";
}
document.getElementById("for_of_array").innerHTML =  ofArray;

let sname = "";
let name = "javascript";
for (let key of name) {
sname += "string iterator : "+key + "<br>";
}
document.getElementById("string_iterator").innerHTML =  sname;


let breakText = " ";
for(let i = 0; i < 10; i++) {
if(i == 3) {
break;
}
breakText += "loop value "+ i +"<br>";
document.getElementById("loop_break").innerHTML = breakText;
}

let continueText = " ";
for(let i = 0; i < 10; i++) {
if(i == 3) {
continue;
}
continueText += "loop value "+ i +"<br>";
document.getElementById("loop_continue").innerHTML = continueText;
}

let status;
let x = 8;
if ( x > 10) {
status = "if condition true";
} else if ( x == 8) {
status = "else if block true";
} else {
status = "else block is true";
}
document.getElementById("boolean").innerHTML = status;

var v1 = 25;
var v2 = 25.7;
var v3 = "hi";
var v4 = true;
var v5 = null;
var v6;
var v7 = new Date();
var v8 = [2,5];
var v9 = {fname:'mani'};
document.getElementById("typeof").innerHTML = String(v1) + "<br>" +
                                              typeof v2 + "<br>" +
                                              typeof v3 + "<br>" +
                                              typeof v4 + "<br>" +
                                              typeof v5 + "<br>" +
                                              typeof v6 + "<br>" +
                                              typeof v7 + "<br>" +
                                              typeof v8 + "<br>" +
                                              typeof v9 + "<br>" +
                                              typeof function () {} + "<br>" ;







}
/*const time = 8;
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time > 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("boolean").innerHTML = greeting;
}*/
/*
fruits[fruits.length] = "banana";
document.getElementById("demo").innerHTML = fruits;*/



//document.getElementById("demo").innerHTML = Math.round(1.8);

/*document.getElementById("value").innerHTML = Date();
var a = 10;
var a = 20;
document.getElementById("value").innerHTML = a;

try {
const x = 10;
x = 20; // constant can't reassign
document.getElementById("value").innerHTML = x;
} catch(err) {
document.getElementById("value").innerHTML = err;
}
try {
//carName = "volvo";
let carName = "a";
document.getElementById("value").innerHTML = carName; // here x block value will displayed
//document.getElementById("value").innerHTML = a; // here a block value will displayed
} catch(err) {
document.getElementById("value").innerHTML = err;
}*/
