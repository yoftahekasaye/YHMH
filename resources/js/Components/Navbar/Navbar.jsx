import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa"; // 🌍 Language Icon
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "@inertiajs/react";

const translations = {
  en: {
    home: "HOME",
    cars: "CARS",
    about: "ABOUT",
    booking: "BOOKING",
    dashboard: "Dashboard",
    login: "Log in",
    register: "Register",
  },
  om: {
    home: "BIRRII",
    cars: "MACHINII",
    about: "HIMAMAA",
    booking: "BOKIINGII",
    dashboard: "Itti Fayyadama",
    login: "Seensa",
    register: "Galmee",
  },
  am: {
    home: "መነሻ",
    cars: "መኪናዎች",
    about: "ስለ",
    booking: "ቦኪንግ",
    dashboard: "መተግበሪያ",
    login: "ግባ",
    register: "ምዝገባ",
  },
};

export const Navlinks = [
  { id: 1, name: "home" },
  { id: 2, name: "cars" },
  { id: 3, name: "about" },
  { id: 4, name: "booking" },
];

const Navbar = ({ theme, setTheme, auth }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [language, setLanguage] = useState("en"); // 🌍 Default Language: English
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const [searchQuery, setSearchQuery] = useState(""); // Added search query state
  const [filterOption, setFilterOption] = useState(""); // Added filter option state

  // 🌍 Language Options
  const languages = [
    { code: "en", label: "English" },
    { code: "om", label: "Afaan Oromoo" },
    { code: "am", label: "አማርኛ (Amharic)" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* Search and Filter inside One Box */}
          <div className="flex items-center w-[40%] mx-4 border border-red-100 rounded-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 py-2 px-4 rounded-l-md"
            />

            <select
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
              className="py-2 px-4 rounded-r-md"
            >
              <option value="">Filter</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name }) => (
                <li key={id} className="py-4">
                  <Link
                    href={`/${name === "home" ? "" : name}`}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {translations[language][name]}
                  </Link>
                </li>
              ))}

              {/* Authentication Links */}
              {auth?.user ? (
                <Link
                  href={route("dashboard")}
                  className="rounded-md px-3 py-2 text-black dark:text-white"
                >
                  {translations[language].dashboard}
                </Link>
              ) : (
                <>
                  <Link
                    href={route("login")}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {translations[language].login}
                  </Link>
                  <Link
                    href={route("register")}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {translations[language].register}
                  </Link>
                </>
              )}

              {/* 🌍 Language Selector */}
              <div className="relative">
                <button
                  onClick={() =>
                    setShowLanguageDropdown(!showLanguageDropdown)
                  }
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <FaGlobe className="text-xl" />
                  {languages.find((lang) => lang.code === language)?.label}
                </button>

                {/* Dropdown */}
                {showLanguageDropdown && (
                  <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguageDropdown(false);
                        }}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark Mode Toggle */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}

            {/* Mobile Hamburger Menu */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={() => setShowMenu(false)}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={() => setShowMenu(true)}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
