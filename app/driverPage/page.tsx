import React from "react";
import Link from "next/link";
import Image from "next/image";
import { button } from "../components/constants/data";
const driver = () => {
  return (
    <div className="w-full py-4">
      <Link
        href="/"
        className="flex gap-2 items-center w-11/12 xl:w-4/5 mt-7 mx-auto"
      >
        <Image
          src="/image/leftArrowHead.png"
          className="w-2 h-2"
          width="50"
          height="50"
          alt="truck"
        />
        <h2 className="font-bold text-sm lg:text-lg opacity-50">Back</h2>
      </Link>
      <div className="rounded-2xl border shadow-xl w-[93%] md:w-3/5 lg:w-1/2 my-10 xl:w-1/2 mx-auto py-14">
        <div className="w-10/12 md:mt-6 mx-auto md:w-3/5">
          <h1 className="font-semibold text-center text-2xl">Drivers</h1>
          <p className="font-normal opacity-50 text-sm text-center">
            Lorem ipsum dolor sit amet consectetur. Donec eu leo cursus neque
            rhoncus scelerisque
          </p>
        </div>
        <h1 className="font-semibold text-lg text-center mt-4">
          Verification process
        </h1>
        <div className="mt-7 w-72 xl:w-96 mx-auto">
          <Link href="/vehicleInfo">
            {button.map((item) => (
              <button
                key={item.id}
                className="rounded-full text-[#000000] text-opacity-50 bg-opacity-50 hover:text-opacity-100  font-semibold justify-between flex bg-[#FFD700] my-6 w-full px-3 py-4"
              >
                <div>{item.title}</div>
                <div className="flex gap-8">
                  <span className="flex justify-end">{item.desc}</span>
                  <span className="mr-2 ">&rarr;</span>
                </div>
              </button>
            ))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default driver;
