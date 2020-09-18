//Basic Click Counter

//variables
const btn = document.getElementById("myBtn");
const reset = document.querySelector("#reset");
const clear = document.querySelector("#remove");
const colors = ["red", "blue", "green", "yellow", "fuchsia", "#ffce00"];
const clickList = document.querySelector(".click-list");
const templList = document.querySelector("#task"); //Template Block
const list = document.querySelectorAll(".list");
const task = document.getElementById("add-task");
let count = 1;
let arrIndex = 0;

//Event Listeners
//Right click disabled
document.addEventListener("contextmenu", (e) => {
  alert("Context Menu Blocked for Security Reasons");
  e.preventDefault();
});
//On Click
btn.addEventListener("click", function (e) {
  if (validateInput()) addTask();
});
//On Pressing Enter Key
task.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && validateInput()) addTask();
});

clear.addEventListener("click", (e) => {
  const allTasks = document.querySelectorAll(".list");
  allTasks.forEach((task) => {
    const checked = task.querySelector("input").checked;
    if (checked) {
      task.remove();
    }
  });
});
//reset button
reset.addEventListener("click", (e) => {
  let child = clickList.lastElementChild;
  while (child) {
    clickList.removeChild(child);
    child = clickList.lastElementChild;
  }
  reset.removeAttribute("style");
  clear.removeAttribute("style");
  count = 1;
  arrIndex = 0;
});

//Function to Capitalize String
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
//Checking if empty string
function validateInput() {
  if (task.value) return true;
}
//Add task functionb
function addTask() {
  if (arrIndex === 6) {
    arrIndex = 0; // just for fun
  }
  const newClickList = document.importNode(templList.content, true); //Template block
  const checkbox = newClickList.querySelector("input");
  checkbox.id = count;
  const label = newClickList.querySelector("label");
  label.htmlFor = count;
  label.append(task.value.capitalize()); //Capitalize the string and then add the new task
  newClickList.firstElementChild.style.color = colors[arrIndex];
  clickList.appendChild(newClickList); //Adding Template Block to Click-List
  task.value = "";
  count++;
  arrIndex++;
  //Show reset button only if button is clicked for atleast 1 times
  if (clickList.firstElementChild) {
    reset.style.visibility = "visible";
  }
}
