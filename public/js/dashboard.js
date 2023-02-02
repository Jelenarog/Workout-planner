const favBtn = document.querySelector('#favBtn');
// const starIcon = document.querySelector('#starIcon');



let startDate = document.getElementById('startDate')
        let endDate = document.getElementById('endDate')

        startDate.addEventListener('change', (e) => {
            let startDateVal = e.target.value
            document.getElementById('startDateSelected').innerText = startDateVal
        });

/* fav button (star icon) event listener */
// filled  &#9733
// unfilled  &#9734 

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





