import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } ${isDarkMode ? "bg-gray-800" : "bg-gray-200"} text-white p-4 shadow-lg transition-all duration-300 block`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="text-white mb-4 focus:outline-none w-full flex justify-center"
      >
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 relative"
              title="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0L9 9"
                />
              </svg>
              {!isCollapsed && "Home"}
            </Link>
          </li>

          {/* Add Notification Badge */}
          <li>
            <Link
              to="/reservations"
              className="flex items-center py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 relative"
              title="Reservations"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              {!isCollapsed && "Reservations"}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            </Link>
          </li>

          {/* Repeat for other links */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;