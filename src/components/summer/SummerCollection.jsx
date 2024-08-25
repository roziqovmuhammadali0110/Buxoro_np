import { useTranslation } from "react-i18next";
import summer from "../../assets/data/summer";

const SummerCollection = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini chaqiramiz

  return (
    <div className="container mx-auto lg:pt-10">
      <div className="w-full text-center">
        <h1 className="font-bold text-[65px] xs:text-[38px] md:text-[45px] lg:text-[50px] xl:text-[65px] text-[#000000]">
          {t("summerCollection.title")}
        </h1>
        <p className="text-[22px] xs:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#919191]">
          {t("summerCollection.description")}
        </p>
      </div>
      <div className="grid grid-cols-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {summer.map((item, index) => {
          return (
            <div
              key={index}
              className="text-[#000000] w-full px-4 py-12 hover:text-red-500 hover:font-bold">
              <img
                src={item.img}
                alt=""
                className="w-[250px] h-[200px] rounded-xl"
              />
              <h2 className="text-[16px] ">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummerCollection;
