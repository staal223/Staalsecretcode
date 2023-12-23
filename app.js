// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var addbuttonk = document.getElementById("addbuttonk");
var addbutton = document.getElementById("addbutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// addbuttonwater.onclick = function() {
  // modal.style.display = "block";
// }

// addbutton.onclick = function() {
//     modal.style.display = "block";
//   }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById('addMealForm').onsubmit = function() {
  // Logic to handle the meal data submission
  // Prevent actual form submission for demo purposes
  return false;
};


function readStorage(){
  fetch('./Storage.json')

  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => console.log(data)) // Do something with the data
  .catch((error) => console.error(error)); // Handle errors
}

// addbutton.onclick = function () {

//   const data = fs.readFileSync('Storage.json');

//   const jsonstorage = JSON.parse(data);

//  // var jsonData = document.getElementById("jsonstorage");
// }
