const scheduleBtn = document.querySelector('#view-schedule');
const exerciseSelectBtn = document.querySelector('#exerciseSelect');
const dateInput = $('#startDate');



let exerciseId;
let date;

const currentDate = new Date();
    var formattedDate = currentDate.toISOString().split('T')[0];

const renderSchedule = async (e) => {
    e.preventDefault();
    
    date = dateInput.val();
    if (date) {
        const response = await fetch(`api/users/date/${formattedDate}`, {
            method: 'POST',
            body: JSON.stringify({date}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            console.log('success')
        }
        } else {
            console.log('no workouts on this day')
    };
};

scheduleBtn.addEventListener('click', renderSchedule );