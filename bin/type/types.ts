// Room type
type Room = {
  number: string;
  capacity: number;
  availableSlots: string[];
};

// Reservation type
type Reservation = {
  roomId: string;
  date: string;
  startTime: string;
  endTime: string;
  reservedBy: string;
};

// User type
type User = {
  name: string;
  isAdmin: boolean;
};

// Initial data
const rooms: Room[] = [
  { number: 'Room 1', capacity: 10, availableSlots: ['10:00-11:00', '13:00-14:00'] },
  { number: 'Room 2', capacity: 6, availableSlots: ['11:00-12:00', '14:00-15:00'] },
  { number: 'Room 3', capacity: 8, availableSlots: ['09:00-10:00', '12:00-13:00'] },
];

let reservations: Reservation[] = [];

// Helper function to find a room by its number
const findRoomByNumber = (number: string): Room | undefined => {
  return rooms.find((room) => room.number === number);
};

// Helper function to check if a slot is available for a room on a specific date
const isSlotAvailable = (roomId: string, date: string, slot: string): boolean => {
  const reservation = reservations.find(
    (r) => r.roomId === roomId && r.date === date && r.startTime <= slot && r.endTime > slot
  );
  return !reservation;
};

// Helper function to validate reservation inputs
const validateReservation = (
  roomId: string,
  date: string,
  startTime: string,
  endTime: string,
  reservedBy: string
): string | null => {
  const room = findRoomByNumber(roomId);

  if (!room) {
    return 'Invalid room number.';
  }

  if (!rooms.includes(room)) {
    return 'Room is not available for reservation.';
  }

  if (!room.availableSlots.includes(startTime)) {
    return 'Start time is not available for reservation.';
  }

  if (!room.availableSlots.includes(endTime)) {
    return 'End time is not available for reservation.';
  }

  if (!isSlotAvailable(roomId, date, startTime) || !isSlotAvailable(roomId, date, endTime)) {
    return 'The slot is already reserved.';
  }

  if (!reservedBy) {
    return 'Please provide a name for the reservation.';
  }

  return null;
};
