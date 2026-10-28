
// ==================== TASK 7 ====================

export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export function makeCounter(start: number = 0): () => number {
    let count: number = start;

    return function (): number {
        count++;
        return count;
    };
}

export function getRequired<T extends Element>(selector: string): T {
    const element = document.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Required element not found: ${selector}`);
    }

    return element;
}



export interface Slot {
    id: string;
    title: string;
    duration: number;
}

export function describeSlot(slot: Slot): string {
    return `${slot.title} (${slot.duration} minutes)`;
}

// Structural typing: this object has all required Slot properties.
export const booking: Slot = {
    id: "slot-1",
    title: "Web Development",
    duration: 30,
};

console.log(describeSlot(booking));



