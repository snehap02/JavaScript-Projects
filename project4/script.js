const selectField = document.getElementById('select-field');
const modal = document.querySelector('.modal-container');


selectField.addEventListener('click', () => {
    modal.classList.toggle('hidden');
})

