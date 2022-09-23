// create three variables to store the information needed, namely:

// 1.the price of each letter = 5
// 2. the quantity = 15
// 3. calculate the total by multipying the price by quantity

//4. Get the element with an id "cost"


//lastly use innerHTML to update the total cost

var priceOfLetter = 5;
var letterQuantity = 15;
let totalCost = priceOfLetter * letterQuantity;

document.getElementById("totalCost").innerHTML = totalCost;

