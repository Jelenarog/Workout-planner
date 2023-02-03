//---------------------------------------------------Fitness scheduler dropdown------------------------------------------------------
const exerciseSelectBtn = document.querySelector('#exerciseSelect');
const dateInput = $('#startDate');
const setsInput = document.querySelector('#numSets');
const repsInput = document.querySelector('#numReps');
const weightInput = document.querySelector('#numWeight');
const timeInput = document.querySelector('#numTime');
const scheduleBtn = document.querySelector('#submitExerciseBtn');

//Declare exercise variables
let exerciseId;
let date;
let sets;
let reps;
let weight;
let time;

//Returns submit button to default style
const defaultHandler = () => {
    scheduleBtn.classList.remove('bg-success', 'bg-danger');
    scheduleBtn.innerHTML = 'SUBMIT';
};

//Submit new exercise to schedule
const scheduleExercise = async (e) => {
    e.preventDefault();
    console.log(e.target);
    exerciseId = parseInt(exerciseSelectBtn.value);
    console.log(exerciseId);
    date = dateInput.val(); //give date yy-mm-dd
    sets = parseInt(setsInput.value);
    reps = parseInt(repsInput.value);
    weight = parseInt(weightInput.value);
    time = parseInt(timeInput.value);

  if (exerciseId && date) {
        const response = await fetch('/api/users/schedule/add', {
            method: 'POST',
            body: JSON.stringify({exerciseId, date, sets, reps, weight, time}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.redirected){
            window.location.replace(response.url)
           return;
        }

        //If api response is good display green button
        if(response.ok) {
            scheduleBtn.classList.add('bg-success');
            scheduleBtn.innerHTML = 'SAVED!'
            setTimeout(defaultHandler,1200)
        } else {
            console.log('There has been a server-side error')
        }

        //If user data is incomplete display red button
        } else {
            scheduleBtn.classList.add('bg-danger');
            scheduleBtn.innerHTML = 'INSUFFICIENT DATA!'
            setTimeout(defaultHandler,1300)
    };
};

//---------------------------------------------------Favorite Button ---------------------------------------------------
const favoriteBtns = document.querySelectorAll('#favoriteBtn');

const addFavorite = async(e) => {
    e.preventDefault();
    const targetUrl = e.target.src;
    console.log(targetUrl);
    if(targetUrl.includes('Unfilled')) {
        const exerciseId = e.target.id;
        const response = await fetch('/api/favorite/add', {
            method: 'POST',
            body: JSON.stringify ({ exerciseId }),
            headers: { 'Content-Type': 'application/json'},
        });

        if(!response.ok) {
            console.log('There has been an error completing your exercise')
            return;
        } else {
            e.target.src = '/images/starFilled.png';
        };
    };
};


//Event Listeners
for (favoriteBtn of favoriteBtns) {
    favoriteBtn.addEventListener('click', addFavorite);
};

scheduleBtn.addEventListener('click', scheduleExercise);