import React, { useCallback } from "react";
import { FaPlus } from "react-icons/fa6";
import { normalize } from "path";
import { useState } from "react";



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col items-center bg-black my-2 py-10 md:flex-col md:justify-between ">
      <h2 className="text-3xl md:text-6xl font-bold py-4 justify-center items-center  md:justify-center md:items-center my-10 ">
        Frequently Asked Questions{" "}
      </h2>

      <div className="flex flex-row items-center gap-2 cursor-pointer  bg-[#414041] justify-between w-1/2 px-8 py-8 my-1">
        <h2 className="text-white md:text-4xl  font-normal transition ">
          What is Netflix
        </h2>
        <FaPlus className="md:text-[62px] font-light transition" />
      </div>
      <div className="flex flex-row items-center gap-2 cursor-pointer  bg-[#414041] justify-between w-1/2 px-8 py-8 my-1">
        <p className="text-white md:text-4xl font-normal">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want, without a single ad – all for one low monthly
          price. There's always something new to discover, and new TV shows and
          movies are added every week!
        </p>
      </div>

      <div className="flex flex-row items-center gap-2 cursor-pointer  bg-[#414041] justify-between w-1/2 md:p-8 p-2 my-1">
        <h2 className="text-white md:text-4xl font-normal">
          How much does Netflix Costs?
        </h2>
        <FaPlus className="font-normal md:text-[62px]" />
      </div>

      <div className="flex flex-row items-center gap-2 cursor-pointer  bg-[#414041] justify-between w-1/2 px-8 py-8 my-1">
        <h2 className="text-white md:text-4xl font-normal">Where I can watch?</h2>
        <FaPlus className="font-normal md:text-[62px]" />
      </div>

      <div className="flex flex-row items-center gap-2 cursor-pointer  bg-[#414041] justify-between w-1/2 px-8 py-8 my-1">
        <h2 className="text-white md:text-4xl font-normal">How do I cancel?</h2>
        <FaPlus className="font-normal md:text-[62px]" />
      </div>

      <div className="flex flex-row items-center gap-2 cursor-pointer  bg-[#414041] justify-between w-1/2 px-8 py-8 my-1">
        <h2 className="text-white md:text-4xl font-normal">
          How can I watch on Netflix?
        </h2>
        <FaPlus className="font-normal md:text-[62px]" />
      </div>
    </div>
  );
};

export default FAQ;
