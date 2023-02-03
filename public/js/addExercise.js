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

    exerciseId = parseInt(exerciseSelectBtn.value);
    date = dateInput.val(); //give date yy-mm-dd
    sets = parseInt(setsInput.value);
    reps = parseInt(repsInput.value);
    weight = parseInt(weightInput.value);
    time = parseInt(timeInput.value);
    // console.log(typeof date)
    // console.log(typeof exerciseId)
    // console.log(typeof sets)
    // console.log(typeof reps)
    // console.log(typeof weight)
    // console.log(typeof time)

    //Posts information to controller to create new scheduled exercise

    exerciseId = exerciseSelectBtn.value;
    date = dateInput.val(); //give date yy-mm-dd
    sets = setsInput.value;
    reps = repsInput.value;
    weight = weightInput.value;
    time = timeInput.value;
    console.log(date)
    console.log(exerciseId)
    console.log(sets)
    console.log(reps)
    console.log(weight)
    console.log(time)
  if (exerciseId && date) {
        const response = await fetch('api/users/schedule/add', {
            method: 'POST',
            body: JSON.stringify({exerciseId, date, sets, reps, weight, time}),
            headers: {'Content-Type': 'application/json'}
        });


        //If api response is good display green button
        if(response.ok) {

        if(true) {

            scheduleBtn.classList.add('bg-success');
            scheduleBtn.innerHTML = 'SAVED!'
            setTimeout(defaultHandler,1200)
        }

        //If user data is incomplete display red button
        } else {
            scheduleBtn.classList.add('bg-danger');
            scheduleBtn.innerHTML = 'INSUFFICIENT DATA!'
            setTimeout(defaultHandler,1300)
    };
};

scheduleBtn.addEventListener('click', scheduleExercise);