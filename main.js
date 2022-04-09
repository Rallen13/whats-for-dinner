// query selector variables go here 👇

var letsCook = document.querySelector(".button");
var recipeContainer = document.querySelector(".recipe-container");
var recipeTypes = document.querySelectorAll("input[name='recipeType']");

// we've provided you with some data to work with 👇

var recipes = {
  sides: [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
],
  mains: [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
],
  desserts: [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
],
}

// event listeners go here 👇

letsCook.addEventListener("click", displayRecipe);

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRecipe() {
  var selectedType;

  for (var i = 0; i < recipeTypes.length; i++) {
      if (recipeTypes[i].checked) {
          selectedType = generateRandomRecipe(recipeTypes[i].value);
          break;
      }
  }

  var recipeHTML = `
    <p class="recipe-intro">You should make:</p>
    <h2 class="recipe-title">${selectedType}!</h2>
  `

  recipeContainer.innerHTML = selectedType ? `${recipeHTML}` : `You haven't selected a recipe`;
}

function generateRandomRecipe(recipeType) {
  var recipeArray = recipes[recipeType]
  var randomRecipe = recipeArray[getRandomIndex(recipeArray)]
  return randomRecipe
}
