const checkBtns = document.querySelectorAll('#completeBtn');

const completeExercise = async(e) => {
    e.preventDefault();
    const targetUrl = e.target.src;
    if(targetUrl.includes('unchecked')) {
        const scheduleId = e.target.id;
        const response = await fetch('/api/data/complete', {
            method: 'POST',
            body: JSON.stringify ({ scheduleId }),
            headers: { 'Content-Type': 'application/json'},
        })

        if(!response.ok) {
            console.log('There has been an error completing your exercise')
            return;
        } else {
            e.target.src = '/images/checkedMark.png'
        } 
    }
};

for (checkBtn of checkBtns) {
    checkBtn.addEventListener('click', completeExercise);
};