let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let endDate = new Date(2025, 0);
let endTime = endDate.getTime();

function countDawn() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);
  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdawn"
    ).innerHTML = `<h1>Countdawn has expired!</h1>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secLeft = Math.floor((remainingTime % oneMin) / 1000);
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secLeft);
  }
}
let i = setInterval(countDawn, 1000);
countDawn();
