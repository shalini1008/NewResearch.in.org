import React from 'react'
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black text-white p-6 mt-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-bold">New Research</h2>
            <ul>
              {["Home", "About", "Project", "Team"].map((link) => (
                <li key={link} className="text-sm hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Corporate Office</h2>
            <p className="text-sm">A-3,8/9,B Block,Mohan Garden,New Delhi</p>
            <p className="text-sm">📧 nrsshashi@gmail.com</p>
            <p className="text-sm">📞 +91-9555022245</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <FaFacebookF className="cursor-pointer text-xl hover:text-gray-400" />
          <FaTwitter className="cursor-pointer text-xl hover:text-gray-400" />
          <FaGoogle className="cursor-pointer text-xl hover:text-gray-400" />
        </div>
        <p className="text-center text-xs mt-4">© 2025 New Research INDIA, All Rights Reserved.</p>
      </footer>
  )
}

export default Footer