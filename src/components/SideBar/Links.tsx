import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";

export default function Links() {
  const { darkMode } = useContext(DarkModeContext);

  const linkClassName =
    "flex flex-row p-2 text-base font-normal hover:bg-stone-200 hover:text-stone-900 text-stone-100";

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        flex: 1,
      }}
    >
      <li className="py-2 pt-6">
        <Link
          href="/"
          className="flex flex-row p-2 text-base font-normal text-stone-100 hover:bg-stone-200 hover:text-stone-900"
        >
          <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
          <span className="ml-3">./</span>
        </Link>
      </li>
      <li className="py-2">
        <Link
          href="/projects"
          className="flex flex-row p-2 text-base font-normal text-stone-100 hover:bg-stone-200 hover:text-stone-900"
        >
          <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
          <span className="ml-3">./projects</span>
        </Link>
      </li>
      <li className="py-2">
        <Link
          href="/stack"
          className="flex flex-row p-2 text-base font-normal text-stone-100 hover:bg-stone-200 hover:text-stone-900"
        >
          <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
          <span className="ml-3">./stack</span>
        </Link>
      </li>
      <li className="py-2">
        <Link
          href="/blog"
          className="flex flex-row p-2 text-base font-normal text-stone-100 hover:bg-stone-200 hover:text-stone-900"
        >
          <FontAwesomeIcon width={17} icon={faChevronCircleRight} />
          <span className="ml-3">./blog</span>
        </Link>
      </li>
    </div>
  );
}
