
// Loader food items and ID.

window.onload = function() {
    fetch('https://nutrimonapi.azurewebsites.net/api/FoodItems', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': '170179'
      }
    })
    .then(response => response.json())
    .then(data => {
      const selectElement = document.getElementById('ingredients-select');
      data.forEach(ingredient => {
        let option = document.createElement('option');
        option.value = ingredient.foodID; // Assuming each ingredient has an Id
        option.textContent = '${ingredient.foodName}' ; // (Energi: ${ingredient.Energi}, Protein: ${ingredient.Protein}, Fedt: ${ingredient.Fedt}, Fiber: ${ingredient.Fiber})`; 
      
       
        selectElement.appendChild(option);
      });
    })
    .catch(error => console.error('Error:', error));
  };
  

  // Fedt sortkeyen 141
  window.onload = function() {
    fetch('https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/1/BySortKey/141', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': '170179'
      }
    })
    .then(response => response.json())
    .then(data => {
      const selectElement = document.getElementById('ingredients-select');
      data.forEach(ingredient => {
        let option = document.createElement('option');
        option.value = ingredient.foodID; // Assuming each ingredient has an Id
        option.textContent = '${ingredient.foodName}' ; // (Energi: ${ingredient.Energi}, Protein: ${ingredient.Protein}, Fedt: ${ingredient.Fedt}, Fiber: ${ingredient.Fiber})`; 
      
       
        selectElement.appendChild(option);
      });
    })
    .catch(error => console.error('Error:', error));

  // 168 Kostfibre
  };
  window.onload = function() {
    fetch('https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/1/BySortKey/168', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': '170179'
      }
    })
    .then(response => response.json())
    .then(data => {
      const selectElement = document.getElementById('ingredients-select');
      data.forEach(ingredient => {
        let option = document.createElement('option');
        option.value = ingredient.foodID; // Assuming each ingredient has an Id
        option.textContent = '${ingredient.foodName}' ; // (Energi: ${ingredient.Energi}, Protein: ${ingredient.Protein}, Fedt: ${ingredient.Fedt}, Fiber: ${ingredient.Fiber})`; 
      
       
        selectElement.appendChild(option);
      });
    })
    .catch(error => console.error('Error:', error));
  };
  

  // 172 sortkey for Tilgængelig Kulhydrater
  window.onload = function() {
    fetch('https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/1/BySortKey/172', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': '170179'
      }
    })
    .then(response => response.json())
    .then(data => {
      const selectElement = document.getElementById('ingredients-select');
      data.forEach(ingredient => {
        let option = document.createElement('option');
        option.value = ingredient.foodID; // Assuming each ingredient has an Id
        option.textContent = '${ingredient.foodName}' ; // (Energi: ${ingredient.Energi}, Protein: ${ingredient.Protein}, Fedt: ${ingredient.Fedt}, Fiber: ${ingredient.Fiber})`; 
      
       
        selectElement.appendChild(option);
      });
    })
    .catch(error => console.error('Error:', error));
  };



// Fedt Sortkeyen
  window.onload = function() {
    fetch('https://nutrimonapi.azurewebsites.net/api/FoodCompSpecs/ByItem/1/BySortKey/218', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-Key': '170179'
      }
    })
    .then(response => response.json())
    .then(data => {
      const selectElement = document.getElementById('ingredients-select');
      data.forEach(ingredient => {
        let option = document.createElement('option');
        option.value = ingredient.foodID; // Assuming each ingredient has an Id
        option.textContent = '${ingredient.foodName}' ; // (Energi: ${ingredient.Energi}, Protein: ${ingredient.Protein}, Fedt: ${ingredient.Fedt}, Fiber: ${ingredient.Fiber})`; 
      
       
        selectElement.appendChild(option);
      });
    })
    .catch(error => console.error('Error:', error));
  };
  