import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSunny, IoMdArrowDropdown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { LuSunMoon } from "react-icons/lu";
import { motion } from "motion/react"
const Navbar = () => {
  const [userName, setUserName] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const links = [
    {
      linkName: "My Profile",
      icon: <FaRegUserCircle />,
      linkURL: "/my-profile",
    },
    { linkName: "Orders", icon: <FaBoxOpen />, linkURL: "/orders" },
    { linkName: "Wishist", icon: <FaRegHeart />, linkURL: "/wishlist" },
    { linkName: "Rewards", icon: <FaGift />, linkURL: "/rewards" },
    { linkName: "Notification", icon: <FaBell />, linkURL: "/notification" },
  ];

  const theme = () => {
    const themecheck = document.documentElement.classList;
    if (darkTheme === false) {
      themecheck.remove("light");
      themecheck.add("dark");
    } else {
      themecheck.remove("dark");
      themecheck.add("light");
    }
    setDarkTheme((prev) => !prev);
  };
  console.log(darkTheme);

  return (
    <div className="w-full h-[14vh] shadow">
      <div className="w-full h-full flex items-center justify-between px-5">
        <div className="w-[15%]  drop-shadow-sm ">
          <img
            src="./src/assets/webpageImages/logo5.png"
            alt="seven_nine_logo"
            className="h-[10vh] w-[6vw]  drop-shadow rounded-full"
          />
        </div>
        <div className="w-[35%] h-[7vh] overflow-hidden flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 py-2 placeholder:text-sm text-sm h-full w-full border-[1.5px] border-black/85 dark:border-white/20  outline-none rounded-l-2xl  "
          />
          <span className="px-6 h-full flex items-center text-white justify-center rounded-r-2xl dark:bg-white/20 bg-black/85 ">
            <FaSearch />
          </span>
        </div>
        {/* Drop down */}
        <div
          onMouseEnter={() => {
            setDropdownOpen((prev) => !prev), setUserName((prev) => !prev);
          }}
          onMouseLeave={() => {
            setDropdownOpen((prev) => !prev), setUserName((prev) => !prev);
          }}
          className="relative top-0 left-0 h-full flex items-center"
        >
          <div className="flex items-center justify-center gap-5 py-2 px-4 hover:border-[1px] hover:border-black hover:dark:border-white  hover:bg-black/10 hover:dark:bg-white/10  rounded-md ">
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold">
                <FaRegUserCircle />
              </span>
              <span className="text-md font-medium">Login</span>
            </div>
            <span
              className={`duration-200 ${
                isDropdownOpen ? "rotate-180" : " "
              } mt-1`}
            >
              <IoMdArrowDropdown />
            </span>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-16 left-0 dark:bg-white/85 bg-black/85 dark:text-black/85 text-white/85 rounded-md h-fit w-[20vw]">
              <div className="py-2 px-2">
                {links.map((link, linkIndex) => (
                  <NavLink
                    to={`${link.linkURL}`}
                    key={linkIndex}
                    className="flex items-center capitalize hover:bg-red-500 leading-none duration-200 rounded-md hover:text-white justify-start gap-2 py-2.5 px-4 whitespace-nowrap"
                  >
                    <span className="text-sm leading-none">{link.icon}</span>
                    <span className="font-medium text-sm leading-none">
                      {link.linkName}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Cart */}
        <div className="py-2 px-4 relative hover:border-[1px] hover:border-black hover:dark:border-white  hover:bg-black/10 hover:dark:bg-white/10 rounded-md ">
          <div className="flex items-center justify-center gap-4 relative">
            <span className="font-black text-lg">
              <FiShoppingCart />
            </span>
            <span className="font-medium ">Cart</span>
            <div className="h-[1.5vw] absolute -right-5 -top-2.5 w-[1.5vw] rounded-full flex items-center justify-center dark:bg-white/85 bg-black/85 dark:text-black/85 text-white/85">
              <span className="rounded-full text-xs font-medium ">10</span>
            </div>
          </div>
        </div>
        {/* Theme */}
        <div
          onClick={() => theme()}
          className="shadow-sm pl-5 dark:shadow-white/85 shadow-black/85 p-[2px] rounded-full flex items-center justify-center"
        >
          <span className="">
          {darkTheme ? (
              <motion.div
                initial={{ x: 0, color: "#000" }}
                animate={{ x: -15, rotate: 360, color: "#fff" }}
                transition={{
                  ease: "easeIn",
                  duration: 0.2,
                }}
                className=""
              >
                <LuSunMoon className={`font-bold text-sm`} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ x: -15, color: "#fff" }}
                animate={{ x: 0, rotate: -360, color: "#000" }}
                transition={{
                  ease: "easeOut",
                  duration: 0.2,
                }}
                className=""
              >
                <IoIosSunny className={`font-bold text-sm`} />
              </motion.div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
