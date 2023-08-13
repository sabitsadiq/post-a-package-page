"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillFolderFill } from "react-icons/bs";

const PackageSenderMain = () => {
  const [image, setImage] = useState<any>();
  const [fileName, setFileName] = useState<string>("No selected file");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      setImage(URL.createObjectURL(files[0]));
    }
  };

  return (
    <section className="w-11/12 mx-auto">
      <Link
        href="/postPackage"
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
          <p className="font-normal text-sm md:text-lg opacity-50 md:w-3/4">
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
      <div className="w-full md:w-11/12 mx-auto mt-14 h-full">
        <div className="relative w-full flex flex-col mx-auto justify-center self-center  h-80 bg-[rgb(244,244,247)] rounded-3xl">
          {image ? (
            <form className="">
              <label
                htmlFor="file-input"
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <span className="w-full rounded-3xl flex flex-col self-center mx-auto justify-center">
                  <Image
                    className="w-4/5 rounded-3xl flex mx-auto items-center"
                    src={image}
                    fill
                    alt={fileName}
                  />
                </span>
              </label>
              <input
                type="file"
                accept="image"
                id="file-input"
                className="input-field cursor-pointer"
                onChange={handleFileChange}
                hidden
              />
            </form>
          ) : (
            <Image
              className="w-[3%] flex self-center"
              src="/image/Sender/add.png"
              width="50"
              height="50"
              alt="add"
            />
          )}
          <span className="text-center font-normal md:font-semibold text-lg xl:text-xl 2xl-texl">
            Front view
          </span>
        </div>
        {/* UPLOADING FRONT VIEW */}
        <div className="flex flex-col md:flex-row gap-8 mt-7">
          <div className="row-span-1 w-full h-3/4 md:h-1/2 ">
            <div className="w-full flex h-48 xl:h-64 mx-auto justify-center self-center bg-[#F4F4F7] rounded-3xl">
              <form className="">
                <label
                  htmlFor="file-input"
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <Image
                    className="cursor-pointer flex self-center"
                    src="/image/Sender/add.png"
                    width="35"
                    height="35"
                    alt="add"
                  />
                </label>
                <input
                  type="file"
                  accept="image"
                  id="file-input"
                  className="input-field cursor-pointer"
                  onChange={handleFileChange}
                  hidden
                />
              </form>
            </div>
            <p className="font-normal md:font-semibold text-lg xl:text-xl 2xl-texl mt-5">
              Front view
            </p>
          </div>
          {/* UPLOADING BACK VIEW */}
          <div className="row-span-1 w-full h-3/4 md:h-1/2">
            <div className="w-full h-48 xl:h-64 bg-[#F4F4F7] rounded-3xl flex  mx-auto justify-center self-center">
              <form className="">
                <label
                  htmlFor="file-input"
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <Image
                    className="cursor-pointer flex self-center"
                    src="/image/Sender/add.png"
                    width="35"
                    height="35"
                    alt="add"
                  />
                </label>
                <input
                  type="file"
                  accept="image"
                  id="file-input"
                  className="input-field cursor-pointer"
                  onChange={handleFileChange}
                  hidden
                />
              </form>
            </div>
            <p className="font-normal md:font-semibold text-lg xl:text-xl mt-5">
              Back view
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-11/12 mx-auto mt-8 md:mt-20 mb-24">
        <label className="font-semibold text-xl opacity-90">Description</label>
        <div className="flex flex-col md:flex-row md:w-full md:mx-auto mt-7 md:mt-14">
          <div className="w-full md:w-3/4 h-48 py-4 md:py-0">
            <textarea
              className="bg-[#F4F4F7] p-5 w-full h-full md:w-3/4 h-42 block rounded-xl outline-none
            border-none font-normal text-sm opacity-50"
              placeholder=" Add a package description..."
            ></textarea>
          </div>
          <div className="w-full mt-7 md:w-1/4 pb-8 xl:w-[15%] xl:ml-auto">
            <Link href="/journeyDesc">
              <button className="bg-[#FFD700] w-full cursor-pointer  mx-auto px-6 py-4 md:px-4 md:py-2 xl:px-4 xl:py-2 font-normal rounded-xl md:rounded-3xl md:bg-opacity-25">
                NEXT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSenderMain;
