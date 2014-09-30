$(document).on('ready', function() {

// Class for ingredients
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

FoodItem.prototype.toString = function() {
	return (
	'*' + this.name + '*\n' + 
	'Calories: ' + this.calories + '\n' +
	'Vegan: ' + this.vegan + '\n' +
	'Gluten Free: ' + this.glutenFree + '\n' +
	'Citrus Free: ' + this.citrusFree 
	);
};
//////////////////////

// var beer = new FoodItem('Beer', 500, true, false, true);
// console.log(beer.toString());

// var italianIce = new FoodItem('Italian Ice', 200, true, true, false);
// console.log(italianIce.toString());

// var coffee = new FoodItem('Coffee', 10, true, true, true);
// console.log(coffee.toString());

//////////////////////
var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description; 
	this.price = price;
	this.ingredients = ingredients;
};

Drink.prototype.toString = function() {
	var ingredientNames = '\n';

	for(var i = 0; i < this.ingredients.length; i++) {
		var ingredientNames = ingredientNames + this.ingredients[i].name + ' ';
	}

	return (
	'\n*' + this.name + '*\n' + 
	'Description: ' + this.description + '\n' +
	'Price: $' + this.price + '\n' +
	'Ingredients:' + ingredientNames + '\n' +
	'Dietary Info: ' + '\n' + 
	'Vegan? ' + this.isVegan() + '\n' + 
	'Gluten Free? ' + this.isGlutenFree() + '\n' + 
	'Citrus Free? ' + this.isCitrusFree() + '\n'
	);
};

Drink.prototype.isVegan = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].vegan !== true)
			return false;
	};
	return true;
}

Drink.prototype.isGlutenFree = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].glutenFree !== true)
			return false;
	};
	return true;
}

Drink.prototype.isCitrusFree = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].citrusFree !== true)
			return false;
	};
	return true;
}


//////////////////////
var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description; 
	this.price = price;
	this.ingredients = ingredients;
};

Plate.prototype.toString = function() {
	var ingredientNames = '\n';

	for(var i = 0; i < this.ingredients.length; i++) {
		var ingredientNames = ingredientNames + this.ingredients[i].name + ' ';
	};

	return (
	'\n*' + this.name + '*\n' + 
	'Description: ' + this.description + '\n' +
	'Price: $' + this.price + '\n' +
	'Ingredients: ' + ingredientNames + '\n' +
	'Dietary Info: ' + '\n' + 
	'Vegan? ' + this.isVegan() + '\n' + 
	'Gluten Free? ' + this.isGlutenFree() + '\n' + 
	'Citrus Free? ' + this.isCitrusFree() + '\n'
	);
};

Plate.prototype.isVegan = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].vegan !== true)
			return false;
	};
	return true;
}

Plate.prototype.isGlutenFree = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].glutenFree !== true)
			return false;
	};
	return true;
}

Plate.prototype.isCitrusFree = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].citrusFree !== true)
			return false;
	};
	return true;
}

/////////////////////
var Order = function(plates) {
	this.arrayOfPlates = plates;
};

Order.prototype.toString = function() {
	for (var i = 0; i < plates.length; i++) {
		console.log( plates[i].name) + '\n';
	}
}


 ///////////////////
var Menu = function(plates) {
	this.arrayOfPlates = plates;
};

Menu.prototype.toString = function() {
	for (var i = 0; i < plates.length; i++) {
		console.log( plates[i].name) + '\n';
	}
};


///////////////////////
var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};

Restaurant.prototype.toString = function() {
	return (
	'Welcome to ' + this.name + '\n' + 
	this.description + '\n\n' + 
	this.menu + '\n'
	);
};

//////////////////
var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};

Customer.prototype.toString = function() {
	return 'Customer: ' + this.dietaryPreference;
};


//Ingredients (FoodItems)
var tequila = new FoodItem('Tequila', 10, true, true, true);
var lime = new FoodItem('Lime', 10, true, true, false);
var beans = new FoodItem('Beans', 400, true, true, true);
var cheese = new FoodItem('Cheese', 600, false, false, true);
var meat = new FoodItem('Meat', 500, false, false, true);
var avocado = new FoodItem('Avocado', 100, true, true, true);
var garlic = new FoodItem('Garlic', 19, true, true, true);


/////// MARGARITA
var margaritaIngredients = [tequila, lime];

var margarita = new Drink('Margarita', 'Awesome bev', 4.99, margaritaIngredients);

//////// BURRITO

var burritoIngredients = [beans, cheese];

var burritoPlate = new Plate('Burrito Plate', 'Cheesy fatness', 6.99, burritoIngredients);

/////// CHEESEBURGER

var garbageBurgerIngredients = [cheese, meat];

var garbageBurgerPlate = new Plate('Garbage Burger Plate', 'Also delicious', 5.99, garbageBurgerIngredients);

////////// GUACAMOLE

var guacamoleIngredients = [avocado, garlic];

var guacamolePlate = new Plate('Guac Plate', 'Really creamy', 8.99, guacamoleIngredients);

///////// MENU

var myMenu = [margarita, burritoPlate, guacamolePlate];

//////// RESTAURANT

var myRestaurant = new Restaurant('DUMPSTER', 'Dive in!', myMenu);
console.log(myRestaurant.toString());

////////// CUSTOMER

var myCustomer = new Customer('Gluten Free');
console.log(myCustomer.toString());



}); // end doc ready