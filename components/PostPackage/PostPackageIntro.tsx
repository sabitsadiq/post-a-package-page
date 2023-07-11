import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostPackageIntro = () => {
  return (
    <section className="flex justify-between pt-4 w-11/12 mx-auto">
      <div className="flex flex-col gap-1">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/image/leftArrowHead.png"
            className="w-2 h-2 opacity-50"
            width="50"
            height="50"
            alt="truck"
          />
          <h2 className="font-bold text-sm lg:text-lg opacity-50">Back</h2>
        </Link>
        <h1 className="font-bold text-sm lg:text-3xl">Post a package</h1>
      </div>
      <div>
        <button className="bg-[#FFD700] rounded-3xl bg-opacity-50 px-8 py-2">
          <span className="font-bold text-2xl flex justify-center text-[#000000]"></span>
          Next
        </button>
      </div>
    </section>
  );
};

export default PostPackageIntro;
