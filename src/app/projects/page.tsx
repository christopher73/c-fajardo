"use client";
import ProjectList from "@/components/ProjectList/ProjectsList";
import { DarkModeContext } from "@/components/WithDarkMode/WithDarkMode";
import { useContext } from "react";
import { allProjects } from "../../../constants";

const projects = allProjects.map((elem, i) =>
  elem.isFeatured === true ? <ProjectList project={elem} key={i} /> : null
);

export default function Projects() {
  const { darkMode } = useContext(DarkModeContext);

  const style = {
    fontFamily: "Noto Sans JP",
    background: darkMode ? "#000" : "#fff",
  };
  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full p-4"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1 className="text-5xl font-bold p-4">Projects</h1>
      <div
        style={style}
        className="flex flex-row flex-wrap justify-center w-full items-center"
      >
        {projects}
      </div>
    </div>
  );
}
