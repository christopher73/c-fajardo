"use client";
import { useContext } from "react";
import SideBar from "../SideBar/SideBar";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";

export function WithSideBar({ children }: { children: React.ReactNode }) {
  const { darkMode } = useContext(DarkModeContext);

  const styles = {
    // allow to sidebar to on the left side of the screen and the content on the right side
    root: {
      display: "flex",
      flexDirection: "row",
    },
    children: {
      width: "100%",
    },
  };

  return (
    <div
      className={`flex ${darkMode ? "bg-stone-900 text-white" : "bg-white"}`}
    >
      <SideBar />
      <div
        className="sm:ml-64"
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
}
