
/* Task 4 */
:root {
    --color-error: #b00020;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.5;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ccc;
}

nav ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav a {
    text-decoration: none;
}

main {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
}

form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.full-width {
    grid-column: 1 / -1;
}

input,
textarea {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #999;
    border-radius: 4px;
    font: inherit;
}

textarea {
    min-height: 120px;
    resize: vertical;
}

button {
    padding: 0.7rem 1rem;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    font: inherit;
}

/* Task 4 */
.error {
    color: var(--color-error);
}

input[aria-invalid="true"],
textarea[aria-invalid="true"],
select[aria-invalid="true"] {
    border-color: var(--color-error);
}

/* Task 3 */
#schedule {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-top: 3rem;
}

.slot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.slot button.selected {
    outline: 3px solid #333;
}

#feedback-status,
#booking-status {
    min-height: 1.5rem;
}

/* Task 6 */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    form {
        grid-template-columns: 1fr;
    }

    .full-width {
        grid-column: auto;
    }

    #schedule {
        grid-template-columns: 1fr;
    }
}

/* Task 6 */
@media (max-width: 480px) {
    main {
        padding: 1rem;
    }

    header {
        padding: 1rem;
    }

    nav ul {
        flex-direction: column;
        gap: 0.5rem;
    }

    .slot {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
}
