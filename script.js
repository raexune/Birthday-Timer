function getDays() {
  let endDate = new Date("August, 2024 10 00: 00: 00").getTime();
  let startDate = new Date().getTime();
  let timeUntil = endDate - startDate;
  let daysUntil = Math.floor(timeUntil / 86400000);
  return daysUntil;
}

function getHours() {
  let endDate = new Date("August 10, 2024 00: 00: 00").getTime();
  let startDate = new Date().getTime();
  let timeUntil = endDate - startDate;
  let hoursUntil = Math.floor(
    timeUntil / 3600000 - Math.floor(timeUntil / 86400000) * 24
  );
  return hoursUntil;
}

function getMinutes() {
  let endDate = new Date("August 10, 2024 00: 00: 00").getTime();
  let startDate = new Date().getTime();
  let timeUntil = endDate - startDate;
  let minutesUntil = Math.floor(
    timeUntil / 60000 -
      Math.floor(timeUntil / 86400000) * 1440 -
      Math.floor(timeUntil / 3600000 - Math.floor(timeUntil / 86400000) * 24) *
        60
  );
  return minutesUntil;
}

const days = document.querySelector(".days");
days.innerHTML = getDays();

const hours = document.querySelector(".hours");
hours.innerHTML = getHours();

const minutes = document.querySelector(".minutes");
minutes.innerHTML = getMinutes();
