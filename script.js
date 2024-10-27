// Function to display user data
function displayUserData(userData) {
    const content = document.getElementById('content');
  
    if (userData) {
      content.innerHTML = `
        <h1 class="text-2xl font-bold mb-4">User Data</h1>
        <ul>
          <li>ID: ${userData.id}</li>
          <li>First Name: ${userData.first_name}</li>
          <li>Last Name: ${userData.last_name || 'N/A'}</li>
          <li>Username: ${userData.username || 'N/A'}</li>
          <li>Language Code: ${userData.language_code}</li>
          <li>Is Premium: ${userData.is_premium ? 'Yes' : 'No'}</li>
        </ul>
      `;
    } else {
      content.innerHTML = 'Loading...';
    }
  }
  
  // Initialize the app and fetch user data
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof WebApp !== 'undefined' && WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
      const userData = WebApp.initDataUnsafe.user;
      displayUserData(userData);
    } else {
      console.error('WebApp SDK is not available or user data is missing.');
    }
  });
  