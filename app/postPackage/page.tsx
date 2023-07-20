import React from "react";
import PostPackageIntro from "../components/PostPackage/PostPackageIntro";
import TripInfo from "../components/PostPackage/TripInfo";
const page = () => {
  return (
    <div className="w-full my-10">
      <PostPackageIntro />
      <TripInfo />
    </div>
  );
};

export default page;
