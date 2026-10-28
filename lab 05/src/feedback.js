// ==================== TASK 10 ====================
import { getRequired } from "./utils.js";
const form = getRequired("#feedback-form");
const nameInput = getRequired("#name");
const emailInput = getRequired("#email");
const messageInput = getRequired("#message");
const status = getRequired("#feedback-status");
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function setInvalid(element, invalid) {
    element.setAttribute("aria-invalid", String(invalid));
}
function showError(message) {
    status.textContent = message;
    status.classList.add("error");
}
function showSuccess(message) {
    status.textContent = message;
    status.classList.remove("error");
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    setInvalid(nameInput, false);
    setInvalid(emailInput, false);
    setInvalid(messageInput, false);
    if (!name || !email || !message) {
        if (!name)
            setInvalid(nameInput, true);
        if (!email)
            setInvalid(emailInput, true);
        if (!message)
            setInvalid(messageInput, true);
        showError("Please fill in all required fields.");
        return;
    }
    if (!isValidEmail(email)) {
        setInvalid(emailInput, true);
        showError("Please enter a valid email address, e.g. user@example.com.");
        return;
    }
    showSuccess("Feedback submitted successfully.");
});
//# sourceMappingURL=feedback.js.map