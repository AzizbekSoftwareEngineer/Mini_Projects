const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dayEl = document.querySelector(".pm");

function getClock() {
  const nowTime = new Date();
  let hour =
    nowTime.getHours() < 10 ? "0" + nowTime.getHours() : nowTime.getHours();
  let minute =
    nowTime.getMinutes() < 10
      ? "0" + nowTime.getMinutes()
      : nowTime.getMinutes();
  let second =
    nowTime.getSeconds() < 10
      ? "0" + nowTime.getSeconds()
      : nowTime.getSeconds();
  let day = "AM";
  if (hour > 12) {
    day = "PM";
    hour -= 12;
  }
  hour > 12 ? (day = "PM") : (day = "AM");
  if (hour == "00") {
    hour = 12;
  }
  hourEl.textContent = hour;
  minuteEl.textContent = minute;
  secondEl.textContent = second;
  dayEl.textContent = day;
}

setInterval(getClock, 1000);
