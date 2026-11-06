// TASK 8: SlotRow with conditional className and callback prop

import type { Slot } from './types';

type SlotRowProps = {
  slot: Slot;
  onToggle: (id: number) => void;
};

function SlotRow({ slot, onToggle }: SlotRowProps) {
  return (
    <div
      className={
        slot.isBooked
          ? 'slot-row booked'
          : 'slot-row available'
      }
    >
      <span className="slot-time">{slot.time}</span>

      <span className="slot-status">
        {slot.isBooked ? 'Booked' : 'Available'}
      </span>

      <button
        type="button"
        onClick={() => onToggle(slot.id)}
        aria-label={
          `${slot.isBooked ? 'Cancel' : 'Book'} slot at ${slot.time}`
        }
      >
        {slot.isBooked ? 'Cancel Booking' : 'Book Slot'}
      </button>
    </div>
  );
}

export default SlotRow;
