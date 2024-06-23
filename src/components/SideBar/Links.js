import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Links() {
  return (
    <aside className="h-full flex flex-col" aria-label="Sidebar">
      <a className="rounded mt-5">
        <ul className="space-y-5 w-full">
          <li>
            <Link href="/">
              <a
                className="flex flex-row p-2  text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900"
              >
                <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
                <span className="ml-3">./</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className="flex flex-row p-2  text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900"
              >
                <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
                <span className="ml-3">./projects</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stack">
              <a
                className="flex flex-row p-2  text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900"
              >
                <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
                <span className="ml-3">./stack</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                className="flex flex-row p-2  text-base font-normal  rounded-lg
               hover:bg-stone-200 hover:text-stone-900"
              >
                <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
                <span className="ml-3">./blog</span>
              </a>
            </Link>
          </li>
        </ul>
      </a>
    </aside>
  );
}
