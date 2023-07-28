import React from "react";
import Link from "next/link";
import Image from "next/image";
type NavigateProps = {
  title: string;
  back: string;
  next: string;
};

const Navigate = (props: NavigateProps) => {
  return (
    <section className="flex justify-between pt-4 w-11/12 mx-auto">
      <div className="flex flex-col gap-1">
        <Link href={`/${props.back}`} className="flex gap-2 items-center">
          <Image
            src="/image/leftArrowHead.png"
            className="w-2 h-2 opacity-50"
            width="50"
            height="50"
            alt="truck"
          />
          <h2 className="font-semibold text-sm lg:text-lg opacity-50">Back</h2>
        </Link>
        <h1 className="font-semibold text-sm lg:text-2xl">{props.title}</h1>
      </div>
      <Link href={`/${props.next}`}>
        <button className="bg-[#FFD700] rounded-3xl bg-opacity-50 px-8 py-2">
          <span className="font-bold text-2xl flex justify-center text-[#000000]"></span>
          Next
        </button>
      </Link>
    </section>
  );
};

export default Navigate;
