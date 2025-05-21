import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    fetch("https://your-api.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This booking will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://your-api.com/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setBookings((prev) => prev.filter((b) => b._id !== id));
              Swal.fire("Deleted!", "Booking has been removed.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Palate Pioneer | Manage Bookings</title>
      </Helmet>

      <div className="p-4 min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Manage Bookings
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg">
            <thead className="bg-yellow-400 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Guests</th>
                <th className="py-3 px-4 text-left">Contact</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="border-t hover:bg-pink-50 transition"
                  >
                    <td className="py-3 px-4">{booking.name}</td>
                    <td className="py-3 px-4">{booking.date}</td>
                    <td className="py-3 px-4">{booking.time}</td>
                    <td className="py-3 px-4">{booking.guests}</td>
                    <td className="py-3 px-4">{booking.contact}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageBookings;
