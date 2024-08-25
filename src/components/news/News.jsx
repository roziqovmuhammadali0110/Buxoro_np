import news from "../../assets/data/news";
const SummerCollection = () => {
  return (
    <div className=" container mx-auto">
      <div className="w-full text-center">
        <h1 className="font-bold text-[65px] xs:text-[38px] md:text-[45px] lg:text-[50px] xl:text-[65px] text-[#000000]">
          News
        </h1>
        <p className="text-[22px] xs:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#919191]">
          Bukhara Natural Product
        </p>
      </div>
      <div className="grid grid-cols-3 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => {
          return (
            <div
              key={index}
              className="text-[#000000] w-full  px-4 py-12 rounded-2xl hover:text-red-500 hover:font-bold">
              <img
                src={item.img}
                alt=""
                className="w-[450px] h-[230px] rounded-xl hover:transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
              />
              <div className="max-w-[450px]">
                <p className="text-[18px] text-[#828282]">{item.subtext}</p>
                <h2 className="text-[25px] py-3 font-bold max-w-[500px] text-[#000000]">
                  {item.name}
                </h2>
                <p className="text-[18px] text-[#828282] truncate max-w-[400px]">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummerCollection;
