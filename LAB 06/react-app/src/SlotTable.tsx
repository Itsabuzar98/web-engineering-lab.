// TASK 9: Map slots to rows using a stable key

import type { Slot } from './types';
import SlotRow from './SlotRow';

type SlotTableProps = {
  slots: Slot[];
  onToggle: (id: number) => void;
};

function SlotTable({ slots, onToggle }: SlotTableProps) {
  return (
    <section className="slot-table" aria-labelledby="slot-heading">
      <h2 id="slot-heading">Slot Booking</h2>

      {slots.map((slot) => (
        <SlotRow
          key={slot.id}
          slot={slot}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
}

export default SlotTable;
