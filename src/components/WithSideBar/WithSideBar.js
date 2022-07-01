import React, { useState } from "react";
import SideBar from "./SideBar";
import WithDarkMode from "../WithDarkMode/WithDarkMode";
import { useLocation } from "react-router-dom";

import "../WithDarkMode/darkMode.css";

export function WithSideBar(props) {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeStyle = {
    dark: { backgroundColor: "#292c35", color: "#f2f2f2" },
    light: { backgroundColor: "#ffffff", color: "#292c35" },
  };
  let location = useLocation();

  return (
    <WithDarkMode.Provider
      value={darkMode ? { ...darkModeStyle.dark } : { ...darkModeStyle.light }}
    >
      <div
        style={
          darkMode ? { ...darkModeStyle.dark } : { ...darkModeStyle.light }
        }
        className="flex flex-row"
      >
        <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col w-full">
          <h1 className="text-5xl font-bold mt-0 mb-6">
            {`.${location.pathname}`}
          </h1>
          {props.children}
        </div>
      </div>
    </WithDarkMode.Provider>
  );
}
