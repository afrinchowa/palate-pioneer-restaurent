import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut =() =>{
logOut()
.then(() =>{   })
.catch(error => console.log(error));
  }
  const navOptions = (
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
   
      {
        user? <> <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
        </>:<>   <li>
        <Link to="login">Login</Link>
      </li></>
      }
    </>
  );
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
