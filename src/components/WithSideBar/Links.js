import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Links() {
  return (
    <aside
      // className="w-64  h-full flex flex-col justify-center"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 rounded bg-stone-900">
        <ul className="space-y-5">
          <li>
            <Link
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white
               hover:bg-stone-200 hover:text-stone-900"
              to="/projects"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <span className="ml-3">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white
               hover:bg-stone-200 hover:text-stone-900"
              to="/current-stack"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <span className="ml-3">Stack</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white
               hover:bg-stone-200 hover:text-stone-900"
              to="/blog"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <span className="ml-3">Blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
{
  /* <div className="flex flex-col items-center flex-grow justify-top">
<Link
  className=" text-lg decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
  to="/projects"
>
  Projects
</Link>
<Link
  className=" text-lg decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
  to="/current-stack"
>
  Stack
</Link>
<Link
  className=" text-lg decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
  to="/blog"
>
  Blog
</Link>
{/* <Link
  to="/contact-me"
  id="btn-lets-talk"
  className="btn btn-lg shadow-lg "
>
  Let's talk
</Link> */
}
// </div> */}
