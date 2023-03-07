window.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('inner-div');
    const timeSec = document.getElementById('time');
    const dayOrNight = document.getElementById('day-night');
    const dayTime = document.getElementById('day');
    const nightTime = document.getElementById('night');

    setInterval(() => {
        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        
        if(hours < 10){
            hours = "0" + hours;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        if(hours < 12){
            dayTime.style.color = "#5eead4";
        }else{
            dayTime.style.color = "black";
        }
        if(hours > 12){
            nightTime.style.color = "#5eead4";
        }else{
            nightTime.style.color = "black";
        }
        let finalTime = hours + " : " + min + " : " + sec;
        timeSec.innerHTML = finalTime;
    })
    
});