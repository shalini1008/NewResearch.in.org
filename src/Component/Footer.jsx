import React from 'react'
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-black text-white p-6 mt-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-bold">NextGen Research & Survey Pvt Ltd</h2>
            <ul>
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
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Corporate Office</h2>
            <p className="text-sm">8/9B, Block A-3, Mohan Garden, New Delhi 110059</p>
            <p className="text-sm">📧 nrsshashi@gmail.com</p>
            <p className="text-sm">📞 +91-7011763148</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <FaFacebookF className="cursor-pointer text-xl hover:text-gray-400" />
          <FaTwitter className="cursor-pointer text-xl hover:text-gray-400" />
          <FaGoogle className="cursor-pointer text-xl hover:text-gray-400" />
        </div>
        <p className="text-center text-xs mt-4">© 2025 Next Gen Research INDIA, All Rights Reserved.</p>
      </footer>
  )
}

export default Footer