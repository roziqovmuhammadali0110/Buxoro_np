import aboutImg from "../../assets/aboutImg.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto gap-6 flex items-center justify-between xs:flex-col md:flex-row">
      {/* Matn bo'lagi */}
      <div className="order-2 md:order-1 space-y-5">
        <h1 className="text-[65px] font-bold text-lg xs:text-[27px] md:text-xl lg:text-2xl">
          {t("about.title")}
        </h1>
        <div className="space-y-3 font-normal text-[#474747] text-lg xs:text-base md:text-[16px] px-2">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>
          <p>{t("about.paragraph4")}</p>
          <p>{t("about.paragraph5")}</p>
          <p>{t("about.paragraph6")}</p>
          <p>{t("about.paragraph7")}</p>
          <p>{t("about.paragraph8")}</p>
          <p>{t("about.paragraph9")}</p>
          <p>{t("about.paragraph10")}</p>
          <p>{t("about.paragraph11")}</p>
        </div>
      </div>

      {/* Rasm bo'lagi */}
      <div className="order-1 md:order-2 max-w-[1400px] flex items-center justify-center">
        <img
          src={aboutImg}
          alt={t("about.imageAlt")}
          className="w-[1000px] rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default About;
