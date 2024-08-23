import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ContactEmail from "../../components/ContactEmail";

const Contacts = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError("Xato: Email manzilini to'g'ri kiriting!");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = () => {
    const uzbPhoneRegex = /^\+998\d{9}$/;

    if (!uzbPhoneRegex.test(phone)) {
      setPhoneError(
        "Xato: Faqat O'zbekiston telefon raqamini kiriting! (+998XXXYYYYYY)"
      );
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePhone();
  };

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "20px"
  };

  const center = {
    lat: -34.397, // Xarita markazining latitude qiymati
    lng: 150.644 // Xarita markazining longitude qiymati
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center gap-7 xs:flex-col md:flex-row  pb-20">
        <div className="w-1/2 xs:w-full md:w-1/2">
          <div>
            <h1 className="font-bold text-[45px]">Contact</h1>
          </div>
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="bg-[#EFEFEF] w-full rounded-[40px] p-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                className="bg-[#EFEFEF] w-full outline-none font-bold"
                placeholder="Your Email"
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div className="bg-[#EFEFEF] w-full rounded-[40px] p-3 font-bold">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={validatePhone}
                className="bg-[#EFEFEF] w-full outline-none"
                placeholder="+998 XXX YY YY YY"
              />
              {phoneError && <p className="text-red-500">{phoneError}</p>}
            </div>
            <textarea
              className="h-[300px] bg-[#EFEFEF] rounded-3xl p-5 outline-none w-full font-bold"
              placeholder="Your Message Here"
              rows="4"></textarea>
            <div className="text-end">
              <button
                type="submit"
                className="bg-red-500 w-52  text-white p-3 text-xl rounded-3xl">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 xs:w-full md:w-1/2  h-64 xs:h-80 md:h-96  lg:h-[500px] xl:h-[600px]">
          {/* Google Map qo'shiladigan joy */}
          <LoadScript googleMapsApiKey="AIzaSyCLbPXts0Q5AxYTD6quzrMPXQeaC140wA0">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <div className="w-full">
        <ContactEmail />
      </div>
    </div>
  );
};

export default Contacts;
