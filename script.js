function getTimeUntilBirthday() {
    let endDate = new Date("August 10, 2022 00: 00: 00").getTime();
    let startDate = new Date().getTime();
    let timeUntil = endDate - startDate;
    let daysUntil = Math.floor(timeUntil / 86400000);
    return daysUntil;
}

const timer = document.querySelector(".timer");
timer.innerHTML = getTimeUntilBirthday();