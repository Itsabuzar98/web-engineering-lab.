$(document).ready(function () {
    $("#feedback-form").on("submit", function (event) {
        event.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            $("#feedback-status")
                .text("Please fill in all required fields.")
                .addClass("error");

            return;
        }

        if (!emailPattern.test(email)) {
            $("#feedback-status")
                .text("Please enter a valid email address, e.g. user@example.com.")
                .addClass("error");

            return;
        }

        $("#feedback-status")
            .text("Feedback submitted successfully.")
            .removeClass("error");
    });
});