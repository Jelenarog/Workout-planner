// add 'Sign Out' 
const logoutBtn = document.querySelector('.btn', logout);

const logout = async () => {
    const response = await fetch('api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out')
    }
}


logoutBtn.addEventListener('submit', logout);

