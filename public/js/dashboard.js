const dashboardLink = document.querySelector('#dashboard-link');

//Grabbing todays day an converting it to YYYY-MM-DD !Important: Need to update to local time zone
const currentDate = new Date();
// const formattedDate = currentDate.toISOString().split('T')[0]; // *this needs to be changed to UTC*

        let month = `${currentDate.getMonth()+1}`
        let day = `${currentDate.getDate()}`;
        let year = currentDate.getFullYear();

    if (month.length < 2) 
        month = `0${month}`;
    if (day.length < 2) 
        day = `0${day}`;

    let formattedDate = [year, month, day].join('-');

//Get request to controller home routes for dashboard url
const showSchedule = () => {
    document.location.replace(`/dashboard/${formattedDate}`);
};

dashboardLink.addEventListener('click', showSchedule); 









/*---------------- Commented code ----------------*/
// const getDashboard = async (e) => {
//     e.preventDefault();
//     console.log('this button works')

//     const currentDate = new Date();
//     const formattedDate = currentDate.toISOString().split('T')[0];
// }

//     const response = await fetch(`/dashboard/${formattedDate}`, {
//         method: 'GET',   
//  })
    
//     if (response.ok) {
//         console.log(formattedDate)
//     } else {
//         console.log('error')
//     }


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

// const favBtn = document.querySelector('#favBtn');
// const starIcon = document.querySelector('#starIcon');



/*let startDate = document.getElementById('startDate')
       

        startDate.addEventListener('change', (e) => {
            let datepickerVal = e.target.value
            document.getElementById('startDateSelected').innerText = datepickerVal
        });
*/




