import email from "../assets/email.svg";
import tel from "../assets/tel.svg";
import location from "../assets/location.svg";

const headerB = [
  {
    id: 1,
    img: email,
    title: "Email:",
    description: "info@bnpfabric.uz"
  },
  {
    id: 2,
    img: tel,
    title: "Tel:",
    description: `+998 93 383 75 85 +998 93 960 78 00`
  },
  {
    id: 3,
    img: location,
    title: "Address:",
    description: "Bukhara, st. Alpomysh 80."
  }
];

const ContactEmail = () => {
  return (
    <div className=" flex items-center justify-between flex-wrap gap-10 xs:justify-center md:justify-between pb-32 ">
      {headerB?.map((item) => {
        return (
          <div
            key={item.id}
            className="xs:items-center xs:justify-center flex xs:flex-col xl:flex-row max-w-[400px] xl:gap-5">
            <span className="w-[400px]">
              <img src={item.img} alt={item.title} />
            </span>
            <div className="xs:text-center xl:text-start">
              <div>
                <div className=" w-[280px]">
                  <span className="font-bold text-[20px] xs:text-[16px] md:text-[18px] lg:text-[20px]">
                    {item.title}
                  </span>
                  <span className="font-medium text-[18px] xs:text-[15px] md:text-[16px] lg:text-[18px] text-[#B2B2B2]">
                    {item.description}
                  </span>
                </div>
              </div>
              <span>
                <p></p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactEmail;
