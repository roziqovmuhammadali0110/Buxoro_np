import cars from "../assets/cars.svg";
import guarantee from "../assets/guarentee.svg";
import support from "../assets/support.svg";
import payment from "../assets/payment.svg";
import { useTranslation } from "react-i18next";

const headerB = [
  {
    id: 1,
    img: cars,
    title: "headerBottom.freeShipping.title",
    description: "headerBottom.freeShipping.description"
  },
  {
    id: 2,
    img: guarantee,
    title: "headerBottom.returnGuarantee.title",
    description: "headerBottom.returnGuarantee.description"
  },
  {
    id: 3,
    img: support,
    title: "headerBottom.onlineSupport.title",
    description: "headerBottom.onlineSupport.description"
  },
  {
    id: 4,
    img: payment,
    title: "headerBottom.securePayment.title",
    description: "headerBottom.securePayment.description"
  }
];

const HeaderBottom = () => {
  const { t } = useTranslation();

  return (
    <div className="grid items-center justify-between xs:grid-cols-2 md:grid-cols-4 pb-32 pt-4">
      {headerB.map((item) => {
        return (
          <div
            key={item.id}
            className="xs:items-center xs:justify-center flex xs:flex-col xl:flex-row max-w-[400px] xl:gap-5">
            <span>
              <img src={item.img} alt={t(item.title)} />
            </span>
            <div className="xs:text-center xl:text-start">
              <span>
                <h5 className="font-bold text-[17px] xs:text-[13px] md:text-[14px] lg:text-[15px]">
                  {t(item.title)}
                </h5>
              </span>
              <span>
                <p className="font-medium text-[17px] xs:text-[13px] md:text-[14px] lg:text-[15px] text-[#B2B2B2]">
                  {t(item.description)}
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
