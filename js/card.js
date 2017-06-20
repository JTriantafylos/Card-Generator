/*
Card Populator Class
*/

var generatorType = 1;

var toName = "";
var fromName = "";
var cardMessage = "";
var cardBackground = "";
var textColor = "#000000";
var borderThickness = 1;
var borderColor  = "#ffffff";
var recipientAge = 0;

window.onload = function() {
	sessionLoad();
 	cardPopulate();
};

function sessionLoad()
{
	generatorType = sessionStorage.getItem("generatorType");
	toName = sessionStorage.getItem("toName");
	fromName = sessionStorage.getItem("fromName");
	cardMessage = sessionStorage.getItem("cardMessage");
	cardBackground = sessionStorage.getItem("cardBackground");
	textColor = sessionStorage.getItem("textColor");
	borderThickness = sessionStorage.getItem("borderThickness");
	borderColor = sessionStorage.getItem("borderColor");
	recipientAge = sessionStorage.getItem("recipientAge");
}

function cardPopulate()
{
	if (generatorType == 2)
	{
		document.getElementById("cardToName").textContent = ("You're turning " + recipientAge + " " + toName + "!");
		document.getElementById("cardMessageText").textContent = cardMessage;
		document.getElementById("cardFromName").textContent = ("Sincerely " + fromName);

		document.getElementById("cardBackgroundImage").style.backgroundImage = "url(images/backgrounds/" + cardBackground + ".jpg)";
		document.getElementById("cardContent").style.color = textColor;

		document.getElementById("cardBackgroundImage").style.borderWidth = (borderThickness + "px");
		document.getElementById("cardBackgroundImage").style.borderColor = borderColor;
	}
	else
	{
		document.getElementById("cardToName").textContent = ("Dear " + toName + ",");
		document.getElementById("cardMessageText").textContent = cardMessage;
		document.getElementById("cardFromName").textContent = ("Sincerely " + fromName);

		document.getElementById("cardBackgroundImage").style.backgroundImage = "url(images/backgrounds/" + cardBackground + ".jpg)";
		document.getElementById("cardContent").style.color = textColor;

		document.getElementById("cardBackgroundImage").style.borderWidth = (borderThickness + "px");
		document.getElementById("cardBackgroundImage").style.borderColor = borderColor;
	}
}
