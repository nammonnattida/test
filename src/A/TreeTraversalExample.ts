// types.ts
export interface Room {
  number: string;
  capacity: number;
  availableSlots: string[];
}

export interface Reservation {
  roomId: string;
  date: string;
  startTime: string;
  endTime: string;
  reservedBy: string;
}

export const rooms: Room[] = [
  {
    number: '101',
    capacity: 10,
    availableSlots: ['09:00-10:00', '10:00-11:00', '11:00-12:00'],
  },
  {
    number: '102',
    capacity: 6,
    availableSlots: ['09:00-10:00', '10:00-11:00', '11:00-12:00'],
  },
  {
    number: '103',
    capacity: 8,
    availableSlots: ['09:00-10:00', '10:00-11:00', '11:00-12:00'],
  },
];

export const reservations: Reservation[] = [];
