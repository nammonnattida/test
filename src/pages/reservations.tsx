import { reservations } from '../type/types';

const Reservations = () => {
  return (
    <div>
      <h1>View Reservations</h1>
      {reservations.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Room</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Reserved By</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.roomId}</td>
                <td>{reservation.date}</td>
                <td>{reservation.startTime}</td>
                <td>{reservation.endTime}</td>
                <td>{reservation.reservedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
};

export default Reservations;
