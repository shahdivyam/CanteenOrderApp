// JS to Handle Firebase 

var ref = new Firebase("https://mechfood.firebaseio.com/");

var products = ref.child("Products");
var carts = ref.child("CartsWeb");
var orders = ref.child("Orders");

var myCart;

function createCart(){
	
	"use strict";
	myCart = carts.push();
	//console.log(myCart.key());
      
}
// Working fine addTo Cart - this function is updating the info to firebase //
function addToCart(){
	
	var foodObj = this.parentNode.parentNode;
	//console.log(foodObj);
	var foodName = $(foodObj).children(".itemName");
	var foodRate  = $(foodObj).children(".itemFooter").children(".itemRate");
	var quantity = 1;
	//console.log(foodName.html());
	var object = {
		"foodName" : foodName.html(),
		"foodRate" : foodRate.html(),
		"quantity" : quantity
	};
	
	myCart.push(object);
	console.log("item pushed to cart");
}
function getDataForMenu(snapshot){
	
	/* initialising all elements required for item block*/
	"use strict";
	
	var listItemObj = document.createElement("li");
	var foodObj = document.createElement("div");
	var nameObj = document.createElement("div");
	var imageObj = document.createElement("div");	
	var itemFooterObj = document.createElement("div");
	var rateObj = document.createElement("div");
	var cartObj = document.createElement("div");
	
	$(cartObj).click(addToCart);
	
	/*Adding content to the elements*/
	var name = snapshot.child("productName").val();
	var price = snapshot.child("rate").val();
	var imageURL = snapshot.child("imageURL").val();
	$(cartObj).html(" <span class='glyphicon glyphicon-shopping-cart'></span>");
	
	nameObj.innerHTML = name;
	rateObj.innerHTML = price;
	
	
	/* Appending  all objects to food_obj box */
	$(nameObj).appendTo(foodObj);
	$(imageObj).appendTo(foodObj);
	$(rateObj).appendTo(itemFooterObj);
	$(cartObj).appendTo(itemFooterObj);
	$(itemFooterObj).appendTo(foodObj);
	
	
	$('<img style="height:200px;width:250px">',{src:imageURL}).appendTo(imageObj);
	
	//$("<img>", {src:imageURL}).addClass("itemImage").appendTo(imageObj);
	
	
	/* appending foodObj main box to list item and then appending list item to Main list*/
	$(foodObj).appendTo(listItemObj);
	$(listItemObj).appendTo("#menuBlock .dish_list");
	
	/* adding classes to the elements created */
	
	
	$(nameObj).addClass("itemName");
	$(imageObj).addClass("itemImage");
	$(itemFooterObj).addClass("itemFooter");
	$(rateObj).addClass("itemRate");
	$(cartObj).addClass("itemAddToCart");
	$(foodObj).addClass("mainBox");
	
	
	
	//console.log("Menu item added!");
	}

// POPULAR

function getDataForPopular(snapshot){
	
	/* initialising all elements required for item block*/
	"use strict";
	
	var listItemObj = document.createElement("li");
	var foodObj = document.createElement("div");
	var nameObj = document.createElement("div");
	var imageObj = document.createElement("div");	
	var itemFooterObj = document.createElement("div");
	var rateObj = document.createElement("div");
	var cartObj = document.createElement("div");
	
	$(cartObj).click(addToCart);
	
	
	/*Adding content to the elements*/
	var name = snapshot.child("productName").val();
	var price = snapshot.child("rate").val();
	var imageURL = snapshot.child("imageURL").val();
	$(cartObj).html("<span class='glyphicon glyphicon-shopping-cart'></span>");
	
	nameObj.innerHTML = name;
	rateObj.innerHTML = price;
	
	
	/* Appending  all objects to food_obj box */
	$(nameObj).appendTo(foodObj);
	$(imageObj).appendTo(foodObj);
	$(rateObj).appendTo(itemFooterObj);
	$(cartObj).appendTo(itemFooterObj);
	$(itemFooterObj).appendTo(foodObj);
	
	
	$('<img style="height:200px;width:250px">',{src:imageURL}).appendTo(imageObj);
	
	//$("<img>", {src:imageURL}).addClass("itemImage").appendTo(imageObj);
	
	
	/* appending foodObj main box to list item and then appending list item to Main list*/
	$(foodObj).appendTo(listItemObj);
	$(listItemObj).appendTo("#popularBlock .dish_list");
	
	/* adding classes to the elements created */
	
	$(listItemObj).css("display","block");
	$(nameObj).addClass("itemName");
	$(imageObj).addClass("itemImage");
	$(itemFooterObj).addClass("itemFooter");
	$(rateObj).addClass("itemRate");
	$(cartObj).addClass("itemAddToCart");
	$(foodObj).addClass("mainBox");
	
	
	
	//console.log("Popular item added!");
	
	
	}
function funcIncrease(){
	"use strict";
	
	var cartBox = this.parentNode.parentNode;
	var itemId = $(cartBox).children(".itemID").html();
	//console.log(itemId);
	var price = parseInt($(cartBox).children(".rate").html()); 
	var totalSum = parseInt($(cartBox).children(".total").html());
	var quantity = parseInt($(cartBox).children(".quantity").html());
	quantity++;
	$(cartBox).children(".quantity").html(quantity);
	$(cartBox).children(".total").html(totalSum+price);
	var checkoutTotal  = parseInt($(".checkout_total").html());
	$(".checkout_total").html(checkoutTotal+price);
		console.log("func Increase called");
	
	
	myCart.child(itemId).update(
	     {"quantity":quantity}
	);
	console.log("func Increase called");
	
}
function removeItem(){
	var cartBox = this.parentNode;
	var itemId = $(cartBox).children(".itemID").html();
	//console.log(itemId);
	var price = parseInt($(cartBox).children(".rate").html()); 
	var totalSum = parseInt($(cartBox).children(".total").html());
	var quantity = parseInt($(cartBox).children(".quantity").html());
	
	
	var checkoutTotal  = parseInt($(".checkout_total").html());
	$(".checkout_total").html(checkoutTotal - (price*quantity));
		console.log("func remove called");
	
	myCart.child(itemId).remove();
	
	$(cartBox.parentNode).remove();
	
	
	}

function funcDecrease(){
	var cartBox = this.parentNode.parentNode;
	var itemId = $(cartBox).children(".itemID").html();
	var price = parseInt($(cartBox).children(".rate").html()); 
	var totalSum = parseInt($(cartBox).children(".total").html());
	var quantity = parseInt($(cartBox).children(".quantity").html());
	if(quantity > 1){
		quantity--;
		$(cartBox).children(".quantity").html(quantity);
		$(cartBox).children(".total").html(totalSum-price);
		var checkoutTotal  = parseInt($(".checkout_total").html());
		$(".checkout_total").html(checkoutTotal-price);
		myCart.child(itemId).update(
	     {"quantity":quantity}
	    );
		}
	if(quantity==1){
		var cartBox = this.parentNode.parentNode;
	var itemId = $(cartBox).children(".itemID").html();
	//console.log(itemId);
	var price = parseInt($(cartBox).children(".rate").html()); 
	var totalSum = parseInt($(cartBox).children(".total").html());
	var quantity = parseInt($(cartBox).children(".quantity").html());
	
	
	var checkoutTotal  = parseInt($(".checkout_total").html());
	$(".checkout_total").html(checkoutTotal - (price*quantity));
	
	myCart.child(itemId).remove();
	
	$(cartBox.parentNode).remove();
		}
	}


function getDataForCart(snapshot,prevChildKey){
	"use strict";
	
	var listItemObj = document.createElement("li");
	var cartBox = document.createElement("div");
	var cartItemNameObj = document.createElement("div");
	var removeItemObj = document.createElement("div");
	var quantityObj = document.createElement("div");
	var changeQuantityObj = document.createElement("div");
	var increaseQuantityObj = document.createElement("div"); 
	var decreaseQuantityObj = document.createElement("div");
	var rateObj = document.createElement("div");
	var totalObj = document.createElement("div");
	
	/* adding a div element to store ID of product and appending it to cart box*/
		var itemId = document.createElement("div");
		$(itemId).addClass("itemID");
		$(itemId).html(snapshot.key());
		
		console.log("snapshot.keyl() = ");
	
		console.log(snapshot.key());
	$(cartBox).append(itemId);
	
	
	$(increaseQuantityObj).html("+");
	$(decreaseQuantityObj).html("-");
	$(removeItemObj).html("REMOVE");
	$(removeItemObj).css("cursor","pointer");
	
	
	/* storing data for snapshot into variables*/
	var name = snapshot.child("foodName").val();
	var quantity = snapshot.child("quantity").val();
	var rate = snapshot.child("foodRate").val();
	var total = quantity*rate;
	
	/* setting values into Elements Created and adding function calls to element clicks */ 
	$(cartItemNameObj).html(name);
	$(quantityObj).html(quantity);
	$(rateObj).html(rate);
	$(totalObj).html(total);
	var checkoutTotal = parseInt($(".checkout_total").html());
	checkoutTotal+=total;
	$(".checkout_total").html(checkoutTotal);
	
	
	$(increaseQuantityObj).click(funcIncrease);
	$(decreaseQuantityObj).click(funcDecrease);
	$(removeItemObj).click(removeItem);
	
	
	
	/* Adding class to objects created*/
	$(listItemObj).css("display","inline");
	$(cartBox).addClass("cartBox");
	$(cartItemNameObj).addClass("cartItemName");
	$(removeItemObj).addClass("remove");
	$(quantityObj).addClass("quantity");
	$(changeQuantityObj).addClass("changeQuantity");
	$(increaseQuantityObj).addClass("increase");
	$(decreaseQuantityObj).addClass("decrease");
	$(rateObj).addClass("rate");
	$(totalObj).addClass("total");
	
	/* Appending the elements created to form main cart Item object which will be appended to list item which in turn will be appended to ordered list*/
	$(cartBox).append(cartItemNameObj);
	$(cartBox).append(removeItemObj);
	$(cartBox).append(quantityObj);
	$(cartBox).append(changeQuantityObj);
	$(cartBox).append(rateObj);
	$(cartBox).append(totalObj);
	$(changeQuantityObj).append(increaseQuantityObj);
	$(changeQuantityObj).append(decreaseQuantityObj);
	
	$(listItemObj).append(cartBox);
	$("#cartBlock ol").append(listItemObj);
	//console.log("Cart Item added");
	}

$(document).ready(function(){
	"use strict";
	createCart();
	products.on("child_added",getDataForMenu);
	products.orderByChild("rate").limitToLast(3).on("child_added",getDataForPopular);
	
	myCart.on("child_added",getDataForCart);
	
	$(".checkout_submit").click(function(){
		var total = parseInt($(".checkout_total").html());
		console.log(total);
		
		var tableNumber = parseInt($(".form-control").html);
		
		if(total===0){
			alert("Please enter something in your cart!");
		}
		var finalOrder={ 
		    
			"total":total,
			"tableNumber":tableNumber,
			"status":"accepted"};
			
		console.log("checkout function called");
		
		orders.push(finalOrder);
		
		
		});
	
	
	});
