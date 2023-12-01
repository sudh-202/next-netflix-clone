import React from "react";
import Image from "next/image";
import TVimg from "@/styles/tv.png";
import Mobilemg from "@/styles/mobile-0819.jpg";
import webpile from "@/styles/device-pile-in.png";
import Kidsimg from "@/styles/kids.png";
import Footer from "./Footer";
import { FaPlus } from "react-icons/fa6";
import { normalize } from "path";
import FAQ from "./FAQ";

const LoginCard = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-black my-2 px-4 py-10 md:flex-row md:justify-between md:px-52">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold py-4">
            Enjoy on your TV
          </h2>
          <h4 className="text-lg md:text-2xl py-1">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h4>
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2">
          <Image src={TVimg} alt="tv" width={1000} height={400} />
        </div>
      </div>

      <div className="flex flex-col items-center bg-black my-2 px-4 py-10 md:flex-row md:justify-between md:px-52">
        <div className="mt-4 md:mt-0 md:w-1/2">
          <Image src={Mobilemg} alt="tv" width={1000} height={400} />
        </div>
        <div className=" text-center md:text-left md:w-1/2 ">
          <h2 className="text-3xl md:text-5xl font-bold py-4">
            Download your shows to watch offline
          </h2>
          <h4 className="text-lg md:text-2xl py-1">
            Save your favourites easily and always have something to watch.
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center bg-black my-2 px-4 py-10 md:flex-row md:justify-between md:px-52">
        <div className=" text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold py-4">
            Watch everywhere
          </h2>
          <h4 className="text-lg md:text-2xl py-1">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h4>
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <Image src={webpile} alt="tv" width={1000} height={300} />
        </div>
      </div>

      <div className="flex flex-col items-center bg-black my-2 px-4 py-10 md:flex-row md:justify-between md:px-52">
        <div className="text-center md:text-left md:w-1/2">
          <Image src={Kidsimg} alt="tv" width={1200} height={300} />
        </div>
        <div className=" text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold py-4">
            Create profiles for kids
          </h2>
          <h4 className="text-lg md:text-2xl py-1">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h4>
        </div>
      </div>

      <FAQ />
      <Footer />
    </>
  );
};

export default LoginCard;
