const exerciseSelectBtn = document.querySelector('#exerciseSelect');
const dateInput = $('#startDate');
const setsInput = document.querySelector('#numSets');
const repsInput = document.querySelector('#numReps');
const weightInput = document.querySelector('#numWeight');
const timeInput = document.querySelector('#numTime');
const scheduleBtn = document.querySelector('#submitExerciseBtn');

let exerciseId;
let date;
let sets;
let reps;
let weight;
let time;

const defaultHandler = () => {
    scheduleBtn.classList.remove('bg-danger');
    scheduleBtn.innerHTML = 'SUBMIT';
};

const scheduleExercise = async (e) => {
    e.preventDefault();
    exerciseId = exerciseSelectBtn.value;
    date = dateInput.val();
    sets = setsInput.value;
    reps = repsInput.value;
    weight = weightInput.value;
    time = timeInput.value;
    if (exerciseId && date) {
        // const response = await fetch('api/users/schedule/add', {
        //     method: 'POST',
        //     body: JSON.stringify({exerciseId, date, sets, reps, weight, time}),
        //     headers: {'Content-Type': 'application/json'}

        // });

        if(true) {
            scheduleBtn.classList.add('bg-success');
            scheduleBtn.innerHTML = 'SAVED!'
            setTimeout(defaultHandler(),1300)
        }
    } else {
            scheduleBtn.classList.add('bg-danger');
            scheduleBtn.innerHTML = 'INSUFFICIENT DATA!'
            setTimeout(defaultHandler(),1300)
    }
}

scheduleBtn.addEventListener('click', scheduleExercise);