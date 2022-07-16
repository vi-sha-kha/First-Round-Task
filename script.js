let display = document.querySelector(".displaynum");
const back = document.querySelector(".button__erase");
const buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  display.value = "";
  button.addEventListener("click", function (item) {
    let input = item.currentTarget.textContent;
    display.value += input;
    if (display.value.length >= 10) {
      alert("Maximum 10 digits is allowed");
    }
  });
});

back.addEventListener("click", () => {
  if (display.value.length === 0) {
    alert("No digits left");
  } else {
    display.value = display.value.slice(0, -1);
  }
});


