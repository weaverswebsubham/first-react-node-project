import React from "react";
import { Link } from "react-router-dom";

function NavBarComponent(props) {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <ul className="flex items-center">
          <Link to="/signup">
            <li className="mr-6">
              <a className="text-white hover:text-gray-900 font-bold">
                Sign up
              </a>
            </li>
          </Link>
          <Link to="/">
            <li className="mr-6">
              <a className="text-white hover:text-gray-900 font-bold">Login</a>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default NavBarComponent;
