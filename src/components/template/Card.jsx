import React from "react";
import { FaStar } from "../icons";
const Card = () => {
  return (
    <div className="w-full overflow-x-scroll overflow-y-hidden flex gap-3.5 items-center p-1">
      {[...Array(20)].map((i, ii) => (
        <div
          key={ii}
          className="md:h-64 lg:h-[30vh] h-72 w-32 md:w-40 lg:w-48 relative flex flex-col gap-3 items-center shrink-0 shadow-md shadow-black/10 dark:shadow-black/20 overflow-hidden rounded-md "
        >
          <img
            src="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg"
            alt="product-image"
            className="h-[60%] w-full object-cover"
          />
          <div className="h-[40%] w-full flex flex-col gap-3 px-4 py-1">
            <h2 className="text-md font-bold leading-0">Noodle</h2>
            <span className="text-xs font-medium bg-green-600 px-2 py-1 w-fit flex items-center justify-center gap-1 text-white drop-shadow-md rounded-sm">
              4.5 <FaStar className="text-yellow-300 drop-shadow-md" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
