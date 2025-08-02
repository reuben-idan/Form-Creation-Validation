// Async function to fetch and display user data
async function fetchUserData() {
    // API endpoint for user data
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Get the container where we'll display the data
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        // Parse the JSON response
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a list element to hold user names
        const userList = document.createElement('ul');
        
        // Add each user's name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Add the list to the container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle any errors that occur during fetch
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run the fetch function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
