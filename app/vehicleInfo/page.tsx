import React from "react";
// import Link from "next/link";
import Image from "next/image";
import Navigate from "../components/Navigate/Navigate";
import { carTypeBtn } from "../components/constants/data";

type btnProps = {
  items: {
    id: number;
    desc: string;
    placeHolder: string;
    img?: string;
  };
};
const page = ({ items }: btnProps) => {
  return (
    <section className="w-full">
      <Navigate title="Driver" back="driverPage" next="addImage" />
      <div className="w-11/12 md:w-3/4 mx-auto py-8 shadow-md mt-14 mb-32 border rounded-2xl border-xl">
        <div className="font-semibold bg-[#CCCCCC] my-10 px-2 md:px-5 py-2 bg-opacity-20 text-2xl">
          Vehicle information
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:p-6 gap-6 lg:gap-20">
          {carTypeBtn.map((items) => (
            <div className="w-full" key={items.id}>
              <h2 className="font-semibold text-sm md:text-lg my-2">
                {items.desc}
              </h2>
              <div className="flex justify-between p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
                <div className="flex gap-4 items-center">
                  <Image
                    src={`${items.img}`}
                    className="w-4 h-4"
                    width="50"
                    height="50"
                    alt="truck"
                  />
                  <input
                    type="text"
                    placeholder={items.placeHolder}
                    className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-semibold bg-[#CCCCCC] my-10 px-2 md:px-5 py-2 bg-opacity-20 text-2xl">
          Upload documents
        </div>
        <div className="w-11/12 grid lg:grid-cols-2 xl:p-6 gap-6 lg:gap-20 mx-auto">
          <div className="w-full">
            <h2 className="text-medium font-semibold">Passport</h2>
            <h4 className="">Image size should not be less than 5MB</h4>
            <div className="flex justify-between p-5 bg-[#CCCCCC26] w-full bg-opacity-20 rounded-3xl">
              <div className="flex gap-4 items-center">
                <Image
                  src="/image/la_truck-pickup.png"
                  className="w-4 h-4"
                  width="50"
                  height="50"
                  alt="truck"
                />
                <input
                  type="text"
                  className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-medium font-semibold mb-6">
              Certificate of road worthiness
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
                <input
                  type="text"
                  className="opacity-50 bg-transparent outline-none border-none text-sm font-normal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
