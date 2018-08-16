/* this is to be the JavaScript file for the pizzaParlorProject */

/*

 (function() {
  var form     = document.getElementById('all'); // Get form
  var select = form.select;                      // All selections in form
  var optionsM  = select.toppings;                     // Array: meat checkboxes
  var all      = document.getElementById('all');     // The 'All' checkbox

  function updateAll() {
    for (var i = 0; i < optionsM.length; i++) {       // Loop through checkboxes
      optionsM[i].checked = all.checked;              // Update checked property
      console.log(optionsM[i].name);
    }
  }
  addEvent(all, 'change', updateAll);                // Add event listener

  function clearAllOption(e) {
    var target = e.target || e.srcElement;           // Get target of event
    if (!target.checked) {                           // If not checked
      all.checked = false;                           // Uncheck 'All' checkbox
    }
  }
  for (var i = 0; i < optionsM.length; i++) {         // Loop through checkboxes 
    addEvent(optionsM[i], 'change', clearAllOption);  // Add event listener
  }

}()); 

This is supposed to be a chunk of code for select all in the checkbox forms, 
but it throws an error code at line 6 saying 'meat' is undefined.*/

 

function getReceipt() {
	text1 = "";// This initializes our string so it can get passed from  
	text2 = "";// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("Size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal, text1); // All three of these variables will be passed on to each function
};
	
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("Meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	getVeggies(runningTotal, text1);
};

function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("Veggies");
	for (var j = 0; j < veggiesArray.length; j++) {
		if (veggiesArray[j].checked) {
			selectedVeggies.push(veggiesArray[j].value);
			console.log("selected veggies item: ("+veggiesArray[j].value+")");
			text1 = text1+veggiesArray[j].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (veggiesCount - 1);
	} else {
		veggiesTotal = 0;
	}
	runningTotal = (runningTotal + veggiesTotal);
	getCheese(runningTotal, text1);
};

function getCheese(runningTotal, text1) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("Cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			var selectedCheese = cheeseArray[j].value;
			text1 = text1 + selectedCheese + "<br />";
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
		if (selectedCheese === "Goat Cheese") {
			cheeseTotal = 2;
		}
	}
	runningTotal = (runningTotal + cheeseTotal);	
	getCrust(runningTotal, text1);
};


function getCrust(runningTotal, text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("Crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var selectedCrust = crustArray[j].value;
			text1 = text1+selectedCrust+"<br />";
		}
		if (selectedCrust === "Cheese Stuffed") {
			crustTotal = 3;
		}
	}
	runningTotal = (runningTotal + crustTotal);
	getSauce(runningTotal, text1);
};


function getSauce(runningTotal, text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("Sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			var selectedSauce = sauceArray[j].value;
			text1 = text1+selectedSauce+"<br />";
		}
	}
	runningTotal = (runningTotal + sauceTotal);
	document.getElementById("cart").style.opacity=1;
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

};

function myDelete() {
	document.getElementById("menu").reset();
	document.getElementById("cart").style.opacity=0;
};







