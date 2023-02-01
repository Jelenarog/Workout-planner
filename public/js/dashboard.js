const favBtn = document.querySelector('#favBtn');
// const starIcon = document.querySelector('#starIcon');



let startDate = document.getElementById('startDate')
        let endDate = document.getElementById('endDate')

        startDate.addEventListener('change', (e) => {
            let startDateVal = e.target.value
            document.getElementById('startDateSelected').innerText = startDateVal
        });

/* fav button (star icon) event listener */
const favExercise = (e) => {
    e.preventDefault();
    if (favBtn.innerHTML == '&#9734;') {
        favBtn.innerHTML = '&#9733;'
    } else {
        favBtn.innerHTML = '&#9734'
    }
};

favBtn.addEventListener('click', favExercise);





