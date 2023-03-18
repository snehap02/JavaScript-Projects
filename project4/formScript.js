const mail = document.getElementById('email').value;
const pass = document.getElementById('pass').value;
const form = document.getElementById('form');

function validation(){
    if(mail == "" && pass == ""){
        document.getElementById('email').classList.add('border-b-[3px]','border-[#e38400]');
        document.getElementById('pass').classList.add('border-b-[3px]','border-[#e38400]');
        document.getElementById('emailField').innerHTML = 'Please enter a valid email address or phone number.';
        document.getElementById('passField').innerHTML = 'Your password must contain between 4 and 60 characters.';
        return false;
    }
}