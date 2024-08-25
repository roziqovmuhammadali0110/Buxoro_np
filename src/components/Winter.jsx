import bedOne from "../assets/bed1.png";
import { useTranslation } from "react-i18next";

const Winter = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto container w-full h-[323px] xs:h-[55vh] md:h-[95vh] lg:h-[95vh] xl:h-[323px] bg-[#40465D] lg:mt-6 xl:mt-0 text-white relative rounded-[30px] flex items-center xs:justify-center justify-between xl:justify-between xs:flex-col xl:flex-row">
      <div className="w-[35%] xs:w-full xl:w-[35%] text-start xs:text-center xl:text-start xs:pt-32 md:pt-[130px] lg:pt-[250px] xl:pt-0 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-[95px] xs:text-[30px] md:text-[60px] xl:text-[95px] font-bold">
            {t("winter.materialQuality.percentage")}
          </h1>
          <p className="text-[30px] xs:text-[15px] md:text-[23px] xl:text-[30px] xs:font-normal font-bold xl:font-bold">
            {t("winter.materialQuality.quality")}
          </p>
        </div>
      </div>
      <div className="absolute left-[10%] xl:left-[12%] xs:-left-[10px] 2xl:left-[19%] xs:-top-20 md:-top-48 lg:-top-58 xl:-top-[100px] 2xl:-top-[140px]">
        <img src={bedOne} alt="" className="xl:w-[700px] 2xl:w-[800px]" />
      </div>
      <div className="flex flex-col w-[36%] xs:w-full xl:w-[36%] items-start md:items-center md:text-center xl:text-start xl:items-start justify-center xs:p-5 xl:p-0 xl:right-0">
        <h1 className="text-[46px] xs:text-[22px] md:text-[38px] xl:text-[46px] font-bold">
          {t("winter.companyDescription.title")}
        </h1>
        <p className="max-w-[300px] xs:max-w-[100%] xl:max-w-[300px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px]">
          {t("winter.companyDescription.description")}
        </p>
      </div>
    </div>
  );
};

export default Winter;
