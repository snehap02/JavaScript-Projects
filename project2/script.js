const minHand = document.querySelector('.minute-hand-wrapper');
const hourHand = document.querySelector('.hour-hand-wrapper');
const secondHand = document.querySelector('.second-hand-wrapper');

function setTheDate(){
    const present = new Date();

    const second = present.getSeconds();
    const secDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegree}deg)`;

    const minute = present.getMinutes();
    const minDegree = ((minute / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = present.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setTheDate, 1000)