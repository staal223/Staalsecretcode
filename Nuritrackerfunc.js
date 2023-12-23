document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("create-meal-modal");
  var btn = document.getElementById("create-meal-button");
  var span = document.getElementsByClassName("close-button")[0];

  // Update the modal opening logic
  btn.onclick = function() {
    const mealName = prompt("Please enter a name for your meal:", "");
    if (mealName) {
        document.getElementById("meal-name").value = mealName;
        modal.style.display = "block";
        fetchFoodItems();
    } else {
        alert("You need to enter a meal name to proceed.");
    }
  };

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  document.getElementById('add-ingredient-btn').addEventListener('click', function() {
    var selectedIngredient = document.getElementById('ingredients-select').value;
    addToMealList(selectedIngredient);
  });

});



function fetchNutrientDataForItem(foodID) {
  const nutrientApiUrls = [
    `https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/${foodID}/BySortKey/1110`,
    `https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/${foodID}/BySortKey/1220`,
    `https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/${foodID}/BySortKey/1240/`,
    `https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/${foodID}/BySortKey/1310`
  ];

  const fetchPromises = nutrientApiUrls.map(url => 
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': '170179'
      }
    }).then(response => response.json()));
  
    return Promise.all(fetchPromises);
  }



// Modified fetchFoodItems function to include search functionality
function fetchFoodItems(searchTerm = '') {
  const apiUrl = 'https://nutrimonapi.azurewebsites.net/api/FoodItems';
  const headers = {
    'accept': 'text/plain',
    'X-API-Key': '170179'
  };

  // Append searchTerm in query if present
  const queryUrl = searchTerm ? `${apiUrl}?search=${encodeURIComponent(searchTerm)}` : apiUrl;

  fetch(queryUrl, { headers: headers })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      populateSelectDropdown(data);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
}

// Populate select dropdown function and other placeholder functions remain unchanged...


// Function to populate the select dropdown with fetched food items
function populateSelectDropdown(items) {
  const select = document.getElementById('ingredients-select');
  select.innerHTML = '';

  items.forEach(item => {
    fetchNutrientDataForItem(item.foodID).then(nutrientData => {
      const option = document.createElement('option');
      option.value = item.foodID;
      option.textContent = `${item.foodName} - Nutrients: ...`; // Format as needed
      select.appendChild(option);
    });
  });
}

// Make sure fetchNutrientDataForItem returns nutrientData in a format that can be used here.


// These functions are placeholders for functionality to add/remove ingredients from a list
function addIngredient(ingredientId) {
  // Logic to add ingredient to the list
}

function removeIngredient(ingredientId) {
  // Logic to remove ingredient from the list
}





var selectedItems = [];

function addToMeal(foodID, foodName) {
  selectedItems.push({ foodID, foodName });
  updateMealList();
}

function deleteFromMeal(foodID) {
  selectedItems = selectedItems.filter(item => item.foodID !== foodID);
  updateMealList();
}

function addToMealList(ingredientId) {
  // Find the ingredient in the fetched data
  var foodItems = JSON.parse(localStorage.getItem('foodItems'));
  var ingredient = foodItems.find(item => item.foodID == ingredientId);

  if (ingredient) {
    var mealList = document.getElementById('meal-list');
    var listItem = document.createElement('li');
    listItem.textContent = ingredient.foodName; // Assuming 'foodName' is the property
    mealList.appendChild(listItem);
  }
}


function updateMealList() {
  const mealList = document.getElementById('meal-list');
  mealList.innerHTML = ''; // Clear current list

  selectedItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.foodName;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteFromMeal(item.foodID);
    listItem.appendChild(deleteBtn);
    mealList.appendChild(listItem);
  });
}



// Function for creating a meal
function createMeal() {
  const mealName = document.getElementById('meal-name').value.trim();
  if (!mealName) {
    alert('Please enter a name for the meal.');
    return;
  }

  const newMeal = {
    name: mealName,
    items: selectedItems
  };

  saveMeal(newMeal);
}

// Function to save the meal
function saveMeal(meal) {
  let meals = JSON.parse(localStorage.getItem('meals')) || [];
  meals.push(meal);
  localStorage.setItem('meals', JSON.stringify(meals));

  displayMeals(); // Update the display
}

// Function to display meals
function displayMeals() {
  const meals = JSON.parse(localStorage.getItem('meals')) || [];
  const mealsList = document.getElementById('meals-list');
  mealsList.innerHTML = '';

  meals.forEach(meal => {
    const mealElement = document.createElement('div');
    mealElement.textContent = `${meal.name}: ${meal.items.map(item => item.foodName).join(', ')}`;
    mealsList.appendChild(mealElement);
  });
}