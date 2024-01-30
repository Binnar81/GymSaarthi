// UserProfile.jsx
import React from "react";
import { AuthContextProvider } from "../context/AuthContext";
import { Link } from "react-router-dom";

function UserProfile() {
  const { user, logOut } = AuthContextProvider();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
        
        {user ? (
          <div>
            <p className="text-lg font-medium">Email: {user.email}</p>
            {/* Include other user details as needed */}
          </div>
        ) : (
          <p>No user logged in</p>
        )}

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Sections</h3>
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery/page-1" className="text-blue-500 hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/schedule/monday" className="text-blue-500 hover:underline">
                Schedule
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-blue-500 hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-blue-500 hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/classes" className="text-blue-500 hover:underline">
                Classes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <button
            onClick={() => logOut()}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
