import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
    <Link className="mr-5 " to="/">Home</Link>
    <Link className="mr-5" to="">Menu</Link>
    <Link className="mr-5" to="">Events</Link>
    <Link className="mr-5" to="">Gallery</Link>
    <Link className="mr-5" to="">Blog</Link>
    <Link className="mr-5" to="">Reservations</Link>
    <Link className="mr-5" to="">Contact</Link>
   
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-30 bg-black md:text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
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
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
