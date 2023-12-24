document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("create-meal-modal");
  var btn = document.getElementById("create-meal-button");
  var span = document.getElementsByClassName("close-button")[0];

  // Update the modal opening logic
  btn.onclick = function() {
    if (document.getElementById("meal-name").value) {
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
    addIngredient(selectedIngredient);
  });

});

// Call loadMeals when the page loads
window.onload = loadMeals;


// Populate select dropdown function and other placeholder functions remain unchanged...
function fetchFoodItems() {
  const apiUrl = 'https://nutrimonapi.azurewebsites.net/api/FoodItems';
  const headers = {
    'accept': 'text/plain',
    'X-API-Key': '170179'
  };

  return fetch(apiUrl, { headers })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error fetching data:', error));
}

function fetchFoodItemNutrient(foodId) {
  const apiUrl = 'https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/'+foodId+'/BySortKey/1110';
  const headers = {
    'accept': 'text/plain',
    'X-API-Key': '170179'
  };
  return fetch(apiUrl, { headers })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.error('Error fetching data:', error));
}

// Function to populate the select dropdown with fetched food items
function populateSelectDropdown(items) {
  const select = document.getElementById('ingredients-select');
  select.innerHTML = '';

  items.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item.foodName
    option.value = item.foodID; 
    //fetchFoodItemNutrient(item.foodID).then()
    select.appendChild(option);
  });
}

fetchFoodItems().then(foodItems => {
  populateSelectDropdown(foodItems);
});



function addIngredient(ingredientId) {
  const select = document.getElementById('ingredients-select');
  const selectedItems = [];

  for (let option of select.options) {
    if (option.selected) {
      const item = {
        id: option.value,
        name: option.text,
        additionalInfo: "Nutrients: ..." 
      };
      selectedItems.push(item);
    }
  }
  // Temporarily store the selected items
  window.currentSelection = selectedItems;
  saveMeal()
}


// This function creates a JSON file from the selected items and triggers a download
function saveMeal() {
  const mealName = document.getElementById('meal-name').value.trim();
  if (!window.currentSelection || window.currentSelection.length === 0) {
    alert('No items selected for the meal');
    return;
  }

  // Load existing meals from localStorage or initialize an empty object
  const meals = JSON.parse(localStorage.getItem('meals')) || {};
  
  // Save the current selection under the specified meal
  meals[mealName] = window.currentSelection;
  localStorage.setItem('meals', JSON.stringify(meals));

  // Clear current selection and meal name input
  window.currentSelection = [];  
  document.getElementById('meal-name').value = '';
  document.getElementById('ingredients-select').value = [];

  alert(`Meal '${mealName}' saved successfully`);
}



function loadMeals() {
  const storedMeals = localStorage.getItem('meals');
  const mealsContainer = document.getElementById('data-container');
  let mealCounter = 1
  // Clear existing content
  mealsContainer.innerHTML = '';

  if (storedMeals) {
    const meals = JSON.parse(storedMeals);
    const numMeal = Object.keys(meals).length

    Object.keys(meals).forEach(mealName => {
      const mealDiv = document.createElement('div');
      mealDiv.className = 'meal';

      const mealTitle = document.createElement('h3');
      mealTitle.textContent = ' #' + mealCounter + ' ' + mealName + ' Number of ingredients ' + meals[mealName].length;
      mealDiv.appendChild(mealTitle);
      mealCounter++
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        if (confirm(`Are you sure you want to delete the meal '${mealName}'?`)) {
          deleteMeal(mealName);
        }
      };
      mealDiv.appendChild(deleteButton);
  
      mealsContainer.appendChild(mealDiv);
      const itemList = document.createElement('ul');
      meals[mealName].forEach(item => {
        const itemLi = document.createElement('li');
        itemLi.textContent = `${item.name} (ID: ${item.id}) - ${item.additionalInfo}`;
        itemList.appendChild(itemLi);
        // Create a delete button for each ingredient
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Ingredient';
        deleteButton.onclick = function() {
          if (confirm(`Are you sure you want to delete '${item.name}' from '${mealName}'?`)) {
            deleteIngredient(mealName, item.id);
          }
        };
        itemLi.appendChild(deleteButton);
        itemList.appendChild(itemLi);
      });

      mealDiv.appendChild(itemList);
      mealsContainer.appendChild(mealDiv);
    });
  } else {
    mealsContainer.innerHTML = '<p>No meals stored</p>';
  }
}

function deleteMeal(mealName) {
  const storedMeals = localStorage.getItem('meals');
  if (storedMeals) {
    const meals = JSON.parse(storedMeals);

    if (meals[mealName]) {
      delete meals[mealName]; // Remove the specified meal
      localStorage.setItem('meals', JSON.stringify(meals)); // Update localStorage
      alert(`Meal '${mealName}' deleted successfully`);
      loadMeals(); // Refresh the displayed meals
    } else {
      alert(`Meal '${mealName}' not found`);
    }
  } else {
    alert('No meals stored');
  }
}

function deleteIngredient(mealName, ingredientId) {
  const storedMeals = localStorage.getItem('meals');
  if (storedMeals) {
    const meals = JSON.parse(storedMeals);

    if (meals[mealName]) {
      meals[mealName] = meals[mealName].filter(item => item.id !== ingredientId);
      localStorage.setItem('meals', JSON.stringify(meals));
      alert(`Ingredient '${ingredientId}' deleted successfully from '${mealName}'`);
      loadMeals(); // Refresh the displayed meals
    } else {
      alert(`Meal '${mealName}' not found`);
    }
  } else {
    alert('No meals stored');
  }
}