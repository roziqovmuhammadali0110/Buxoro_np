import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Logoningiz joylashgan manzil
import { FaBars, FaTimes } from "react-icons/fa"; // React-icons kutubxonasidan foydalanamiz
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage); // Tanlangan tilni localStorage'ga saqlash
  };

  const language = i18n.language || localStorage.getItem("i18nextLng") || "uz";

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-xl text-[18px]">
      <div className="flex space-x-10 text-[20px] items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </NavLink>
        <ul className="hidden lg:flex space-x-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-800"
                  : "text-black hover:text-blue-600"
              }>
              {t("navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-800"
                  : "text-black hover:text-blue-600"
              }>
              {t("navbar.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-800"
                  : "text-black hover:text-blue-600"
              }>
              {t("navbar.collection")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-800"
                  : "text-black hover:text-blue-600"
              }>
              {t("navbar.contact")}
            </NavLink>
          </li>
        </ul>
        <select
          value={language}
          name="Lng"
          id="lng"
          onChange={handleChangeLanguage}
          className="border-2 rounded-md p-1 ml-3">
          <option value="uz">O'zbekcha</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-black focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sliding Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white p-4 z-10 flex flex-col items-start space-y-4 shadow-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-800"
                : "text-black hover:text-blue-600"
            }
            onClick={() => setIsMenuOpen(false)}>
            {t("navbar.home")}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-800"
                : "text-black hover:text-blue-600"
            }
            onClick={() => setIsMenuOpen(false)}>
            {t("navbar.about")}
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-800"
                : "text-black hover:text-blue-600"
            }
            onClick={() => setIsMenuOpen(false)}>
            {t("navbar.collection")}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-800"
                : "text-black hover:text-blue-600"
            }
            onClick={() => setIsMenuOpen(false)}>
            {t("navbar.contact")}
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
