let count = 0;
let countDisplay = document.getElementById("count");
let clickBtn = document.getElementById("click-btn");
let resetBtn = document.getElementById("reset-btn");
let minusBtn = document.getElementById("minus-btn");
let message = document.getElementById("message");

function updateColorAndMessage() {
  if (count >= 60) {
    countDisplay.style.color = "green";
    message.textContent = "Congratulations! You've reached 60 clicks!";
  } else if (count >= 20) {
    countDisplay.style.color = "red";
    message.textContent = "You've reached 20 clicks!";
  } else if (count >= 10) {
    countDisplay.style.color = "orange";
    message.textContent = "You've reached 10 clicks!";
  } else {
    countDisplay.style.color = "black";
    message.textContent = "";
  }
}

clickBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  updateColorAndMessage();
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
  updateColorAndMessage();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
  countDisplay.style.color = "black";
  message.textContent = "";
});