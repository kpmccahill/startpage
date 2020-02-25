import Weather from "./weather.js";
import {getTime, getDay} from "./datetime.js";

function startClock() {
    document.getElementById("clock").innerHTML = getTime();
    setInterval( () => {
        document.getElementById("clock").innerHTML = getTime();
    },100);
    document.getElementById("date").innerHTML = getDay();
}

function main() {
    Weather();
    startClock();
}

window.onload = () => {
    main();
}
