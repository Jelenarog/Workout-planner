
const calBtn = document.querySelector('#view-schedule');

const renderDay = () => {
    const dateInput = $('#datepicker');
    //console.log(dateInput);
    date = dateInput.val(); //give date yy-mm-dd *this needs to be changed to UTC*
    //console.log(date);
    //console.log(typeof date);

    if(!date) {
        calBtn.classList.add('btn-danger');
        calBtn.innerHTML = 'Select a date'
        setTimeout(() => {
            calBtn.classList.remove('btn-danger');
            calBtn.innerHTML = 'View Schedule';

        }, 1200
        
        )} else {
            document.location.replace(`/schedule/${date}`);

        };
   
    

};


calBtn.addEventListener('click', renderDay); 

