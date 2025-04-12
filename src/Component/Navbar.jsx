import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      
      <div className="bg-pink-500 text-white text-center py-2 text-lg sm:text-xs">
        📧 nrsshashi@gmail.com 📞7011763148 📞 +91-9555022245
      </div>

      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold font-serif sm:text-lg">
          <span className="text-pink-600 font-extrabold">NextGen Research </span> & Survey Pvt. Ltd
        </div>

       
        <ui className="hidden md:flex space-x-6 text-lg">
        {["home", "About", "Project", "Office", "Our Team","Contact us"].map((item) => (
          <div key={item}>
            <Link
              to={`/${item}`}
              className="hover:underline transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </div>
        ))}
      </ui>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
    <div className="md:hidden bg-white shadow-md p-4 absolute w-full z-50">
      <ul className="flex flex-col space-y-4 text-center">
        {["home", "About", "Project", "Office", "Our Team","Contact us"].map((item) => (
          <li key={item}>
            <Link
              to={`/${item}`}
              className="hover:underline transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
    </div>
  );
};

export default Navbar;
