import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [image, setImage] = React.useState("images/icon-hamburger.svg");

  function handleClick() {
    let image;
    if (!menu) {
      image = "images/icon-close.svg";
    } else {
      image = "images/icon-hamburger.svg";
    }

    setImage(image);
    setMenu((prevValue) => !prevValue);
  }

  return (
    <>
      <div
        className={`${
          menu
            ? "fixed h-screen w-screen bg-gradient-to-b from-black to-transparent opacity-80 mt-16 z-30"
            : "hidden"
        }`}
      ></div>
      <header className="h-16 px-28 max-sm:px-10 z-30 bg-white fixed right-0 left-0">
        <nav className="flex items-center justify-between h-full">
          <img src="images/logo.svg" alt="logo" />
          <motion.ul
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ duration: 0.4 }}
            className={`${
              menu
                ? "absolute right-0 left-0 rounded-lg mx-auto top-28 bg-white h-[400px] w-10/12 z-50 flex flex-col gap-0 items-center justify-center"
                : "flex gap-7 h-full"
            } max-[900px]:${menu ? "flex" : "hidden"}`}
          >
            <li
              className={`text-grayish-blue-neutral leading-[64px] ${
                menu ? "border-none" : ""
              } hover:border-b-4 hover:border-lime-green-primary hover:text-dark-blue-primary cursor-pointer`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`text-grayish-blue-neutral leading-[64px] ${
                menu ? " border-none" : ""
              } hover:border-b-4 hover:border-lime-green-primary hover:text-dark-blue-primary cursor-pointer`}
            >
              About
            </li>
            <li
              className={`text-grayish-blue-neutral leading-[64px] ${
                menu ? " border-none" : ""
              } hover:border-b-4 hover:border-lime-green-primary hover:text-dark-blue-primary cursor-pointer`}
            >
              Contact
            </li>
            <li
              className={`text-grayish-blue-neutral leading-[64px] ${
                menu ? " border-none" : ""
              } hover:border-b-4 hover:border-lime-green-primary hover:text-dark-blue-primary cursor-pointer`}
            >
              Blog
            </li>
            <li
              className={`text-grayish-blue-neutral leading-[64px] ${
                menu ? " border-none" : ""
              } hover:border-b-4 hover:border-lime-green-primary hover:text-dark-blue-primary cursor-pointer`}
            >
              Careers
            </li>
          </motion.ul>
          <button className="w-fit hover:opacity-70 transition-transform hover:scale-105 max-[900px]:hidden">
            Request Invite
          </button>
          <img
            onClick={handleClick}
            src={image}
            className="hidden max-[900px]:block cursor-pointer"
            alt="menu"
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
