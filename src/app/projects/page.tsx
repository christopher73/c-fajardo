import ProjectList from "@/components/ProjectList/ProjectsList";
import { allProjects } from "../../../constants";

const projects = allProjects.map((elem, i) =>
  elem.isFeatured === true ? <ProjectList project={elem} key={i} /> : null
);

export default function Projects() {
  const style = {
    fontFamily: "Noto Sans JP",
  };
  return (
    <div className="flex flex-col p-5 items-center justify-center">
      <div
        style={style}
        className="flex flex-row flex-wrap justify-center w-full items-center"
      >
        {projects}
      </div>
    </div>
  );
}
