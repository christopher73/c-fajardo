"use client";

import { DarkModeContext } from "@/components/WithDarkMode/WithDarkMode";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { allProjects } from "../../../../constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const Project = ({ params }: { params: { projectId: string } }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { projectId } = params;

  console.log("project >>>", projectId);

  const projectItem =
    allProjects.find((elem) => elem.localLink === projectId) || allProjects[0];

  return projectItem ? (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        padding: "20px",
      }}
    >
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold mt-0 mb-6 ">
          {projectItem.title}
          <Link
            className=" text-blue-500 ml-5"
            href={projectItem.gitLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            className=" text-blue-500 ml-5"
            href={projectItem.externalLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </Link>
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        <div className="px-10">
          <p className="text-base ">{projectItem.desc}</p>
          {projectItem.descLong.map(function (elem, i) {
            return (
              <p className="text-base " key={i}>
                {elem}
              </p>
            );
          })}
        </div>

        <div className="w-max-1/3 p-10">
          <Image
            layout="fixed"
            width={300}
            height={300}
            src={projectItem.pictureLink}
            alt={projectItem.title}
          />
        </div>

        <div className="w-max-1/3 p-10">
          <Pie
            data={projectItem.chartPower.data}
            // @ts-ignore
            options={projectItem.chartPower.options}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Loading...
    </div>
  );
};

export default Project;
