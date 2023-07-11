import PostPackageIntro from "@/components/PostPackage/PostPackageIntro";
import TripInfo from "@/components/PostPackage/TripInfo";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full">
      <div className="w-11/12 md:w-1/2 grid grid-cols-3 md:grid-flow-row gap-3 md:gap-4 h-8 mx-auto  text-white">
        <Link
          className="bg-gray-700 mt-4 opacity-50 rounded-lg px-4 flex self-center text-white py-2"
          href="/postPackage"
        >
          postPackage
        </Link>
        <Link
          className="bg-gray-700 mt-4 opacity-50 rounded-lg px-4 flex self-center text-white py-2"
          href="/journeyDesc"
        >
          journeydesc
        </Link>
        <Link
          className="bg-gray-700 opacity-50 rounded-lg px-4 flex self-center mt-4 text-white py-2"
          href="/packagesenderinfo"
        >
          packagesenderinfo
        </Link>
      </div>
    </div>
  );
}
