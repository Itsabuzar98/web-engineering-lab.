
const btn = document.querySelector<HTMLButtonElement>("#btn");
const msg = document.querySelector<HTMLParagraphElement>("#msg");

if (btn === null || msg === null) {
    throw new Error("Button or paragraph not found");
}


let count: number = 0;


btn.addEventListener("click", () => {

    count++;

    msg.textContent = `Clicked ${count} times`;

    btn.classList.toggle("active");

});
