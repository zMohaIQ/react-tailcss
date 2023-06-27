import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sunt
            iste nulla id perferendis, doloribus dolorum inventore esse quam
            assumenda voluptatibus odio molestias repellat hic commodi cum
            obcaecati magnam sit.
          </p>
          <button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-110 hover:text-white duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
