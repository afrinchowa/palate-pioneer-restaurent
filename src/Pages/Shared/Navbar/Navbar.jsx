import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const  [isAdmin] =useAdmin();
  const [cart] =useCart();
  
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = 
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/Dessert">Order</Link>
      </li>
{
user && isAdmin &&   <li>
<Link to="/dashboard/adminHome">Dashboard</Link>
</li>
}
{
user && !isAdmin &&   <li>
<Link to="/dashboard/userHome">Dashboard</Link>
</li>
}

      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="gallery">Gallery</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
      <li>
        <Link to="reservation">Reservations</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
      <li>
       <Link to="/dashboard/cart">
       <button className=" bg-transparent text-white">
        
          <div className="badge badge-neutral ">< FaShoppingCart/>+{cart.length}</div>
        </button></Link>
      </li>

      {user ? (
        <>
          <span>{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to="login">Login</Link>
          </li>
        </>
      )}
    </>
  

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-30 bg-black md:text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-[#AB8476]  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-700 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">PALATE PIONEER</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Navbar;
