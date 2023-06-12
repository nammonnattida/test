import { useState } from 'react';

import { rooms, reservations, findRoomByNumber, isSlotAvailable } from '../type/types';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleSlotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlot(event.target.value);
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUser(event.target.value);
  };

  const handleReservationSubmit = () => {
    const room = findRoomByNumber(selectedRoom);
    if (!room) {
      setErrorMessage('Invalid room number.');
      return;
    }

    if (!isSlotAvailable(room.number, selectedDate, selectedSlot)) {
      setErrorMessage('The slot is already reserved.');
      return;
    }

    if (!selectedUser) {
      setErrorMessage('Please provide a name for the reservation.');
      return;
    }

    const reservation = {
      roomId: room.number,
      date: selectedDate,
      startTime: selectedSlot,
      endTime: selectedSlot,
      reservedBy: selectedUser,
    };

    reservations.push(reservation);
    setErrorMessage('');
    setSelectedRoom('');
    setSelectedDate('');
    setSelectedSlot('');
    setSelectedUser('');
    alert('Reservation successful!');
  };

  return (
    <div>
      <h1>View Available Rooms</h1>
      <label>
        Room:
        <select value={selectedRoom} onChange={handleRoomChange}>
          <option value="">Select Room</option>
          {rooms.map((room) => (
            <option key={room.number} value={room.number}>
              {room.number}
            </option>
          ))}
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </label>
      <label>
        Time Slot:
        <select value={selectedSlot} onChange={handleSlotChange}>
          <option value="">Select Time Slot</option>
          {selectedRoom &&
            rooms.find((room) => room.number === selectedRoom)?.availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
        </select>
      </label>
      <label>
        Reserved By:
        <input type="text" value={selectedUser} onChange={handleUserChange} />
      </label>
      <button onClick={handleReservationSubmit}>Reserve</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Rooms;
