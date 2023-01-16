const tempField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "New Delhi";

const fetchData = async (target) => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=bf12f949a296412ab07161644231501&q=${target}`;

        const response = await fetch(url);
        const data = await response.json()

        console.log(data);

        const {
            current: { temp_c,
                condition: { text, icon } },
            location: { name, localtime }
        } = data;

        updateDOM(temp_c, name, localtime, icon, text);

    } catch (error) {
        alert("Location Not Found! Enter Current Location.");
    };
}

function updateDOM(temp, city, time, emoji, text) {
    tempField.innerText = temp;
    cityField.innerText = city;

    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = new Date(exactDate).getDay();
    dateField.innerText = `${exactTime} - ${getFullDayName(exactDay)}  ${exactDate}`;

    emojiField.src = emoji;
    weatherField.innerText = text;
}

fetchData(target);

function getFullDayName(num) {

    switch (num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 5:
            return "Saturday";
        default:
            return "Dont Know!"
    }
}

const search= (e) => {
    e.preventDefault();

    target = searchField.value;
    console.log(target);
    fetchData(target);
}

form.addEventListener("submit", search);