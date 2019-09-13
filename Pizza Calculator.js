// begin hier je JavaScript commando's!!
//Job Walst, opdracht "Pizza Calculator"

const pizzaPriceSmall = 4.95;
const pizzaPriceMedium = 9.95; //these are constants; the prices for the sizes of pizza are stored in here
const pizzaPriceLarge = 14.95;
var totalCost = 0; //this variable starts with 0 and is the subtotal for all of the pizzas you want to order

var repeat = true; //this variable is called repeat and is set to true, so we can start a loop
while(repeat == true) //calls a loop (you use while if you don't know how many times it needs to loop) as long as repeat is true it will loop
{
	document.write("<br>");
	var userSize = prompt("please choose a size of pizza, choose from small, medium or large"); //The size the user selects is stored in this variable and shows a prompt, that asks you to choose a pizza size (small, medium or large)
	document.write("Pizza size = "); //writes "pizza size =" on screen
	document.write(userSize); //writes the chosen size on screen
	document.write("<br>"); //makes sure that the user size is not written on the same line as the number of pizzas the user orders

	if(userSize == "small") //if the user size is small, a variable called userNumber will be created and the number of pizzas will be written on screen
	{
		var userNumber = prompt("how many pizzas would you like?"); //shows a prompt that asks the user how many pizzas they want
		document.write("Number of pizzas = "); //writes the chosen number on screen
	    document.write(userNumber);

	    var smallTotal = Number(userNumber)*Number(pizzaPriceSmall); //creates the variable smallTotal, the smalltotal is calculated by multiplying the number of pizzas the user wants with the constant "pizzaPriceSmall"
	    totalCost += smallTotal; //here the subtotal cost is incremented to the total cost of the small pizzas
	    document.write("<br>");
	    document.write("Total cost = € "); //writes the total cost of the small pizzas on screen
	    document.write(smallTotal);
	}
	else if(userSize == "medium") //if the pizza size is selected to be medium the code will continue here
	{
		userNumber = prompt("how many pizzas would you like?"); //the same as all the above comments
		document.write("Number of pizzas = ");
		document.write(userNumber);

		var mediumTotal = Number(userNumber)*Number(pizzaPriceMedium);
		totalCost += mediumTotal;
		document.write("<br>");
		document.write("Total cost = € ");
		document.write(mediumTotal);
	}
	else if(userSize == "large")
	{
		userNumber = prompt("how many pizzas would you like?");
		document.write("Number of pizzas = ");
		document.write(userNumber);

		var largeTotal = Number(userNumber)*Number(pizzaPriceLarge);
		totalCost += largeTotal;
		document.write("<br>");
		document.write("Total cost = € ");
		document.write(largeTotal);
	}
	else //if another size is selected than small, medium or large, an pop-up will show telling that something has gone wrong
	{
		alert("oops!! that pizza size does not exist, please try again");
	}

	var askRepeat = prompt("Would you like to order something else?"); //creates the variable "askRepeat" and shows the prompt that asks if you want to order more
	if(askRepeat == 'no') //if you answer "no" in the above prompt, the loop will end, because repeat will be set to false. If you answer "yes" (or something else) the loop will continue and will remain true
	{
		repeat = false;
	}
}

document.write("<br> Subtotal = € " + totalCost); // the subtotal cost gets added to the variable "totalCost" and writes the subtotal price on another line on screen  

