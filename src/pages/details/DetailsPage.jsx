import { useState } from "react";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <p>Ma'lumot topilmadi.</p>;
  }

  const details = [
    { label: "Material", value: item.Material },
    { label: "Pillowcase", value: item.Pillowcase },
    { label: "Bed sheet", value: item.sheet },
    { label: "Duvet cover", value: item.Duvet },
    { label: "Size", value: item.Size },
    { label: "Manufacturer", value: item.Manufacturer }
  ];

  const Star = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "gold" : "none"}
      stroke="gold"
      strokeWidth="2"
      width="30px"
      height="20px"
      className="cursor-pointer hover:fill-gold transition-all">
      <path d="M12 .587l3.668 7.568 8.332 1.151-6 5.982 1.417 8.29L12 18.896l-7.417 4.682 1.417-8.29-6-5.982 8.332-1.151z" />
    </svg>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 pb-20">
        {/* First div */}
        <div className="w-full lg:w-2/3">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Second div */}
        <div className="w-full lg:w-1/3 space-y-6 lg:space-y-8">
          <h1 className="text-2xl lg:text-4xl font-bold">{item.name}</h1>
          <div className="border-2 p-4 rounded-lg">
            {details.map(({ label, value }) => (
              <div
                key={label}
                className="border-b-2 flex justify-between py-3 text-[#9E7050] last:border-b-0">
                <div className="w-1/3 lg:w-1/2">
                  <p className="text-base lg:text-lg">{label}:</p>
                </div>
                <div className="w-2/3 lg:w-1/2 pl-4">
                  <p className="text-base lg:text-lg">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center text-base lg:text-lg gap-1">
            <p>Category: </p>
            <p className="text-[#9E7050]">Winter collection</p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex gap-4 mb-4 justify-center">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 ${
              activeTab === "description"
                ? "border-t-4 font-bold text-[#515151] text-[25px] border-[#F42C37]"
                : "text-[#CFCFCF] font-bold text-[20px]"
            }`}>
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-4 ${
              activeTab === "reviews"
                ? "border-t-4 font-bold text-[#515151] text-[25px] border-[#F42C37]"
                : "text-[#CFCFCF] font-bold text-[20px]"
            }`}>
            Reviews (0)
          </button>
        </div>
        {activeTab === "description" && (
          <div className="w-full flex items-center justify-center">
            <div className="w-[70%] xs:w-[100%] lg:w-[80%] xl:w-[70%] space-y-4">
              <h2 className="text-3xl font-bold">Description</h2>
              <h2 className="text-[25px] font-bold">Alpari bedding set</h2>
              <p className="text-[18px] font-normal text-[#666666]">
                Bed linen is a household item and bedroom decor designed for
                comfort and beauty. You can choose from a variety of bed sets
                that include sheets, blankets, pillow crafts and other
                accessories. They have various designs, prints, embroideries or
                other design elements. They are easy and quick to clean and
                clean. They are made from soft materials and they make your
                bedrooms cozy and cozy.
              </p>
            </div>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="w-full flex items-center flex-col justify-center space-y-7">
            <div className="w-[70%] xs:w-[100%] lg:w-[90%] xl:w-[70%] space-y-4 pb-7">
              <h2 className="text-3xl font-bold">Reviews</h2>
              <p className="text-[#666666] text-[18px] font-normal">
                There are no reviews yet.
              </p>
            </div>
            <div className="w-[70%] space-y-1 xs:w-[100%] lg:w-[80%] xl:w-[70%]">
              <h2 className="text-2xl font-bold">
                Be the first to review “Alpari”
              </h2>
              <p className="text-[#666666] text-[17px] font-normal">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="flex items-center justify-start">
                <h2 className="text-xl font-bold">Your rating *</h2>
                <p className="flex items-center">
                  <Star filled={false} />
                  <Star filled={false} />
                  <Star filled={false} />
                  <Star filled={false} />
                  <Star filled={false} />
                </p>
              </div>
            </div>
            <div className="w-[70%] xs:w-[100%] lg:w-[80%] xl:w-[70%]">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-col flex items-start justify-center flex-1">
                    <label
                      className="text-[17px] font-medium pl-4 pb-2"
                      htmlFor="name">
                      Name *
                    </label>
                    <input
                      className="w-full p-4 bg-[#EFEFEF] outline-none pl-7 rounded-[30px]"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex-col flex items-start justify-center flex-1">
                    <label
                      className="text-[17px] font-medium pl-4 pb-2"
                      htmlFor="email">
                      Email *
                    </label>
                    <input
                      className="w-full p-4 bg-[#EFEFEF] outline-none pl-7 rounded-[30px]"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="flex-col flex items-start justify-center w-full">
                  <label
                    className="text-[17px] font-medium pl-4 pb-2"
                    htmlFor="review">
                    Your review
                  </label>
                  <textarea
                    className="w-full h-[323px] p-4 bg-[#EFEFEF] outline-none rounded-3xl"
                    id="review"
                    name="review"
                    required></textarea>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    className="self-start text-[19px] py-3 w-[180px] bg-[#F42C37] text-white rounded-full">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
