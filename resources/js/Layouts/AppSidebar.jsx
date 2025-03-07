import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const AppSidebar = ({ isMobileOpen, toggleMobileSidebar }) => {
  const navItems = [
    { href: "/driver/dashboard", label: "Dashboard" },
  
    { href: "/driver/review-users", label: "Review Users" }, // UC-7: Review user details
    { href: "/driver/assign-roles", label: "Assign/Revoke Roles" }, // UC-8: Assign/revoke roles
    { href: "/driver/manage-permissions", label: "Grant/Revoke Permissions" } // UC-9: Grant/revoke permissions
];

  return (
    <>
      {/* Backdrop for Mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-48 md:w-64 bg-gray-800 text-white flex flex-col fixed md:relative h-screen transition-transform transform ease-in-out duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-50`}
      >
        {/* Logo */}
        <div className="px-6 py-4 text-2xl font-bold flex justify-between items-center">
          Logo
          {/* Close Button (Only for Mobile) */}
          <button
            onClick={toggleMobileSidebar}
            className="md:hidden text-white text-xl"
            aria-label="Close Sidebar"
          >
            ✖
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="p-3 md:p-4 hover:bg-gray-700">
                <Link
                  href={item.href}
                  className={`block w-full ${route().current(item.href) ? "font-bold" : ""}`}
                  aria-label={item.label}
                  onClick={toggleMobileSidebar} // Close sidebar on mobile when a link is clicked
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

       
      </aside>
    </>
  );
};

export default AppSidebar;