import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBell, FaBoxOpen, FaRegHeart, FaRegUserCircle, FaSearch, FaGift, IoIosSunny, IoMdArrowDropdown, IoMdClose, IoMdMenu, FiShoppingCart, LuSunMoon,} from '../icons'
import { motion } from "motion/react";

const Navbar = () => {

  
  const [userName, setUserName] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    {linkName: "My Profile",icon: <FaRegUserCircle />,linkURL: "/my-profile",},
    { linkName: "Orders", icon: <FaBoxOpen />, linkURL: "/orders" },
    { linkName: "Wishlist", icon: <FaRegHeart />, linkURL: "/wishlist" },
    { linkName: "Rewards", icon: <FaGift />, linkURL: "/rewards" },
    { linkName: "Notification", icon: <FaBell />, linkURL: "/notification" },
  ];

  const theme = () => {
    const themeCheck = document.documentElement.classList;
    if (!darkTheme) {
      themeCheck.remove("light");
      themeCheck.add("dark");
    } else {
      themeCheck.remove("dark");
      themeCheck.add("light");
    }
    setDarkTheme((prev) => !prev);
  };

  return (
    <div className="w-full shadow">
      <div className="w-full h-[12vh] flex items-center justify-between px-4 lg:px-5">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./src/assets/webpageImages/logo5.png"
            alt="seven_nine_logo"
            className="h-[8vh] lg:h-[10vh] lg:w-[6vw] w-[12vw] rounded-full"
          />
        </div>

        {/* Search Bar - Responsive */}
        <div className="hidden md:flex lg:w-[35%] w-[40%] h-[7vh]">
          <input
            type="text"
            placeholder="Search"
            className="pl-4 py-2 text-sm w-full border-[1.5px] border-black/85 dark:border-white/20 outline-none rounded-l-2xl"
          />
          <span className="lg:px-4 px-2 flex items-center justify-center text-white bg-black/85 dark:bg-white/20 rounded-r-2xl">
            <FaSearch />
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Navbar Items */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Drop down */}
          <div
            onMouseEnter={() => {
              setDropdownOpen(true);
              // setUserName(true);
            }}
            onMouseLeave={() => {
              setDropdownOpen(false);
              // setUserName(false);
            }}
            className="relative flex items-center px-4 hover:border hover:rounded-md"
          >
            <div className="flex items-center gap-2 py-2">
              <FaRegUserCircle className="text-lg" />
              <span className="text-md font-medium">Login</span>
              <IoMdArrowDropdown
                className={`duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-10 bg-transparent left-0 rounded-md h-fit w-[15rem] shadow-md overflow-hidden">
                <div className="relative top-4 left-0 z-[1] bg-black/85 dark:bg-white/85 text-white dark:text-black h-fit w-full p-2 pb-6 rounded-md">
                  {links.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.linkURL}
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-red-500 rounded-md hover:text-white font-medium"
                    >
                      {link.icon}
                      {link.linkName}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <div className="hidden lg:flex items-center px-4 py-2 hover:border hover:rounded-md relative">
            <FiShoppingCart className="text-lg" />
            <span className="ml-2 font-medium">Cart</span>
            <div className="absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center bg-black/85 dark:bg-white/85 text-white dark:text-black rounded-full text-xs">
              10
            </div>
          </div>

          {/* Theme Toggle */}
          <div
            onClick={theme}
            className="hidden lg:flex p-2 drop-shadow-md duration-200 rounded-full shadow-md dark:shadow-black/85 shadow-black/20"
          >
            {darkTheme ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ ease: "easeIn", duration: 0.2 }}
              >
                <LuSunMoon className="text-sm" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 360 }}
                animate={{ rotate: -360 }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              >
                <IoIosSunny className="text-sm text-yellow-500" />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Only visible on small screens) */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 justify-start h-screen bg-white dark:bg-black shadow-md py-4">
          <div className="w-full px-4 flex items-center h-[7vh] overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 py-2 text-sm w-full border-[1.5px] border-black/85 dark:border-white/20 outline-none rounded-l-md"
            />
            <span className="px-3 py-3 bg-black text-white dark:bg-white dark:text-black rounded-r-md">
              <FaSearch />
            </span>
          </div>

          {/* Mobile Menu Links */}
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.linkURL}
              className={`flex items-center justify-start w-full px-5 gap-2 text-lg hover:text-red-500`}
            >
              {link.icon} {link.linkName}
            </NavLink>
          ))}

          {/* Cart (Only in Mobile) */}
          <div className="w-full px-5 ">
            <div className="flex items-center gap-2 relative">
              <FiShoppingCart className="text-lg" />
              <span className="ml-2 font-medium">Cart</span>
              <span className="absolute -top-2 left-18 w-5 h-5 flex items-center justify-center bg-black/85 dark:bg-white/85 text-white dark:text-black rounded-full text-xs">
                10
              </span>
            </div>
          </div>

          {/* Theme Toggle (Only in Mobile) */}
          <div onClick={theme} className="p-2 rounded-full shadow-md">
            {darkTheme ? (
              <LuSunMoon className="text-sm" />
            ) : (
              <IoIosSunny className="text-sm" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
