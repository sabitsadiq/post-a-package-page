import Image from "next/image";
import React from "react";
const TripInfo = () => {
  return (
    <section className="w-11/12 mx-auto pt-8 shadow-md mt-4 rounded-xl">
      <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
        <h1 className=" text-[#000000] font-bold text-sm md:text-lg xl:text-2xl px-4 py-2">
          Trip information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:py-20 md:px-8 xl:px-20 py-5 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32">
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            Current location
          </h2>
          <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <div className="flex gap-2 items-center">
              <Image
                src="/image/location.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="location"
              />
              <h2 className="font-normal text-sm xl:text-lg text-[#000000] opacity-50">
                No 14 bosso road
              </h2>
            </div>
            <button className="bg-[#FFD700] rounded-3xl font-normal text-sm px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 ">
              <span className="opacity-50 font-normal text-xs">ETA</span>2min
            </button>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            Destination
          </h2>
          <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <div className="flex gap-2 items-center">
              <Image
                src="/image/destination.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="destination"
              />
              <h2 className="font-normal text-sm xl:text-lg text-[#000000] opacity-50">
                No 14 bosso road
              </h2>
            </div>
            <button className="bg-[#FFD700] rounded-3xl font-normal text-sm px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 ">
              <span className="opacity-50 font-normal text-xs">ETA</span>2min
            </button>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            From
          </h2>
          <div className="flex gap-2 mb-4">
            <Image
              src="/image/warning.png"
              className="w-4 h-4"
              width="50"
              height="50"
              alt="notice"
            />
            <p className="font-semibold text-xs opacity-50">
              Kindly specify the delivery time range
            </p>
          </div>
          <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <div className="flex gap-2 items-center">
              <Image
                src="/image/calender.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="calender"
              />
              <span className="font-normal opacity-50 p-2 text-sm xl:text-lg">
                02/3/23
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            To
          </h2>
          <div className="flex gap-2 mb-4">
            <Image
              src="/image/warning.png"
              className="w-4 h-4"
              width="50"
              height="50"
              alt="notice"
            />
            <p className="font-semibold text-xs opacity-50">
              Kindly specify the delivery time range
            </p>
          </div>
          <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <div className="flex gap-2 items-center">
              <Image
                src="/image/calender.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="calender"
              />
              <span className="font-normal opacity-50 p-2 text-sm xl:text-lg">
                02/3/23
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#CCCCCC26] border-x-2 w-full bg-opacity-20">
        <h1 className=" text-[#000000] font-bold text-sm md:text-lg xl:text-2xl px-4 py-2">
          Package information
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-8 xl:px-20 py-5 md:py-20 gap-4 lg:gap-x-8 xl:gap-x-20 2xl:gap-x-32">
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            Category
          </h2>
          <div className="flex justify-between p-2 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <button className="bg-[#FFD700] rounded-3xl  px-6 py-3 flex justify-between items-center gap-4">
              <span className="opacity-50 text-sm font-normal">
                Electronics
              </span>
              <Image
                src="/image/iconoir_cancel.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="cancel"
              />
            </button>
            <Image
              src="/image/icon-park_down.png"
              className="w-4 h-4 flex self-center mr-4"
              width="50"
              height="50"
              alt="location"
            />
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            Number of packages
          </h2>
          <div className="flex justify-between p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <div className="flex justify-center gap-2 items-center">
              <Image
                src="/image/la_truck-pickup.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="cancel"
              />
              <span className="opacity-50 text-sm font-normal">2</span>
            </div>
            <Image
              src="/image/icon-park_down.png"
              className="w-4 h-4 flex self-center"
              width="50"
              height="50"
              alt="location"
            />
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            Package size
          </h2>
          <div className="flex justify-between p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <div className="flex gap-4 items-center">
              <Image
                src="/image/la_truck-pickup.png"
                className="w-4 h-4"
                width="50"
                height="50"
                alt="truck"
              />
              <span className="opacity-50 text-sm font-normal">
                Electronics
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-semibold text-sm md:text-lg xl:text-xl my-2">
            Price
          </h2>
          <div className="flex items-center gap-1 p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
            <Image
              src="/image/naira.png"
              className="w-3 h-3"
              width="50"
              height="50"
              alt="naira"
            />
            <input
              type="number"
              placeholder="120000"
              className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripInfo;
