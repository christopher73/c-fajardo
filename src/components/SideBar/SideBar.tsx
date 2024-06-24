"use client";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useContext } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import TypedString from "../TypedAnimation/TypedAnimation";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";
import Links from "./Links";

const handleClick = () => {
  const sidebar = document.getElementById("default-sidebar");
  if (sidebar && sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.remove("-translate-x-full");
  } else {
    sidebar?.classList.add("-translate-x-full");
  }
};

const Button = (props) => {
  const styles: { root: CSSProperties } = {
    root: {
      position: "fixed",
      top: "1rem",
      left: "1rem",
      padding: "0.5rem",
      borderRadius: "0.5rem",
    },
  };
  return (
    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      className="p-2 text-stone-100 bg-stone-900 rounded-md shadow-lg bg-gray-50 dark:bg-gray-800 dark:text-stone-100 fixed top-4 left-4"
      onClick={handleClick}
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
  );
};

export default function SideBar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const styles = {
    root: {
      fontFamily: "Noto Sans JP",
    },
    ul: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-stone-900 shadow-lg transform"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto p-2 bg-gray-50 dark:bg-gray-800">
          <ul className="font-medium" style={styles.ul}>
            <li className="flex items-center justify-end sm:hidden">
              <button onClick={handleClick}>
                <FontAwesomeIcon
                  width={32}
                  height={32}
                  color="white"
                  icon={faClose}
                />
              </button>
            </li>
            <li className="flex items-center justify-between p-2">
              <Link href="/">
                <Image alt="logo" src="/favicon.ico" width={50} height={50} />
              </Link>
              <label className="switch">
                <input onClick={() => setDarkMode(!darkMode)} type="checkbox" />
                <span className="slider round"></span>
              </label>
            </li>
            <Links />
            <SocialMedia />
            <TypedString />
          </ul>
        </div>
      </aside>
      <Button />
    </div>
  );
}
{
  /**
   * @todo add below
   * <img
   *     className="p-1 bg-stone-900 border max-w-full h-auto rounded"
   *     src={chris}
   *     alt="Christopher Fajardo"
   *   />
   *
   *   <div className="bg-stone-900 text-lg p-2 text-left text-stone-100 rounded my-1">
   *     <h1>I’m Chris 👋🏽</h1>
   *     <h1>
   *       Software Engineer{" "}
   *       <span role="img" aria-label="emoji">
   *         💻
   *       </span>
   *     </h1>
   *   </div>
   *  */
}
