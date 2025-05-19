import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut().catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
      <li><Link to="/products" className="hover:text-yellow-400">All Items</Link></li>
      <li><Link to="/order/Dessert" className="hover:text-yellow-400">Order</Link></li>

      {user && isAdmin && <li><Link to="/dashboard/adminHome" className="hover:text-yellow-400">Dashboard</Link></li>}
      {user && !isAdmin && <li><Link to="/dashboard/userHome" className="hover:text-yellow-400">Dashboard</Link></li>}

      <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>

      {/* Mega Menu */}
      <li tabIndex={0}>
        <details>
          <summary className="hover:text-yellow-400">More</summary>
          <ul className="p-2 bg-base-100 text-black z-10">
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </details>
      </li>

      <li>
        <Link to="/dashboard/cart">
          <div className="badge badge-warning gap-2 hover:scale-105 transition">
            <FaShoppingCart /> {cart?.length || 0}
          </div>
        </Link>
      </li>

      {user ? (
        <>
          <span className="ml-3">{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-sm btn-ghost text-white hover:text-yellow-400">LogOut</button>
        </>
      ) : (
        <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="navbar max-w-screen-2xl mx-auto px-4">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost bg-yellow-400 text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
              {navOptions}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="btn btn-ghost text-2xl font-bold text-white hover:text-yellow-400">
            PALATE <span className="text-yellow-400">PIONEER</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-sm font-semibold">
            {navOptions}
          </ul>
        </div>

        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
