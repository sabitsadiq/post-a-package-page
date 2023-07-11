import Image from "next/image";
import Link from "next/link";
import React from "react";

const PackageSenderMain = () => {
  return (
    <section className="w-11/12 mx-auto">
      <Link
        href="/"
        className="flex gap-2 items-center md:w-11/12 md:mx-auto  mt-8"
      >
        <Image
          src="/image/leftArrowHead.png"
          className="w-2 h-2 opacity-50"
          width="50"
          height="50"
          alt="truck"
        />
        <h2 className="font-bold text-sm lg:text-lg opacity-50">Back</h2>
      </Link>
      <div className="flex flex-col md:flex-row justify-between md:items-center md:w-11/12 md:mx-auto">
        <div className="">
          <h1 className="font-normal md:font-semibold text-lg md:text-3xl xl:text-l">
            Add image
          </h1>
          <p className="font-normal text-sm md:text-xl opacity-50 md:w-3/4">
            Add a minimum of 3 images, Your first image will be used as your
            cover.
          </p>
        </div>
        <div className="flex gap-8 items-center justify-between">
          <h1 className="font-normal md:font-semibold text-lg xl:text-xl 2xl-texl pt-2">
            Electronics
          </h1>
          <Image
            src="/image/icon-park_down.png"
            className="w-4 h-4"
            width="50"
            height="50"
            alt="truck"
          />
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 w-full md:w-11/12 mx-auto mt-6">
        <div className="col-span-2">
          <Image
            className="w-full h-auto mx-auto object-cover"
            src="/image/Sender/television.png"
            width="100"
            height="100"
            alt="television"
          />
        </div>
        <div className="col-span-1 w-full h-3/4 md:h-1/2 bg-[#F4F4F7] rounded-lg">
          <div className="w-1/2 flex h-full mx-auto justify-center self-center">
            <Image
              className="w-fit flex self-center"
              src="/image/Sender/add.png"
              width="100"
              height="100"
              alt="add"
            />
          </div>
          <p className="font-normal md:font-semibold text-lg xl:text-xl 2xl-texl pt-2">
            Front view
          </p>
        </div>
        <div className="col-span-1 w-full h-3/4 md:h-1/2 bg-[#F4F4F7] rounded-lg">
          <div className="w-1/2 flex h-full mx-auto justify-center self-center">
            <Image
              className="w-fit flex self-center"
              src="/image/Sender/add.png"
              width="100"
              height="100"
              alt="add"
            />
          </div>
          <p className="font-normal md:font-semibold text-lg xl:text-xl pt-2">
            Back view
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:w-11/12 md:mx-auto">
        <div className="w-3/4 py-4 md:py-0">
          <h1 className="font-semibold text-xl opacity-90">Description</h1>
          <p className="font-normal text-sm opacity-50">
            Add a package description...
          </p>
        </div>
        <div className="w-full md:w-1/4 pb-8 xl:w-[15%] xl:ml-auto">
          <button className="bg-[#FFD700] w-full  mx-auto px-6 py-4 md:px-4 md:py-2 xl:px-4 xl:py-2 font-normal rounded-xl md:rounded-3xl md:bg-opacity-25">
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackageSenderMain;
