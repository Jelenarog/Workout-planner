const submitBtn = document.querySelector('#loginBtn');
const errorMsg = document.querySelector('.loginError');

const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();

    if (username && password) {
        const response = await fetch ('api/users/login', {
            method: 'POST', 
            body: JSON.stringify ({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        errorMsg.classList.remove("text-danger"); //Remove message color if any
        errorMsg.classList.remove("text-success");

        //If user gets logged in show success and redirect to homepage
        if (response.ok) {
            errorMsg.classList.add('text-success');
            errorMsg.innerHTML = 'Login Successful!'
            setTimeout(()=> {
                document.location.replace('/');
            }, 1500);   
        
        //If password/username are incorrect, inform user through message
        } else {
            errorMsg.classList.add('text-danger');
            errorMsg.innerHTML = 'Invalid username and/or password!'
        };
    };
};

submitBtn.addEventListener('click', loginFormHandler);