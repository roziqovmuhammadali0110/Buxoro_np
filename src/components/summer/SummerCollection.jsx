import summer from "../../assets/data/summer";

const SummerCollection = () => {
  return (
    <div className="pt-32 container mx-auto">
      <div className="w-full text-center">
        <h1 className="font-bold text-[65px] text-[#000000]">
          Summer collection
        </h1>
        <p className="text-[22px] text-[#919191]">Bukhara Natural Product</p>
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
              <h2 className="text-[20px] ">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummerCollection;
