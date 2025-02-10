import React from "react";

const Reservations = () => {
  const mockReservations = [
    {
      id: 1,
      slotName: "Slot A",
      location: "Downtown Parking",
      reservedAt: new Date().toISOString(),
    },
    {
      id: 2,
      slotName: "Slot B",
      location: "Suburban Parking",
      reservedAt: new Date().toISOString(),
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Reservations</h1>
      {mockReservations.length > 0 ? (
        <ul className="space-y-4">
          {mockReservations.map((reservation) => (
            <li
              key={reservation.id}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{reservation.slotName}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Location: {reservation.location}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Reserved at: {new Date(reservation.reservedAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          You have no reservations yet.
        </p>
      )}
    </div>
  );
};

export default Reservations;