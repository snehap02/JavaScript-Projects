const selectField = document.getElementById('select-field');
const modal = document.querySelector('.modal-container');
const accordion = document.getElementsByClassName('accordion');
const accordDetails = document.getElementsByClassName('details');
const plus = document.getElementsByClassName('add');
const closee = document.getElementsByClassName('close');
const signs = document.getElementsByClassName('sign');
const container = document.getElementsByClassName('accord-container');
const horizantal = document.getElementsByClassName('line');
const mail = document.getElementById('email').value;
const pass = document.getElementById('pass').value;
const form = document.getElementById('form');


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
            horizantal[i].classList.remove('hidden');
            
        }else{
            closee[i].classList.add('hidden');
            plus[i].classList.remove('hidden');
            accordion[i].style.backgroundColor = '#242323';
            horizantal[i].classList.add('hidden');
        }
    })
}

function validation(){
    if(mail == "" && pass == ""){
        document.getElementById('email').classList.add('border-b-[3px]','border-[#e38400]');
        document.getElementById('pass').classList.add('border-b-[3px]','border-[#e38400]');
        document.getElementById('emailField').innerHTML = 'Please enter a valid email address or phone number.';
        document.getElementById('passField').innerHTML = 'Your password must contain between 4 and 60 characters.';
        return false;
    }
}