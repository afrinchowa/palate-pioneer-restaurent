import {  FaCalendar, FaHome, FaList, FaPhone, FaRavelry, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-[rgb(104,71,86)]">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaRavelry/>Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList/>My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/carts">
              <FaShoppingCart></FaShoppingCart>My Cart
            </NavLink>
          </li>
          <div className="divider divider-neutral"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>  Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch/> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <FaShop/>  Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhone/>  Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content  */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
