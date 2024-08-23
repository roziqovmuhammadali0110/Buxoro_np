import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-8 px-4">
      {/* Logo va matn */}
      <div className="flex flex-wrap items-center lg:flex-row lg:items-start md:justify-around xl:justify-between space-y-6 lg:space-y-0 xs:space-x-4 lg:space-x-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left pb-4">
          <a href="#">
            <img src={logo} alt="Logo" className="h-16 w-auto mb-4" />
          </a>
          <p className="text-gray-700 max-w-[350px] xs:text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
            'Bukhara Natural Product' has been a company that produces cotton
            fabrics for many years for use all over the world.
          </p>
        </div>

        {/* Menyu bo'limi */}
        <ul className="flex flex-col space-y-2 text-gray-700 lg:space-y-4">
          <li className="font-bold text-black">
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>

        {/* Kontaktlar bo'limi */}
        <div className="flex gap-20 xs:gap-3 md:gap-20 xs:space-x-0 md:space-x-4 justify-between xs:flex-col md:flex-row">
          <ul className="flex flex-col space-y-2 text-gray-700 lg:space-y-4">
            <li className="font-bold text-black">
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">Bukhara, st.Alpomysh 80.</a>
            </li>
            <li>
              <a href="#">Bnpuz@bk.ru</a>
            </li>
            <li>
              <a href="#">bnp_fabrik</a>
            </li>
            <li>
              <a href="#">info@bnpfabric.com</a>
            </li>
            <li>
              <a href="#">+998 93 383 75 85</a>
            </li>
            <li>
              <a href="#">+998 93 960 78 00</a>
            </li>
          </ul>

          {/* Obuna bo'limi */}
          <div className="w-full lg:w-auto">
            <ul className="mb-4">
              <li className="font-bold text-black lg:text-left">
                Subscribe to our email
              </li>
            </ul>
            <div className="flex items-center space-x-4 xs:space-x-0 md:space-x-4 gap-2 bg-[#F2F2F2] border-2 p-3 rounded-[45px]">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full lg:w-auto px-4 py-2 bg-none rounded-xl focus:outline-none bg-[#F2F2F2]"
              />
              <button className="bg-[#F42C37] text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition duration-300 w-[200px] lg:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
