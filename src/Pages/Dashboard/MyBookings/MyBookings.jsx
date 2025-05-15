import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User } from "lucide-react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  // Dummy data to simulate the fetched bookings from an API
  useEffect(() => {
    // Replace this with your actual API call
    setBookings([
      {
        id: 1,
        name: "John Doe",
        date: "2025-05-20",
        time: "7:00 PM",
        guests: 4,
        status: "Confirmed",
      },
      {
        id: 2,
        name: "Jane Smith",
        date: "2025-05-22",
        time: "6:30 PM",
        guests: 2,
        status: "Pending",
      },
      {
        id: 3,
        name: "Alice Brown",
        date: "2025-05-25",
        time: "8:00 PM",
        guests: 6,
        status: "Cancelled",
      },
    ]);
  }, []);

  return (
    <>
      <Helmet>
        <title>Palate Pioneer | My Bookings</title>
      </Helmet>

      <div className="p-6 min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold text-[#AB8476] mb-6 text-center">
            My Bookings
          </h1>

          {bookings.length === 0 ? (
            <div className="text-center text-lg text-gray-500">
              You have no bookings at the moment.
            </div>
          ) : (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex justify-between items-center border-b pb-4 mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-semibold text-gray-800">
                      {booking.name}
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={16} />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock size={16} />
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <User size={16} />
                      <span>{booking.guests} Guests</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div
                      className={`text-sm font-semibold py-1 px-3 rounded-full ${
                        booking.status === "Confirmed"
                          ? "bg-green-200 text-green-600"
                          : booking.status === "Pending"
                          ? "bg-yellow-200 text-yellow-600"
                          : "bg-red-200 text-red-600"
                      }`}
                    >
                      {booking.status}
                    </div>
                    <button
                      className="mt-2 text-sm text-red-500 hover:text-red-700 transition"
                      onClick={() => alert("Booking cancelled")}
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyBookings;
