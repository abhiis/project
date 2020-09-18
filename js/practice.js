//Basic Click Counter

//variables
const btn = document.getElementById("myBtn");
const reset = document.querySelector("#clear");
const colors = ["red", "blue", "green", "yellow", "fuchsia", "#ffce00"];
const clickList = document.querySelector(".click-list");
const templList = document.querySelector("#task"); //Template Block
const list = document.querySelectorAll(".list");
let count = 1;
let arrIndex = 0;
//Show reset button only if button is clicked for atleast 1 times

//Add Click Number Button
btn.addEventListener("click", function (e) {
  if (arrIndex === 6) {
    arrIndex = 0;
  }
  btn.style.background = colors[arrIndex];
  btn.textContent = "Clicked";
  const newClickList = document.importNode(templList.content, true); //Template block
  newClickList.firstElementChild.textContent = `Clicked ${count} times`; //Add new click numbers to Template Block
  newClickList.firstElementChild.style.color = colors[arrIndex];
  clickList.appendChild(newClickList); //Adding Template Block to Click-List
  count++;
  arrIndex++;
  if (clickList.firstElementChild) {
    reset.style.visibility = "visible";
  }
});

//reset button
reset.addEventListener("click", (e) => {
  let child = clickList.lastElementChild;
  while (child) {
    clickList.removeChild(child);
    child = clickList.lastElementChild;
  }
  btn.textContent = "Click Me";
  btn.removeAttribute("style");
  reset.removeAttribute("style");
  count = 1;
  arrIndex = 0;
});
