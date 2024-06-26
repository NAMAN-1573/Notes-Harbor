import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { RiSearchLine, RiUserLine, RiMenuLine } from "react-icons/ri";

const Topnav = () => {
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceholder] = useState(""); // Placeholder state for the search input
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  const searchSubmit = (e) => {
    e.preventDefault();
    // Add search functionality here
  };

  const menuClickHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    // Implement login functionality here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    // Implement signup functionality here
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 z-10 p-4 flex items-center justify-between">
      {/* Left section */}
      <div className="flex items-center">
        <p className="text-white font-bold">HandNotes</p>
      </div>

      {/* Center section */}
      {isLoggedIn && (
        <div className="hidden md:flex items-center w-full max-w-md mx-auto">
          <form className="flex items-center w-full" onSubmit={searchSubmit}>
            <input
              type="text"
              placeholder={`Search for notes ${placeholder}`}
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 flex items-center bg-gray-800 text-white rounded-full p-2"
            >
              <RiSearchLine className="text-white" />
            </button>
          </form>
        </div>
      )}

      {/* Right section */}
      <div className="flex items-center">
        {isLoggedIn ? (
          <>
            <button className="text-white ml-4" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white ml-4">
              Login
            </Link>
            <Link to="/signup" className="text-white ml-4">
              Sign Up
            </Link>
          </>
        )}
        <button
          className="text-white ml-4 md:hidden"
          onClick={menuClickHandler}
        >
          <RiMenuLine size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center md:hidden">
          {isLoggedIn ? (
            <>
              <div className="w-full p-4">
                <form
                  className="flex items-center w-full"
                  onSubmit={searchSubmit}
                >
                  <input
                    type="text"
                    placeholder={`Search for notes ${placeholder}`}
                    className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="ml-2 flex items-center bg-gray-800 text-white rounded-full p-2"
                  >
                    <RiSearchLine className="text-white" />
                  </button>
                </form>
              </div>
              <button className="text-white my-2" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white my-2">
                Login
              </Link>
              <Link to="/signup" className="text-white my-2">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Topnav;
