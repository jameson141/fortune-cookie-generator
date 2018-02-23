console.log("UR bad");

var fortuneArray = ["you have bad luck","great driver","lots of money","error 404","you will drop your cookie"];
var fortuneDisplay = document.getElementById('displayFortune');
var nut = document.getElementById("displayPrevious");
var fortunArray = [];


function generateNut() {
	var i = Math.floor(Math.random() * fortuneArray.length);
	console.log(i);

	fortuneDisplay.innerHTML = fortuneArray[i];

	fortunArray.push(fortuneDisplay.innerHTML);

	if(fortunArray.length !== 1){
		var listItem = document.createElement("LI");
		listItem.innerHTML = fortunArray[fortunArray.length-1];
		nut.appendChild(listItem);
	}
}