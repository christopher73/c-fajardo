"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import TypedString from "../TypedAnimation/TypedAnimation";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";
import Links from "./Links";

export default function SideBar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const styles = {
    root: {
      fontFamily: "Noto Sans JP",
    },
  };
  // when clicked, the sidebar will slide out from the left
  // when clicked again, the sidebar will slide back in to the left

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-stone-900 shadow-lg transform"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center justify-between">
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
