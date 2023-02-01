const buttons = document.querySelectorAll('.dropdown-item');

const selectExercise = (event) => {
    const selection = event.target.id;
    document.location.replace(`/exercises/${selection}`);
};

for (btn of buttons) {
    btn.addEventListener('click', selectExercise);
};