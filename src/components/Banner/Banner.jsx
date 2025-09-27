import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-purple-600 text-white p-6 rounded-lg shadow">
        <h2 className="text-lg">In-Progress</h2>
        <p className="text-3xl font-bold">0</p>
      </div>
      <div className="bg-green-600 text-white p-6 rounded-lg shadow">
        <h2 className="text-lg">Resolved</h2>
        <p className="text-3xl font-bold">0</p>
      </div>
    </div>
  );
};

export default Banner;
