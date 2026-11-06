// TASK 7: Define reusable TypeScript types

export type GreetingProps = {
  name: string;
};

export type StatusMessageProps = {
  status: string;
};

export type Slot = {
  id: number;
  time: string;
  isBooked: boolean;
};
