import cars from "../assets/cars.svg";
import guarantee from "../assets/guarentee.svg";
import support from "../assets/support.svg";
import payment from "../assets/payment.svg";

const headerB = [
  {
    id: 1,
    img: cars,
    title: "Free shipping",
    description: "Free shipping on all orders"
  },
  {
    id: 2,
    img: guarantee,
    title: "Return Guarantee",
    description: "30 day money back"
  },
  {
    id: 3,
    img: support,
    title: "Online support 24/7",
    description: "Technical support 24/7"
  },
  {
    id: 4,
    img: payment,
    title: "Secure payment",
    description: "All payment methods accepted"
  }
];

const HeaderBottom = () => {
  return (
    <div className=" grid items-center justify-between xs:grid-cols-2 md:grid-cols-4 pb-32 ">
      {headerB?.map((item) => {
        return (
          <div
            key={item.id}
            className="xs:items-center xs:justify-center flex xs:flex-col xl:flex-row max-w-[400px] xl:gap-5">
            <span>
              <img src={item.img} alt={item.title} />
            </span>
            <div className="xs:text-center xl:text-start">
              <span>
                <h5 className="font-bold text-[17px] xs:text-[13px] md:text-[14px] lg:text-[15px]">
                  {item.title}
                </h5>
              </span>
              <span>
                <p className="font-medium text-[17px] xs:text-[13px] md:text-[14px] lg:text-[15px] text-[#B2B2B2]">
                  {item.description}
                </p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderBottom;
