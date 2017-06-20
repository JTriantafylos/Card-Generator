/*
Main Generator Class
*/

var generatorType = 1;

var toName = "";
var fromName = "";
var cardMessage = "";
var cardBackground = "";
var textColor = "#000000";
var borderThickness = 1;
var borderColor = "#ffffff";
var recipientAge = 0;

var elemSidebar;
var elemContent;

var sidebarExtended = false;

window.onload = function() {
	switchGenerator(generatorType)
  	sessionStorage.clear();
};

function switchGenerator(genType)
{
	switch(genType)
	{
		case 1:
		generatorType = 1;

		document.getElementById("navbarGeneratorLabel").textContent = "Christmas Card";
		document.getElementById("generatorTitle").textContent = "Christmas Card";
		document.getElementById("recipientAgeChoice").style.visibility = "hidden";

		document.getElementById("bgChoicePreview1").setAttribute("src", "images/backgrounds/bgChristmas1.jpg");
		document.getElementById("bgChoicePreview2").setAttribute("src", "images/backgrounds/bgChristmas2.jpg");
		document.getElementById("bgChoicePreview3").setAttribute("src", "images/backgrounds/bgChristmas3.jpg");

		document.getElementById("bgChoice1").value = "christmasBG1";
		document.getElementById("bgChoice2").value = "christmasBG2";
		document.getElementById("bgChoice3").value = "christmasBG3";
		break;

		case 2:
		generatorType = 2;

		document.getElementById("navbarGeneratorLabel").textContent = "Birthday Card";
		document.getElementById("generatorTitle").textContent = "Birthday Card";
		document.getElementById("recipientAgeChoice").style.visibility = "visible";

		document.getElementById("bgChoicePreview1").setAttribute("src", "images/backgrounds/bgBirthday1.jpg");
		document.getElementById("bgChoicePreview2").setAttribute("src", "images/backgrounds/bgBirthday2.jpg");
		document.getElementById("bgChoicePreview3").setAttribute("src", "images/backgrounds/bgBirthday3.jpg");

		document.getElementById("bgChoice1").value = "BirthdayBG1";
		document.getElementById("bgChoice2").value = "BirthdayBG2";
		document.getElementById("bgChoice3").value = "BirthdayBG3";
		break;

		case 3:
		generatorType = 3;

		document.getElementById("navbarGeneratorLabel").textContent = "Easter Card";
		document.getElementById("generatorTitle").textContent = "Easter Card";
		document.getElementById("recipientAgeChoice").style.visibility = "hidden";

		document.getElementById("bgChoicePreview1").setAttribute("src", "images/backgrounds/bgEaster1.jpg");
		document.getElementById("bgChoicePreview2").setAttribute("src", "images/backgrounds/bgEaster2.jpg");
		document.getElementById("bgChoicePreview3").setAttribute("src", "images/backgrounds/bgEaster3.jpg");

		document.getElementById("bgChoice1").value = "EasterBG1";
		document.getElementById("bgChoice2").value = "EasterBG2";
		document.getElementById("bgChoice3").value = "EasterBG3";
		break;
	}
}

function sidebarExpand()
{
	elemSidebar = document.getElementById("sidebar");
	elemContent = document.getElementById("content");

	if(sidebarExtended == false)
	{
		sidebarExtended = true;

		elemSidebar.style.left = "0%";
		elemContent.style.width = "80%";
	}
	else
	{
		sidebarExtended = false;

		elemSidebar.style.left = "-20%";
		elemContent.style.width = "100%";
	}
}

function onSubmit()
{

	if(generatorType == 1)
	{
		if(document.getElementById("bgChoice1").checked)
		{
			cardBackground = "bgChristmas1";
		}
		else if(document.getElementById("bgChoice2").checked)
		{
			cardBackground = "bgChristmas2";
		}
		else if(document.getElementById("bgChoice3").checked)
		{
			cardBackground = "bgChristmas3";
		}
	}
	else if(generatorType == 2)
	{
		if(document.getElementById("bgChoice1").checked)
		{
			cardBackground = "bgBirthday1";
		}
		else if(document.getElementById("bgChoice2").checked)
		{
			cardBackground = "bgBirthday2";
		}
		else if(document.getElementById("bgChoice3").checked)
		{
			cardBackground = "bgBirthday3";
		}
	}
	else if(generatorType == 3)
	{
		if(document.getElementById("bgChoice1").checked)
		{
			cardBackground = "bgEaster1";
		}
		else if(document.getElementById("bgChoice2").checked)
		{
			cardBackground = "bgEaster2";
		}
		else if(document.getElementById("bgChoice3").checked)
		{
			cardBackground = "bgEaster3";
		}
	}

	sessionParse();
	sessionSave();

	window.open("card.html", "_blank", "width=960, height=600");

	return false;
}

function sessionParse()
{
	toName = document.getElementById("toName").value;
	fromName = document.getElementById("fromName").value;
	cardMessage = document.getElementById("cardMessage").value;
	textColor = document.getElementById("textColor").value;
	borderThickness = document.getElementById("borderThickness").value;
	borderColor = document.getElementById("borderColor").value;
	recipientAge = document.getElementById("recipientAge").value;
}

function sessionSave()
{
	sessionStorage.setItem("generatorType", generatorType);
	sessionStorage.setItem("toName", toName);
	sessionStorage.setItem("fromName", fromName);
	sessionStorage.setItem("cardMessage", cardMessage);
	sessionStorage.setItem("cardBackground", cardBackground);
	sessionStorage.setItem("textColor", textColor);
	sessionStorage.setItem("borderThickness", borderThickness);
	sessionStorage.setItem("borderColor", borderColor);
	sessionStorage.setItem("recipientAge", recipientAge);

}
