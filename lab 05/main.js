






/* // Task 3
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#feedback-form");
    const nameInput = document.querySelector("#name");
    const messageInput = document.querySelector("#message");
    const feedbackStatus = document.querySelector("#feedback-status");
    const schedule = document.querySelector("#schedule");
    const bookingStatus = document.querySelector("#booking-status");

    // Task 3
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !message) {
            feedbackStatus.textContent =
                "Please fill in all required fields.";

            feedbackStatus.classList.add("error");

            if (!name) {
                nameInput.setAttribute("aria-invalid", "true");
            }

            if (!message) {
                messageInput.setAttribute("aria-invalid", "true");
            }

            return;
        }

        nameInput.setAttribute("aria-invalid", "false");
        messageInput.setAttribute("aria-invalid", "false");

        feedbackStatus.textContent =
            "Feedback submitted successfully.";

        feedbackStatus.classList.remove("error");
    });

    // Task 9
    schedule.addEventListener("click", (event) => {
        const target = event.target;

        if (!(target instanceof Element)) {
            return;
        }

        const button = target.closest("[data-day]");

        if (!(button instanceof HTMLButtonElement)) {
            return;
        }

        const day = button.dataset.day;

        if (!day) {
            return;
        }

        const slot = button.closest(".slot");

        if (!(slot instanceof HTMLElement)) {
            return;
        }

        const slots = Array.from(
            schedule.querySelectorAll(".slot")
        );

        const index = slots.findIndex((item) => item === slot);

        if (index === -1) {
            return;
        }

        // Task 9
        button.classList.toggle("selected");

        bookingStatus.textContent =
            `${day} selected. Slot number: ${index + 1}.`;
    });
});  */