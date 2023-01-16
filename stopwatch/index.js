const clock = document.querySelector(".clock");

const getsecond = document.querySelector(".seconds");
const getminute = document.querySelector(".minutes");
const gethour = document.querySelector(".hours");
const btnStart = document.getElementById("btnStart");
const btnReset = document.getElementById("btnReset");
const btnStop = document.getElementById("btnStop");
let intervalId, second = 00, minute = 00, hour = 00;

btnStart.addEventListener("click", () => {
    intervalId = setInterval(startStopwatch, 1000);
});

btnReset.addEventListener("click", resetStopwatch);
btnStop.addEventListener("click", stopStopwatch);

function startStopwatch() {
    btnStart.classList.add("active");
    btnStop.classList.add("stopActive");
    
    if (second == 60) {
        second = 0;
        minute++;
    }
    else if (minute == 60) {
        minute = 0;
        hour++;
    }
    else {
        second++;
    }
    
    const hours = String(hour).padStart(2, "0");
    const minutes = String(minute).padStart(2, "0");
    const seconds = String(second).padStart(2, "0");
    
    // clock.append
    // console.log(`${hours}:${minutes}:${seconds}`);
    gethour.innerText = `${hours}`;
    getminute.innerText = `${minutes}`;
    getsecond.innerText = `${seconds}`;
    
};

function stopStopwatch(){
    btnStart.classList.remove("active");
    btnStop.classList.add("stopActive");
    clearInterval(intervalId);
}

function resetStopwatch(){
    btnStart.classList.remove("active");
    btnStop.classList.remove("stopActive");
    clearInterval(intervalId);

    gethour.innerText = "00";
    getminute.innerText = "00";
    getsecond.innerText = "00";
    second = 00, minute = 00, hour = 00;
}