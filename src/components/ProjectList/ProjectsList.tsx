/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function ProjectList({
  project,
}: {
  project: {
    title: string;
    desc: string;
    pictureLink: string;
    localLink: string;
  };
}) {
  return (
    <div className="flex justify-center m-3">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg  shadow-lg">
        <img
          alt={project.pictureLink}
          className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={project.pictureLink}
        />
        <div className="p-6 flex flex-col justify-start">
          <h1 className=" text-xl font-medium mb-2">{project.title}</h1>
          <p className="text-base mb-4">{project.desc}</p>
          <Link href={`/projects/${project.localLink}`}>
            <button
              className="inline-block px-6 py-2.5 bg-indigo-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
              type="button"
            >
              More details ...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProjectList;
