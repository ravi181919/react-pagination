import React from "react";
import Slider from "../template/Slider";
import Card from "../template/Card";

const Homepage = () => {
  return (
    <div className="lg:w-full md:w-full w-full overflow-hidden flex">
      <div className="w-full h-full flex flex-col ">
        <Slider />
        <div className="pt-5 w-full">
          <h1 className="w-full text-center text-lg font-black py-2 mb-3.5 bg-black/85 dark:bg-white/85 text-white/85 dark:text-black/85 px-4">Foods</h1>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
