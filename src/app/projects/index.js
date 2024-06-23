import React, { useContext } from "react";
import ThemeContext from "../../components/WithDarkMode/WithDarkMode";
import ProjectList from "../../components/ProjectList/ProjectsList";
import { allProjects } from "../../constants";

const projects = allProjects.map((elem, i) =>
  elem.isFeatured === true ? <ProjectList project={elem} key={i} /> : null
);

export default function Projects() {
  const theme = useContext(ThemeContext);
  const style = {
    fontFamily: "Noto Sans JP",
    ...theme,
  };
  return (
    <div className="flex flex-col p-5">
      <div style={style} className="flex flex-row flex-wrap justify-center">
        {projects}
      </div>
    </div>
  );
}
