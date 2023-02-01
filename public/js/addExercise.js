const addExerciseBtn = document.querySelector('#addExercise');
const reps = document.querySelector('#repsNum');
const dateInput = $('#startDate');
const exerciseId = document.querySelector('.exerciseCard');


const addExercise = () => {
    const repsInput = reps.value;
    const exerciseId = exerciseId.id;
    const selectedDate = dateInput.val();
}


addExerciseBtn.addEventListener('click', addExercise);