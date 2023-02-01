const usernameErr = document.querySelector('.usernameError');
const emailErr = document.querySelector('.emailError');
const passwordErr = document.querySelector('.passwordError');
const createSuccess = document.querySelector('.accCreated');

const registerFormHandler = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#usernameInput').value.trim();
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();

    //Password length check
    if(password.length < 8) {
        passwordErr.innerHTML = 'Password must be at least 8 characters long!';
        return;
    }

    if (username && email && password) {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            //Successful
            createSuccess.innerHTML = 'Your account has been created!'
            setTimeout(() => {
                document.location.replace('/login')
            }, 2000)
        } else {
            usernameErr.innerHTML = 'Username already exists'
            return;
        }
    }
};

const registerBtn = document.querySelector('#registerBtn');
registerBtn.addEventListener('click', registerFormHandler);

