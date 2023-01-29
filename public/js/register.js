const registerFormHandler = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#usernameInput').value.trim();
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to register');
        }
    }
};

const registerBtn = document.querySelector('#registerBtn');
registerBtn.addEventListener('click', registerFormHandler);

