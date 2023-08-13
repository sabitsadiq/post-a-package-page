import React from "react";

const modal = () => {
  return (
    <div className="w-full h-screen bg-black opacity-75">
      <div className="bg-white rounded-lg w-2/5 mx-auto px-10">
        <button className="px-5 py-4 rounded-lg shadow-lg">Post a trip</button>
        <h2>As a driver</h2>
        <h2 className="my-6">As a package sender</h2>
        <h2>As a traveller</h2>
      </div>
    </div>
  );
};

export default modal;
