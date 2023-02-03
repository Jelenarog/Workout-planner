const buttons = document.querySelectorAll('.dropdown-item');

const selectExercise = (event) => {
    const selection = event.target.id;
    if(selection != 'all') {
    document.location.replace(`/exercises/${selection}`);
    } else {
        document.location.replace('/exercises/all');
    };
};

for (btn of buttons) {
    btn.addEventListener('click', selectExercise);
};