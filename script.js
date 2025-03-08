document.addEventListener('DOMContentLoaded', function() {
    const conhecaNelitoButton = document.querySelector('.conheca-nelito');
    const modal = document.querySelector('.modal');

    conhecaNelitoButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    const closeModalButton = document.querySelector('.close button');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});