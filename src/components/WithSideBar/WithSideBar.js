import React, { useState } from "react";
import SideBar from "./SideBar";
import WithDarkMode from "../WithDarkMode/WithDarkMode";

import "../WithDarkMode/darkMode.css";
import "./style.css";

export function WithSideBar(props) {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeStyle = {
    dark: { backgroundColor: "#121317", color: "#f2f2f2" },
    light: { backgroundColor: "#fff", color: "#292c35" },
  };
  return (
    <WithDarkMode.Provider
      value={darkMode ? darkModeStyle.dark : darkModeStyle.light}
    >
      <div className="flex max-h-screen min-h-screen">
        <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
        {props.children}
      </div>
    </WithDarkMode.Provider>
  );
}
