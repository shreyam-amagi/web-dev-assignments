
//to execute the function displayDigitalClock every 1000ms
setInterval(displayDigitalClock, 1000);

function displayDigitalClock() {

    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let day = currentTime.getDay();
    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();
    let ampm = "am";
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (hours === 12) {
        ampm = "pm";
    }

    if (hours > 12) {
        hours -= 12;
        ampm = "pm";
    }

    if (hours === 0) {
        hours = 12;
        ampm = "am";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + ' ' + ampm;
    let fullDate = days[day - 1] + ", " + date + " " + months[month - 1] + " " + year;
    document.getElementById('clock').innerHTML = time;
    document.getElementsByClassName('main')[0].style.padding = '20px'
    document.getElementsByClassName('date')[0].innerHTML = fullDate;
}