import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const navbar:React.FC=()=>{
    const {toggleTheme}=useDarkMode();
    return(
     <nav className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-full px-6 py-3 shadow-md flex justify-between items-center">
      <h1 className="font-bold text-xl">Live Component Playground </h1>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">Components</a>
        <button className="hover:underline" onClick={toggleTheme}>Theme</button>
      </div>
    </nav>
)
};
export default navbar;