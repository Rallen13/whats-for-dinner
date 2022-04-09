// query selector variables go here 👇

var letsCook = document.querySelector(".button");
var recipe = document.querySelector(".recipe");
var radioButtons = document.querySelectorAll("input[name='option']");

// we've provided you with some data to work with 👇
var sides = [
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
]
var mains = [
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
]
var desserts = [
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
]

// event listeners go here 👇

letsCook.addEventListener("click", displayRecipe);

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRecipe() {
  var selectedOption;
  for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
          selectedOption = radioButtons[i].value;
          break;
      }
  }
  // show the output:
  recipe.innerText = selectedOption ? `You selected ${selectedOption}` : `You haven't selected a recipe`;
}
