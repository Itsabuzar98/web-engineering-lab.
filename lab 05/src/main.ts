
// ==================== TASK 9 ====================

import { describeSlot, getRequired, type Slot } from "./utils.js";

const schedule = getRequired<HTMLElement>("#schedule");

const slots: Slot[] = [
    { id: "slot-1", title: "Web Development", duration: 30 },
    { id: "slot-2", title: "Programming", duration: 45 },
];

schedule.addEventListener("click", (event: MouseEvent): void => {
    // Narrow event.target before using DOM methods.
    if (!(event.target instanceof Element)) {
        return;
    }

    // Find the closest matching button.
    const button = event.target.closest<HTMLButtonElement>(
        "button[data-slot-id]"
    );

    if (!button) {
        return;
    }

    const slotId = button.dataset.slotId;

    if (!slotId) {
        return;
    }

    // Find the matching slot and check that it exists.
    const slot = slots.find((item: Slot) => item.id === slotId);

    if (!slot) {
        console.error("Slot not found:", slotId);
        return;
    }

    console.log(describeSlot(slot));
});


