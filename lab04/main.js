
import { delay, makeCounter } from "./utils.js";

const schedule = document.querySelector("#schedule");
const status = document.querySelector("#booking-status");
const nextConfirmation = makeCounter();

schedule.addEventListener("click", async function (event) {
    if (!(event.target instanceof Element)) {
        return;
    }

    const button = event.target.closest("button[data-day]");

    if (!button || !schedule.contains(button)) {
        return;
    }

    const row = button.closest("tr");
    const day = button.dataset.day;

    if (!row) {
        return;
    }

    const isBooked = row.classList.toggle("selected");
    const confirmationNumber = nextConfirmation();

    button.setAttribute("aria-pressed", String(isBooked));
    button.textContent = isBooked ? "Cancel" : "Book";

    const bookedRows = schedule.querySelectorAll(
        "tbody tr.selected"
    ).length;

    status.textContent = `Processing booking #${confirmationNumber}...`;

    await delay(1000);

    status.textContent = isBooked
        ? `Confirmation #${confirmationNumber}: ${day} booked. Total booked rows: ${bookedRows}.`
        : `Confirmation #${confirmationNumber}: ${day} booking cancelled. Total booked rows: ${bookedRows}.`;
});

const form = document.querySelector("#contact");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.textContent = "Your form was submitted successfully.";
});
