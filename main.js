let days = document.querySelector(`#days`);
let hours = document.querySelector(`#hours`);
let minutes = document.querySelector(`#minutes`);
let seconds = document.querySelector(`#seconds`);
let countDown = document.querySelector(`#countdown`);
let preloader = document.querySelector(`#preloader`);

let currentYear = new Date().getFullYear();
let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCounter() {
    let currentTime = new Date();
    let diff = nextYear - currentTime;

    let daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    let secondsLeft = Math.floor(diff / 1000) % 60;
    
    days.innerText = daysLeft < 10 ? `0` + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? `0` + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? `0` + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? `0` + secondsLeft : secondsLeft;

}

updateCounter();

setInterval(updateCounter, 1000);

setTimeout(function () {
    preloader.remove();
    countDown.style.display = `flex`;
}, 2000);


