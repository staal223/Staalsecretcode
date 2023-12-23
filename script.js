document.getElementById('registerUser').addEventListener('submit', function(e){
    e.preventDefault();

    var name = document.getElementById('name').value;

    console.log('Name:', name);


    // Here you would typically send this data to a server
});

// Example of retrieving stored data
var userName = localStorage.getItem('userName');

// Use the retrieved data to update the UI or for other purposes
