import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "../icons";

const Slider = () => {
  return (
    <div className="md:h-56 lg:h-60 w-full h-64 dark:bg-black/85 bg-white/85 relative">
      <div className="h-full w-full flex overflow-hidd relative">
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="foodImage-one"
          className="w-full h-full object-cover  shrink-0  absolute -translate-x-fu"
        />
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="foodImage-two"
          className="w-full h-full object-cover  shrink-0 absolute -translate-x-[00%]"
        />
        <img
          src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="foodImage-three"
          className="w-full h-full object-cover  shrink-0 absolute -translate-x-[00%]"
        />
        <img
          src="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg"
          alt="foodImage-four"
          className="w-full h-full object-cover  shrink-0 absolute -translate-x-[00%]"
        />
      </div>
      <div className="absolute z-[10] bottom-1.5 left-1/2 -translate-x-1/2  w-fit h-fit">
        {[...Array(4)].map((_, index) => (
          <NavLink key={index} className="ml-1.5 cursor-pointer">
            <span className="bg-white/85 shadow drop-shadow-md h-2.5 w-2.5 rounded-full inline-block">
              {_}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 flex w-full justify-between items-center px-5">
        <button className="rounded-full h-10.5 w-10.5 bg-black/65 shadow border-[4px] flex items-center justify-center text-3xl text-white drop-shadow-md border-white">
          <FaAngleLeft />
        </button>
        <button className="rounded-full h-10.5 w-10.5 bg-black/65 shadow border-[4px] flex items-center justify-center text-3xl text-white drop-shadow-md border-white">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
