// ==================== TASK 7 ====================
export function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
export function makeCounter(start = 0) {
    let count = start;
    return function () {
        count++;
        return count;
    };
}
export function getRequired(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        throw new Error(`Required element not found: ${selector}`);
    }
    return element;
}
export function describeSlot(slot) {
    return `${slot.title} (${slot.duration} minutes)`;
}
// Structural typing: this object has all required Slot properties.
export const booking = {
    id: "slot-1",
    title: "Web Development",
    duration: 30,
};
console.log(describeSlot(booking));
//# sourceMappingURL=utils.js.map