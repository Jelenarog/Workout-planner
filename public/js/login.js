//const { json } = require("sequelize");

const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();

    if (username && password) {
        const response = await fetch ('api/user/login', {
            method: 'POST', 
            body: JSON.stringify ({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            console.log(`Welcome back, ${username}!`);
            document.location.replace('/')
        }
    } else {
        alert ('Please check your username and password and try again.')
    };
};

const submitBtn = document.querySelector('#loginBtn');
submitBtn.addEventListener('click', loginFormHandler);