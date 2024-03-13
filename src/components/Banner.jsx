import React from "react";
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className="bg-orange-600 w-full py-[140px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold mt-4">
        <div className="text-2xl md:text-4xl mt-4">Learn With Us!</div>
        <h2 className="text-white text-5xl md:text-7xl  mt-2">Grow With Us!</h2>
        <div className="text-2xl md:text-[50px]  text-white mt-3">
          Learn 
          <ReactTyped
            className="pl-3 text-black text-2xl md:text-[50px]"
            strings={[
              "Web Development",
              "App Development",
              "Game Development",
            ]}
            typeSpeed={60}
            backSpeed={70}
            loop
          />

        </div>
        <button className='bg-black text-white px-14 py-4 rounded text-xl mt-12'>Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
