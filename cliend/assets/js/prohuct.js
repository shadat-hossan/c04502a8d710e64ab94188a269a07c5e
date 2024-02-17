// The Progrem is Count Dowen on product

const Increment = document.querySelector(".increment");
const Dickrement = document.querySelector(".dickrement");
let numberCount = document.querySelector("#numberCount");

let count = 1;

Increment.addEventListener("click", function () {
  count += 1;
  numberCount.innerHTML = count;
});

Dickrement.addEventListener("click", function () {
  if (count > 1) {
    count -= 1;
    numberCount.innerHTML = count;
  }
});
