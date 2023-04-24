restaurantMenu = {
  smallDish: 8.6,
  appetizer: 5.2,
  vegetarianDish: 12.6,
  veganDish: 14.9,
  meatDish: 18.9,
  chickenDish: 15.5,
  dessert: 4.8,
};

restaurantDrinks = {
  water: 1.9,
  tea: 2.3,
  coffee: 2.4,
  coke: 3.5,
  beer: 3.8,
  wine: 4.2,
  whisky: 4.5,
};

var totalCost, tip, costWithoutTip;
customMenu = restaurantMenu.appetizer;
customMenu = customMenu + restaurantMenu.chickenDish;

customDrinks = restaurantDrinks.beer;

function costCalculator(customMenu, customDrinks) {
  costWithoutTip = customMenu + customDrinks;
  tip = Math.round(costWithoutTip * 0.1);
  totalCost = costWithoutTip + tip;
  return totalCost;
}

console.log(costCalculator(restaurantMenu.veganDish, restaurantDrinks.wine));
