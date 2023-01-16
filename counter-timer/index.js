const daysElement= document.querySelector(".day");
const hourssElement= document.querySelector(".hour");
const minutesElement= document.querySelector(".minute");
const secondsElement= document.querySelector(".second");
const heading=  document.querySelector("h1");
const counterTimer= document.querySelector(".counterTimer");


// converting second, minute, hour, day into milliseconds 
const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

const timerFunction = ()=>{

    // generating current date in mm/dd/yyyy
    let now= new Date();
    let dd= String(now.getDate()).padStart(2, "0"),
     mm= String(now.getMonth()+1).padStart(2, "0"),
     yyyy= now.getFullYear();

    // taking target date form user
    let enteredDay= prompt("enter day").padStart(2, "0");
    let enteredMonth= prompt("enter month").padStart(2, "0");

    // checking valid date and  month number
    if(enteredDay>31){
        enteredDay= prompt("Enter valid day (1-31)").padStart(2, "0");
    }
    if(enteredMonth>12){
        enteredMonth= prompt("Enter valid month (1-12)").padStart(2, "0");
    }

    // checking if target date is for next year
    now = `${mm}/${dd}/${yyyy}`;
    
    let targetDate= `${enteredMonth}/${enteredDay}/${yyyy}`;
    if(now > targetDate){
        targetDate= `${enteredDay}/${enteredMonth}/${yyyy+1}`
    }

    const intervalId= setInterval(()=> {

        // taking target Date in milliseconds
        const timer= new Date(targetDate).getTime(); 
        // taking current Date in milliseconds
        const today= new Date().getTime(); 

        // calculating differnece between target date and current date
        const difference = timer - today;
        const leftDay = Math.floor(difference/day);
        const leftHour = Math.floor((difference%day)/hour);
        const leftMinute = Math.floor((difference%hour)/minute);
        const leftSecond = Math.floor((difference%minute)/second);

        // showing timer in DOM
        daysElement.innerText= leftDay;
        //  (leftHour>12) ? leftHour%12 : leftHour
        hourssElement.innerText= leftHour;
        minutesElement.innerText= leftMinute;
        secondsElement.innerText= leftSecond;

        // stopping the setInterval after reaching the target time
        if(difference< 0){
            counterTimer.style.display="none";
            heading.innerText= "Time's Up";
            clearInterval(intervalId);
        }
    }, 0);
};


timerFunction();