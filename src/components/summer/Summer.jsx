import bedThree from "../../assets/bedThree.png";

const Summer = () => {
  return (
    <div className="mx-auto container w-full h-[323px] xs:h-[70vh] md:h-[90vh] lg:h-[120vh] xl:h-[323px] bg-[#307E7A] text-white mt-20 relative rounded-[30px] flex items-center xs:justify-center justify-between xl:justify-between xs:flex-col xl:flex-row">
      <div className=" w-[35%] xs:w-full xl:w-[35%] text-start xs:text-center xl:text-start xs:pt-[200px] lg:pt-[350px] xl:pt-0 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-[95px] xs:text-[30px] md:text-[60px] xl:text-[95px] font-bold">
            100%
          </h1>
          <p className="text-[30px] xs:text-[15px] md:text-[23px] xl:text-[30px] xs:font-normal font-bold xl:font-bold">
            Material quality
          </p>
        </div>
      </div>
      <div className="absolute left-[160px] xs:left-[30px] xl:left-[160px] 2xl:left-[100px] xs:-top-20 md:-top-48 lg:-top-52 xl:-top-60 ">
        <img src={bedThree} alt="" />
      </div>
      <div className="flex flex-col w-[36%] xs:w-full xl:w-[36%] items-start md:items-center md:text-center xl:text-start xl:items-start justify-center xs:p-5 xl:p-0">
        <h1 className="text-[46px] xs:text-[25px] md:text-[38px] xl:text-[46px] font-bold">
          'Bukhara Natural Product'
        </h1>
        <p className="max-w-[300px] xs:max-w-[100%] xl:max-w-[300px]">
          {" "}
          has been a company that produces cotton fabrics for use all over the
          world for many years
        </p>
      </div>
    </div>
  );
};

export default Summer;
