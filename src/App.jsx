import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Page from "./pages/404p/404page";
import Collection from "./pages/collaction/Collaction";
import DetailsPage from "./pages/details/DetailsPage";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="space-y-20 mx-auto container">
      <Navbar changeLanguage={changeLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="*" element={<Page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
