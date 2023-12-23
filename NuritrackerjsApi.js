const baseUrl = 'https://nutrimonapi.azurewebsites.net/api';

// Function to fetch Food Composition Specifications by ID
function fetchFoodCompSpecs(id) {
  return fetch(`${baseUrl}/FoodCompSpecs/${id}`)
    .then(response => response.json());
}

// Function to fetch Food Composition Specifications by Food ID and Sort Key
function fetchFoodCompSpecsByItemAndSort(FoodID, SortKey) {
  return fetch(`${baseUrl}/FoodCompSpecs/ByItem/${FoodID}/BySortKey/${SortKey}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch Food Groups by ID
function fetchFoodGroups(id) {
  return fetch(`${baseUrl}/FoodGroups/${id}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch all Food Items
function fetchFoodItems() {
  return fetch(`${baseUrl}/FoodItems`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch Food Items by Group ID
function fetchFoodItemsByGroup(FoodGroupID) {
  return fetch(`${baseUrl}/FoodItems/ByGroup/${FoodGroupID}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch Food Items by Search String
function fetchFoodItemsBySearch(SearchString) {
  return fetch(`${baseUrl}/FoodItems/BySearch/${SearchString}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch Food Items by ID
function fetchFoodItemById(id) {
  return fetch(`${baseUrl}/FoodItems/${id}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch Food Parameters
function fetchFoodParameter() {
  return fetch(`${baseUrl}/FoodParameter`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch Food Parameter by ID
function fetchFoodParameterById(id) {
  return fetch(`${baseUrl}/FoodParameter/${id}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Function to fetch Food Source by ID
function fetchFoodSourceById(id) {
  return fetch(`${baseUrl}/FoodSource/${id}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching API 1:', error));
}

// Example usage:
fetchFoodItems().then(data => {
  console.log('Food Items:', data);
  // Here you would update your webpage with the data
});

// Be sure to add error handling, such as .catch() statements to your fetch calls.
