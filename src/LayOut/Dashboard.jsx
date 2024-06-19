import {
  FaCalendar,
  FaHome,
  FaList,
  FaPhone,
  FaRavelry,
  FaSearch,
  FaShoppingCart,
  FaUtensilSpoon,
} from "react-icons/fa";
import { FaBook, FaShop, FaUser } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // todo:get isAdmin value from the database
  const [isAdmin] =useAdmin();

  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-[#AB8476]">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon /> Add Items{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaRavelry />
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList />
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/carts">
                  <FaShoppingCart></FaShoppingCart>My Cart({cart.length})
                </NavLink>
              </li>
            </>
          )}
          {/* shared navlinks */}
          <div className="divider divider-neutral"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">
              <FaShop /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhone /> Contact
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
