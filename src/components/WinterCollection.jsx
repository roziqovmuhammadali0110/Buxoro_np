import { Link } from "react-router-dom";
import winter from "../assets/data/winter";
import { useTranslation } from "react-i18next";

const WinterCollection = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:py-20 container mx-auto">
      <div className="w-full text-center">
        <h1 className="font-bold text-[65px] xs:text-[38px] md:text-[45px] lg:text-[50px] xl:text-[65px] text-[#000000]">
          {t("winterCollection.title")}
        </h1>
        <p className="text-[22px] text-[#919191]">
          {t("winterCollection.description")}
        </p>
      </div>
      <div className="grid grid-cols-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {winter.map((item) => (
          <div
            key={item.id}
            className="text-[#000000] w-full px-4 py-12 hover:text-red-500 hover:font-bold">
            <Link to={`/details/${item.id}`} state={{ item }}>
              <img
                src={item.img}
                alt={item.name}
                className="w-[250px] h-[200px] rounded-xl"
              />
              <h2 className="text-[16px]">{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCollection;
