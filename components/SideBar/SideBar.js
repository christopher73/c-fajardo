import React, { useContext } from "react";
import Links from "./Links";
import TypedString from "../Typed";
import SocialMedia from "../SocialMedia/SocialMedia";
import ThemeContext from "../WithDarkMode/WithDarkMode";
import Image from "next/image";
import Link from "next/link";

export default function SideBar({ darkMode, setDarkMode }) {
  const { backgroundColor } = useContext(ThemeContext);
  const styles = {
    root: {
      fontFamily: "Noto Sans JP",
      backgroundColor,
    },
  };
  return (
    <div
      style={{ ...styles.root }}
      className="flex flex-col h-screen justify-top fade-in p-2 w-max-1/6"
    >
      <div className="flex flex-row justify-between p-2 pt-4">
        <Link href="/">
          <Image alt="logo" src="/favicon.ico" width={50} height={50} />
        </Link>
        <label className="switch">
          <input onClick={() => setDarkMode((s) => !s)} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <Links />
      <SocialMedia />
      <TypedString />
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
