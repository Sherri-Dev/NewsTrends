import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
export default function ToggleMode({}) {
  const [pos, setPos] = useState("");
  const toggleBtn = () => {
    setPos(pos === "" ? "translate-y-8" : "");
    document.body.classList.toggle("dark");
    document.body.classList.toggle(`bg-black/95`);
  };
  return (
    <div className="fixed top-1/2 right-3 bg-blue-600 px-4 py-2 rounded-full dark:bg-white transition-colors duration-300">
      <div className="flex justify-center items-center gap-2 flex-col ">
        <FaSun className="dark:text-black transition-colors duration-300" />
        <div
          title="Toggle Dark Mode"
          id="toggle"
          className={`w-[16px] h-12 rounded-2xl relative bg-blue-900 cursor-pointer dark:bg-black`}
          onClick={toggleBtn}
        >
          <span
            className={`${pos} w-[14px] h-[14px] bg-gray-50 rounded-full absolute top-[1px] left-[1px] transition-all duration-300 dark:bg-white`}
          ></span>
        </div>
        <FaMoon className="dark:text-black transition-colors duration-300" />
      </div>
    </div>
  );
}
