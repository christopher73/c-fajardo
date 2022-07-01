import { useRouter } from "next/router";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { allProjects } from "../../constants";
import Image from "next/image";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Project = () => {
  const router = useRouter();
  const [projectItem, setProjectItem] = useState(allProjects[0]);

  const { project } = router.query;

  useEffect(() => {
    setProjectItem(
      allProjects.find((element) => {
        return element.localLink === project;
      })
    );
  }, [project]);

  return projectItem ? (
    <div className="p-2">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold mt-0 mb-6 ">
            {projectItem.title}
            <a
              className=" text-blue-500 ml-5"
              href={projectItem.gitLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className=" text-blue-500 ml-5"
              href={projectItem.externalLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
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
              options={projectItem.chartPower.options}
            />
          </div>
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
