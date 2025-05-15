/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./Reservation.css";
import reservationImage from "../../assets/Home/menu/up-1.jpg";

// import upcomming4 from "../../../assets/Home/menu/up-4.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.date && formData.time) {
      alert("Reservation made successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <SectionTitle subHeading={"Book Now"} heading={"Make a Reservation"} />

      <div className="text-white bg-fixed .upComingImg md:flex space-x-10 items-center pb-20 py-8 px-16">
        <div className="w-1/2 mr-10 bg-gray-300 bg-opacity-40 p-10">
          <p className="text-4xl font-semibold text-[#96705B]">Reserve a Table</p>
          <p className="text-4xl font-bold hover:underline mt-5">The Ultimate Dining Experience</p>
          <p className="mt-5">
            Experience exceptional dining with exquisite menus prepared by our talented chefs.
            Reserve your table now to enjoy the finest delicacies in a beautiful and serene setting.
          </p>
          <div className="flex justify-between mt-8">
            <p className="mt-8">Gourmet Dining</p>
            <button className="btn btn-outline border-0 border-b-4 bg-[#AB8476] mt-5">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={reservationImage} alt="Reservation" />
        </div>
      </div>

      <div className="bg-white p-16">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-lg font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold" htmlFor="date">
              Reservation Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold" htmlFor="time">
              Reservation Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold" htmlFor="guests">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
              min="1"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;

//         <div>
//           <Helmet>
//     <title>Palate Pioneer | Reservation</title>
// </Helmet>
//           Reservation  
//         </div>
