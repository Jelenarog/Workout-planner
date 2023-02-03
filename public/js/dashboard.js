// const favBtn = document.querySelector('#favBtn');
// const starIcon = document.querySelector('#starIcon');



/*let startDate = document.getElementById('startDate')
       

        startDate.addEventListener('change', (e) => {
            let datepickerVal = e.target.value
            document.getElementById('startDateSelected').innerText = datepickerVal
        });
*/
        
const dashboardLink = document.querySelector('#dashboard-link');

const getDashboard = async (e) => {
    e.preventDefault();
    console.log('this button works')

const currentDate = new Date();
    var formattedDate = currentDate.toISOString().split('T')[0];
console.log(formattedDate);
console.log(typeof formattedDate);
    const response = await fetch(`/dashboard/${formattedDate}`, {
        method: 'GET',   
 })
    
    if (response.ok) {
        console.log(formattedDate)
    } else {
        console.log('error')
    }

    
}

dashboardLink.addEventListener('click', getDashboard); 

/* fav button (star icon) event listener */
// filled  &#9733
// unfilled  &#9734 
/*

const favExercise = (e) => {
    e.preventDefault();
    if (favBtn.innerHTML == '★') {
        favBtn.innerHTML = '&#9734;'
        console.log('filled');
    } else {
        favBtn.innerHTML = '&#9733;'
    }
    
};

favBtn.addEventListener('click', favExercise); 
*/






