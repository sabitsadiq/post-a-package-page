import React from "react";
import Link from "next/link";
import Image from "next/image";
const JourneyDescMain = () => {
  return (
    <section className="w-full my-10 mx-auto">
      <Link
        href="/"
        className="flex gap-2 items-center md:w-11/12 xl:w-4/5 md:mx-auto  my-5"
      >
        <Image
          src="/image/leftArrowHead.png"
          className="w-2 h-2"
          width="50"
          height="50"
          alt="truck"
        />
        <h2 className="font-normal text-sm lg:text-lg opacity-50">Back</h2>
      </Link>
      <div className="flex gap-5 md:w-11/12 xl:w-4/5  md:mx-auto">
        <h1 className="font-normal md:font-semibold text-lg md:text-xl xl:text-l">
          Abuja
        </h1>
        <span className="font-normal text-lg opacity-50 flex items-end">
          to
        </span>
        <h1 className="font-normal md:font-semibold text-lg md:text-xl xl:text-l">
          Kaduna
        </h1>
      </div>
      <div className="relative md:w-11/12 h-96 xl:my-10 xl:w-4/5 mx-auto mt-6">
        <Image
          className="w-full h-full object-fill"
          src="/image/Sender/MapsicleMap.png"
          // width="100"
          // height="100"
          layout="fill"
          alt="desc"
        />
      </div>
      <div className="mt-8 md:w-11/12 xl:w-4/5 md:mx-auto">
        <h1 className="font-medium text-lg md:font-bold md:text-xl">
          Description
        </h1>
        <p className="font-normal text-sm md:w-4/5 xl:w-3/5 md:text-lg opacity-50">
          Lorem ipsum dolor sit amet consectetur. Ultrices nisl vel tincidunt
          sed. Aliquet molestie feugiat elementum mi elementum.
        </p>
        <div className="font-normal text-sm md:text-lg opacity-50">
          <label>Delivery Date:</label>
          <input
            className="outline-none border-none bg-transparent"
            placeholder="12-18th of July"
          />
        </div>
        <div className="mt-5">
          <h1 className="font-normal text-lg md:font-bold md:text-xl">
            Category
          </h1>
          <input
            type="text"
            className="outline-none border-none bg-transparent"
            placeholder="Electronics"
          />
        </div>
        <div className="md:flex justify-between mt-7">
          <div>
            <h1 className="font-normal text-lg md:font-bold md:text-xl">
              Prices
            </h1>
            <input
              type="text"
              className="outline-none border-none bg-transparent"
              placeholder="N12000"
            />
          </div>
          <div className="w-full my-5 md:w-1/4 pb-8 xl:w-[15%] xl:ml-auto">
            <button className="bg-[#FFD700] w-full  mx-auto px-6 py-4 md:px-4 md:py-2 xl:px-4 xl:py-2 font-normal rounded-xl md:rounded-3xl">
              Make payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyDescMain;
