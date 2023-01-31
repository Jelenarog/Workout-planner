let startDate = document.getElementById('startDate')
        let endDate = document.getElementById('endDate')

        startDate.addEventListener('change', (e) => {
            let startDateVal = e.target.value
            document.getElementById('startDateSelected').innerText = startDateVal
        });

        endDate.addEventListener('change', (e) => {
            let endDateVal = e.target.value
            document.getElementById('endDateSelected').innerText = endDateVal
        });

// fav button (star icon) event listener 
document.getElementById('favBtn').addEventListener('click', changeColor);

function changeColor() {
    this.style.color = "yellow";
    return false;
}