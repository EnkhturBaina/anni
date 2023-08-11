const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 6, 4).getTime();
const fourthOfJulyNextYear = new Date("09/22/2023").getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function () {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if (month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    '<div class="days"> \
  <div class="numbers">' +
    days +
    '</div>өдөр</div> \
<div class="hours"> \
  <div class="numbers">' +
    hours +
    '</div>цаг</div> \
<div class="minutes"> \
  <div class="numbers">' +
    minutes +
    '</div>минут</div> \
<div class="seconds"> \
  <div class="numbers">' +
    seconds +
    "</div>секунд</div> \
</div>";
}, 1000);
