package pages;
import { useState } from 'react';
import RoomList from '../components/RoomList';
import ReservationForm from '../components/ReservationForm';

const rooms: Room[] = [
  { roomNumber: 1, capacity: 10, availableTimeSlots: ['09:00-10:00', '11:00-12:00'] },
  { roomNumber: 2, capacity: 8, availableTimeSlots: ['14:00-15:00', '16:00-17:00'] },
  // Add more rooms
];

const Home: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const makeReservation = (reservation: Reservation) => {
    // Add reservation to the list
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
      <h1>Reservation System</h1>
      <RoomList rooms={rooms} />
      <ReservationForm rooms={rooms} makeReservation={makeReservation} />
      {/* Display existing reservations */}
    </div>
  );
};

export default Home;