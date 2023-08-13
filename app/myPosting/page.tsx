"use client";
import React, { useEffect, useState } from "react";
import { BiDotsVertical } from "react-icons/bi";
import Number from "../components/DropMenu/TableDropdown";
const page = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [handleModal, setHandleModal] = useState([
    {
      location: "Abuja - Lagos",
      type: "sending package",
      id: "WEnEJ786",
      status: "Review",
      modalOpen: false,
    },
    {
      location: "Minna - Abuja",
      type: "sending package",
      id: "WEdEJ786",
      status: "posted",
      modalOpen: false,
    },
    {
      location: "Benue - Kogi",
      type: "sending package",
      id: "WErEJ786",
      status: "closed",
      modalOpen: false,
    },
    {
      location: "Kwara - Lagos",
      type: "sending package",
      id: "WEaEJ786",
      status: "booked",
      modalOpen: false,
    },
    {
      location: "Kwara - Lagos",
      type: "sending package",
      id: "WEbEJ786",
      status: "booked",
      modalOpen: false,
    },
    {
      location: "Osun - Ekiti",
      type: "sending package",
      id: "WEcEJ786",
      status: "closed",
      modalOpen: false,
    },
    {
      location: "Ekiti - Ibadan",
      type: "sending package",
      id: "WEgEJ786",
      status: "closed",
      modalOpen: false,
    },
  ]);
  const btnColor: any = {
    review: "#99E918C9",
    posted: "#FFD700",
    closed: "#FF5631",
    booked: "#08E06C",
  };
  const toggledropDown = (id: string) => {
    setHandleModal((prevValue) =>
      prevValue.map((obj) =>
        obj.id === id
          ? { ...obj, modalOpen: !obj.modalOpen }
          : { ...obj, modalOpen: false }
      )
    );
  };

  useEffect(() => console.log(handleModal), [handleModal]);
  return (
    <div className="w-full p-6">
      <div className="rounded-xl px-3 py-10 shadow-md my-10 lg:w-4/5 mx-auto">
        <h1 className="px-6 font-semibold text-xl leading-6">My postings</h1>
        <div className="">
          <table className="table-auto w-full text-[#0F0400] ">
            <thead className="text-base leading-6 font-bold">
              <tr className="border-red-600">
                <th className="px-6 py-3 text-left  tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left  tracking-wider">Type</th>
                <th className="px-6 py-3 text-left tracking-wider">ID</th>
                <th className="px-6 py-3 text-left tracking-wider">Status</th>
                <th className="px-6 py-3 text-left tracking-wider flex justify-end">
                  Menu
                </th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm leading-5 my-10">
              {handleModal?.map((obj) => {
                return (
                  <tr className="" key={obj.id}>
                    <td className="px-6 py-2 whitespace-nowrap">
                      {obj.location}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap leading-5 text-[#61748D]">
                      {obj.type}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap leading-6">
                      {obj.id}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      <button
                        className={`bg-[${
                          btnColor[obj.status.toLowerCase()]
                        }] opacity-80 rounded-3xl px-5 py-2`}
                      >
                        {obj.status}
                      </button>
                    </td>
                    <td className="flex justify-end px-6 py-2 whitespace-nowrap relative">
                      <BiDotsVertical
                        size={17}
                        className="z-10 mr-5 cursor-pointer "
                        onClick={() => toggledropDown(obj.id)}
                      />
                      {obj.modalOpen && <Number />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
