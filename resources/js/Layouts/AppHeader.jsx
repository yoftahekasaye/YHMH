import React, { useState, useEffect, useRef } from "react";
import { useForm } from "@inertiajs/inertia-react";

const AppHeader = ({ toggleMobileSidebar }) => {
  const { post } = useForm();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  const profileMenuRef = useRef(null);
  const notificationsRef = useRef(null);

  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);
  const toggleNotifications = () => setShowNotifications(!showNotifications);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    post(route("logout"));
  };

  const handleNotificationClick = () => {
    if (unreadNotifications > 0) {
      setUnreadNotifications(unreadNotifications - 1);
    }
  };

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Apply dark mode to the body
  useEffect(() => {
    document.body.className = darkMode ? "dark bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900";
  }, [darkMode]);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center dark:bg-gray-800">
      {/* Mobile Sidebar Toggle (Visible only on small screens) */}
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded-lg"
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
{/* Search and Filter Box (Responsive) */}
<div className="flex items-center w-full sm:w-64 md:w-80 lg:w-96 border border-gray-300 rounded-md mx-4">
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search by category or keyword..."
    className="w-full py-2 px-4 rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

      {/* Icons Section */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Notifications Dropdown */}
        <div ref={notificationsRef} className="relative">
          <button
            onClick={toggleNotifications}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 relative"
            aria-label="Notifications"
            aria-expanded={showNotifications}
          >
            🔔
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                {unreadNotifications}
              </span>
            )}
          </button>
          {showNotifications && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-48 dark:bg-gray-800 dark:text-gray-300 z-50">
              {unreadNotifications > 0 ? (
                <div>
                  <p className="text-sm font-semibold">You have {unreadNotifications} unread notifications.</p>
                  <div className="mt-2">
                    <div
                      onClick={handleNotificationClick}
                      className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 rounded p-1"
                    >
                      Notification 1
                    </div>
                    <div
                      onClick={handleNotificationClick}
                      className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 rounded p-1"
                    >
                      Notification 2
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-700 dark:text-gray-300">No new notifications.</div>
              )}
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Profile Dropdown */}
        <div ref={profileMenuRef} className="relative">
          <button
            onClick={toggleProfileMenu}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Profile Menu"
          >
            👤
          </button>
          {showProfileMenu && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-48 p-4 dark:bg-gray-800 dark:text-gray-300 z-50">
              <button
                onClick={() => window.location.href = route("driver.edit")}
                className="block w-full text-left px-2 py-1 text-red-600 hover:bg-gray-200 rounded dark:text-red-500 dark:hover:bg-gray-600"
              >
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-2 py-1 text-red-600 hover:bg-gray-200 rounded dark:text-red-500 dark:hover:bg-gray-600"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
