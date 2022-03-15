setInterval(() => {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let am_pm = "AM";

  const Digits = document.getElementById("number");
  if (hours > 12) {
    hours = hours - 12;
    am_pm = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  Digits.textContent = hours + ":" + minutes + ":" + seconds + " " + am_pm;
});
