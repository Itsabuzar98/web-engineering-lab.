// ==================== TASK 9 ====================
import { describeSlot, getRequired } from "./utils.js";
const schedule = getRequired("#schedule");
const slots = [
    { id: "slot-1", title: "Web Development", duration: 30 },
    { id: "slot-2", title: "Programming", duration: 45 },
];
schedule.addEventListener("click", (event) => {
    // Narrow event.target before using DOM methods.
    if (!(event.target instanceof Element)) {
        return;
    }
    // Find the closest matching button.
    const button = event.target.closest("button[data-slot-id]");
    if (!button) {
        return;
    }
    const slotId = button.dataset.slotId;
    if (!slotId) {
        return;
    }
    // Find the matching slot and check that it exists.
    const slot = slots.find((item) => item.id === slotId);
    if (!slot) {
        console.error("Slot not found:", slotId);
        return;
    }
    console.log(describeSlot(slot));
});
//# sourceMappingURL=main.js.map