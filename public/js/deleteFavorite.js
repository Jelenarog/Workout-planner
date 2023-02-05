const deleteFavBtns = document.querySelectorAll('.deleteFavorite');

const deleteFavorite = async(e) => {
    e.preventDefault();
        const exerciseId = parseInt(e.target.id);
        console.log(exerciseId);
        console.log(typeof exerciseId);
        const response = await fetch('/api/favorite/delete', {
            method: 'POST',
            body: JSON.stringify ({ exerciseId }),
            headers: { 'Content-Type': 'application/json'},
        });

        if(!response.ok) {
            console.log('There has been an error deleting your favorite')
            return;
        } else {
            document.location.reload();
        };
    };


//Event Listeners
for (deleteFav of deleteFavBtns) {
    deleteFav.addEventListener('click', deleteFavorite);
};