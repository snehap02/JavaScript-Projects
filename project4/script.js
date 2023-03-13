const selectField = document.getElementById('select-field');
const modal = document.querySelector('.modal-container');
const accordion = document.getElementsByClassName('accordion');
const accordDetails = document.getElementsByClassName('details');
const plus = document.getElementsByClassName('add');
const closee = document.getElementsByClassName('close');
const signs = document.getElementsByClassName('sign');
const container = document.getElementsByClassName('accord-container');


selectField.addEventListener('click', () => {
    modal.classList.toggle('hidden');
})

for(let i = 0; i < accordion.length; i++){
    closee[i].classList.add('hidden');
    accordion[i].addEventListener('click', () => {
        let active = accordDetails[i].classList.toggle('hidden');
        if(!active){
            closee[i].classList.remove('hidden');
            plus[i].classList.add('hidden');
            accordion[i].style.backgroundColor = '#333131';
            
        }else{
            closee[i].classList.add('hidden');
            plus[i].classList.remove('hidden');
            accordion[i].style.backgroundColor = '#242323';
        }
    })
}
