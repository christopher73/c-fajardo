import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Links() {
  return (
    <aside className="h-full flex flex-col" aria-label="Sidebar">
      <div className="rounded mt-5">
        <ul className="space-y-5 w-full">
          <li>
            <Link
              className="p-2  text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900"
              to="/"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <span className="ml-3">./</span>
            </Link>
          </li>
          <li>
            <Link
              className="p-2 text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900 w-full"
              to="/projects"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <span className="ml-3">./projects</span>
            </Link>
          </li>
          <li>
            <Link
              className="p-2  text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900"
              to="/stack"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <span className="ml-3">./stack</span>
            </Link>
          </li>
          <li>
            <Link
              className="p-2  text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900"
              to="/blog"
            >
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <span className="ml-3">./blog</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
