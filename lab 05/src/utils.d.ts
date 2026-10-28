export declare function delay(ms: number): Promise<void>;
export declare function makeCounter(start?: number): () => number;
export declare function getRequired<T extends Element>(selector: string): T;
export interface Slot {
    id: string;
    title: string;
    duration: number;
}
export declare function describeSlot(slot: Slot): string;
export declare const booking: Slot;
//# sourceMappingURL=utils.d.ts.map