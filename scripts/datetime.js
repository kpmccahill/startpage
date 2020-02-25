function getDay() {
    let days = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday"];

    let months = ["January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"];

    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();


    let currentDate = ( days[day] + ", " + months[month] + " " +
        date.getDate() + ", " + date.getFullYear() );

    return currentDate;
}

function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();
    return "" +
        (hour < 10 ? ("0" + hour) : hour) + ":" +
        (min < 10 ? ("0" + min) : min) + ":" +
        (sec < 10 ? ("0" + sec) : sec);
}

export {getDay, getTime};