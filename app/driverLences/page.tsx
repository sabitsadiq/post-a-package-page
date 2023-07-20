import Image from "next/image";
import React from "react";
import Navigate from "../components/Navigate/Navigate";

const page = () => {
  return (
    <section className="w-full mx-auto my-16">
      <Navigate title="" back="addImage" next="/" />
      <div className="w-11/12 lg:w-3/5 mt-10 mx-auto pt-7 pb-20 rounded-xl border shadow-xl">
        <div className="md:w-4/5 mx-auto mt-6 px-5">
          <h2 className="font-semibold text-start text-3xl w-fit md:mx-auto">
            Driver&rsquo;s license
          </h2>
          <p className="md:w-96 md:text-center mt-4 mx-auto">
            Lorem ipsum dolor sit amet consectetur. Donec eu leo cursus neque
            rhoncus scelerisque
          </p>
        </div>
        <div className="relative h-72 w-[65%] my-5 mx-auto rounded-xl">
          <Image
            src="/image/upLoadedImg.png"
            className="w-full"
            fill
            alt="upLoadedImg"
          />
        </div>
      </div>
      <div className="w-2/5 mx-auto mt-10 flex justify-center">
        <button className="rounded-3xl w-56 bg-[#FFD700] opacity-50 py-4 px-10">
          Proceed
        </button>
      </div>
    </section>
  );
};

export default page;
