
document.write("Beybarys" + " CS-2117");
document.innerHTML = "Beybarys" + "CS-2117";
const d1 = new Date();
document.getElementById("out1").innerHTML = "Year: " + d1.getFullYear();

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d2 = new Date();
let day = days[d2.getDay()];
document.getElementById("out2").innerHTML = "Today is: " + day;

const d3 = new Date();
document.getElementById("out3").innerHTML = "Date: " + d3.getDate();

const d4 = new Date();
document.getElementById("out4").innerHTML = "Month: " + d4.getMonth();

var date2 = new Date("06/30/2024");
var date1 = new Date();
var res = Math.round((date2.getTime() - date1.getTime()) / (1000 * 24 * 60 * 60));
document.getElementById("grad").innerHTML = res + " days left until the freedom!";


function multiply() {
	num1 = document.getElementById("first").value;
	num2 = document.getElementById("second").value;
	document.getElementById("result").innerHTML = num1 * num2;
}

function divide() {
	num1 = document.getElementById("first").value;
	num2 = document.getElementById("second").value;
	document.getElementById("result").innerHTML = num1 / num2;
}
