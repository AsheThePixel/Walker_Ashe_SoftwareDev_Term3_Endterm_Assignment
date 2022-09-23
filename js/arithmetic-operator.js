/* 1. create
two variables: one to store the
subtotal of the order, the other
to hold the cost of shipping
the order; so the variables are
named accordingly: subtotal(13+1)*5;
and shipping 0.5*(13+1). */

//subtotal should be 70 and shipping value should be 7


// 2. Create the total by combining the subtotal and shipping values

// 3.  Write the results to the screen

/* example: 
elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;

*/

var subtotal = (13+1)*5;
var shipping = 0.5*(13+1);
var total = subtotal + shipping;

var elSub = document.getElementById("subtotal");
var elShip = document.getElementById("shipping");
var elTotal = document.getElementById("total");

elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;





