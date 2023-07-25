import React from "react";
import Navigate from "../components/Navigate/Navigate";
import Image from "next/image";
import { Caladea } from "next/font/google";

const page = () => {
  return (
    <section className="w-11/12 mx-auto my-10">
      <div className="w-full mx-auto">
        <Navigate title="Add image" back="vehicleInfo" next="driverLences" />
        <div className="w-11/12 mx-auto">
          <p className="text-base lg:w-1/3 opacity-50">
            Add a minimum of 3 images, Your first image will be used as your
            cover.
          </p>
        </div>
      </div>
      {/* CAR CONTAINER */}
      <div className="relative w-11/12 h-64 lg:h-96 my-4 mx-auto">
        <Image src="/image/carImg.png" fill alt="carImg" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
        <div className="">
          <div className="bg-[#F4F4F7] rounded-2xl h-32">
            <div className="h-full flex mx-auto justify-center my-auto items-center">
              <Image
                src="/image/group.png"
                width="20"
                height="20"
                className="flex self-center"
                alt="uploadImg"
              />
            </div>
          </div>
          <h2 className="font-semibold text-lg pt-4 pl-2">Front view</h2>
        </div>
        <div className="">
          <div className="bg-[#F4F4F7] rounded-2xl h-32">
            <div className="h-full flex mx-auto justify-center my-auto items-center">
              <Image
                src="/image/group.png"
                width="20"
                height="20"
                className="flex self-center"
                alt="uploadImg"
              />
            </div>
          </div>
          <h2 className="font-semibold text-lg pt-4 pl-2">Back view</h2>
        </div>
        <div className="">
          <div className="bg-[#F4F4F7] rounded-2xl h-32">
            <div className="h-full flex mx-auto justify-center my-auto items-center">
              <Image
                src="/image/group.png"
                width="20"
                height="20"
                className="flex self-center"
                alt="uploadImg"
              />
            </div>
          </div>
          <h2 className="font-semibold text-lg pt-4 pl-2">interior</h2>
        </div>
        <div className="">
          <div className="bg-[#F4F4F7] rounded-2xl h-32">
            <div className="h-full flex mx-auto justify-center my-auto items-center">
              <Image
                src="/image/group.png"
                width="20"
                height="20"
                className="flex self-center"
                alt="uploadImg"
              />
            </div>
          </div>
          <h2 className="font-semibold text-lg pt-4 pl-2">interior</h2>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex my-5 justify-end">
        <button className="bg-[#FFD700] w-48 px-6 bg-opacity-50 py-2 rounded-3xl">
          Next
        </button>
      </div>
    </section>
  );
};

export default page;
