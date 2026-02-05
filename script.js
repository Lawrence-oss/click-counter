let count = 0;
let countDisplay = document.getElementById("count");
let clickBtn = document.getElementById("click-btn");
let resetBtn = document.getElementById("reset-btn");

clickBtn.addEventListener("click", () => {
  count = count + 1;
  countDisplay.textContent = count;

 if (count >= 60) {
    countDisplay.style.color = "green";
  }
  else if (count >= 20) {
    countDisplay.style.color = "red";
  }
  else if (count >=10) {
    countDisplay.style.color = "orange";
  } else {
    countDisplay.style.color = "black";
  }
});
resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
  countDisplay.style.color = "black";
});