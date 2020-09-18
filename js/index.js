String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
const bigContainer = document.getElementById("big");
const userName = document.getElementById("userName");
const thankyouBtn = document.getElementById("thankYou");

const user = {
  fname: "abhishek",
  lname: "srivastava",
  fullName: function () {
    return `Hello Mr. ${this.fname.capitalize()} ${this.lname.capitalize()} You have proven that you have skills. You have that programming capability that you think you have. See for Yourself. You can now add javascript in your pages. Voila. Good Work Abhishek. Keep it up!`;
  },
};
bigContainer.addEventListener(
  "mouseover",
  () => {
    userName.textContent = user.fullName();
    userName.style.color = "#ffce00";
    thankyouBtn.style.visibility = "visible";
  },
  1000
);
// bigContainer.addEventListener("mouseout", () => {
//   userName.textContent = "";
// });

thankyouBtn.addEventListener("click", () => {
  alert("Thank You beta!");
});
