// TASK 10: Manage slot state with useState and immutable updates

import { useState } from 'react';
import Greeting from './Greeting';
import StatusMessage from './StatusMessage';
import SlotTable from './SlotTable';
import type { Slot } from './types';

function App() {
  const [slots, setSlots] = useState<Slot[]>([
    { id: 1, time: '09:00 AM', isBooked: false },
    { id: 2, time: '10:00 AM', isBooked: true },
    { id: 3, time: '11:00 AM', isBooked: false },
    { id: 4, time: '12:00 PM', isBooked: false },
  ]);

  function handleToggle(id: number) {
    setSlots((currentSlots) =>
      currentSlots.map((slot) =>
        slot.id === id
          ? { ...slot, isBooked: !slot.isBooked }
          : slot
      )
    );
  }

  const bookedCount = slots.filter((slot) => slot.isBooked).length;

  return (
    <main className="container">
      <header className="app-header">
        <p className="eyebrow">WEB ENGINEERING LAB</p>
        <h1>React Slot Booking</h1>
        <Greeting name="Student" />
        <StatusMessage status="Application is running" />
      </header>

      <section className="summary" aria-live="polite">
        <p>
          Booked slots: <strong>{bookedCount}</strong> / {slots.length}
        </p>
      </section>

      <SlotTable slots={slots} onToggle={handleToggle} />
    </main>
  );
}

export default App;
