
// ==================== TASK 10 ====================

import { getRequired } from "./utils.js";

const form = getRequired<HTMLFormElement>("#feedback-form");
const nameInput = getRequired<HTMLInputElement>("#name");
const emailInput = getRequired<HTMLInputElement>("#email");
const messageInput = getRequired<HTMLTextAreaElement>("#message");
const status = getRequired<HTMLElement>("#feedback-status");

function isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function setInvalid(
    element: HTMLInputElement | HTMLTextAreaElement,
    invalid: boolean
): void {
    element.setAttribute("aria-invalid", String(invalid));
}

function showError(message: string): void {
    status.textContent = message;
    status.classList.add("error");
}

function showSuccess(message: string): void {
    status.textContent = message;
    status.classList.remove("error");
}

form.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const name: string = nameInput.value.trim();
    const email: string = emailInput.value.trim();
    const message: string = messageInput.value.trim();

    setInvalid(nameInput, false);
    setInvalid(emailInput, false);
    setInvalid(messageInput, false);

    if (!name || !email || !message) {
        if (!name) setInvalid(nameInput, true);
        if (!email) setInvalid(emailInput, true);
        if (!message) setInvalid(messageInput, true);

        showError("Please fill in all required fields.");
        return;
    }

    if (!isValidEmail(email)) {
        setInvalid(emailInput, true);
        showError(
            "Please enter a valid email address, e.g. user@example.com."
        );
        return;
    }

    showSuccess("Feedback submitted successfully.");
});

