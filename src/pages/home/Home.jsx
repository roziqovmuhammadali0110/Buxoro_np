import headerImg from "../../assets/headerImg.png";
import Automn from "../../components/automn/Automn";
import AutomnCollection from "../../components/automn/AutomnCollection";
import HeaderBottom from "../../components/HeaderBottom";
import News from "../../components/news/News";
import Summer from "../../components/summer/Summer";
import SummerCollection from "../../components/summer/SummerCollection";
import Winter from "../../components/Winter";
import WinterCollection from "../../components/WinterCollection";

const Home = () => {
  return (
    <div className="container mx-auto space-y-20 p-3">
      <header className="flex items-center rounded-2xl justify-between gap-10 lg:gap-20 xs:h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[600px] bg-[#454241] relative overflow-hidden">
        <div className="w-full lg:w-[80%] z-50 xl:top-auto xl:-left-[250px] absolute xs:-left-12 lg:-left-40 xs:-bottom-5 md:-left-40 md:-bottom-20 xl:-bottom-[100px]">
          <img src={headerImg} alt="" className="w-full lg:w-[2000px]" />
        </div>
        <div className="flex w-full lg:w-[25%] z-40 top-0 right-1 absolute font-bold text-white">
          <div className="w-full flex flex-col items-end lg:items-end justify-center relative top-0 right-0 lg:right-auto">
            <h3 className="text-[30px] xs:text-[18px] md:text-[27px] lg:text-[50px] xl:text-[50px] leading-[1.1]">
              Bukhara
            </h3>
            <h2 className="text-[60px] xs:text-[35px] md:text-[65px] lg:text-[100px] xl:text-[150px] leading-[1.1]">
              Natural
            </h2>
            <h1 className="text-[90px] xs:text-[50px] md:text-[100px] lg:text-[150px] xl:text-[200px] leading-[1.1]">
              Product
            </h1>
          </div>
        </div>
      </header>
      <HeaderBottom />
      <Winter />
      <WinterCollection />
      <Automn />
      <AutomnCollection />
      <Summer />
      <SummerCollection />
      <News />
    </div>
  );
};

export default Home;
