"use strict";
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");
if (btn === null || msg === null) {
    throw new Error("Button or paragraph not found");
}
let count = 0;
btn.addEventListener("click", () => {
    count++;
    msg.textContent = `Clicked ${count} times`;
    btn.classList.toggle("active");
});
