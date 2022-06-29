import React from "react";
import { Link } from "react-router-dom";
import Links from "./Links";
import TypedString from "../Typed";
import chris from "../../assets/chris.jpeg";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function SideBar({ darkMode, setDarkMode }) {
  const themeStyles = {
    dark: { backgroundColor: "#121317", color: "#f2f2f2" },
    light: { backgroundColor: "white", color: "#292c35" },
  };
  return (
    <div className="flex flex-col min-h-full justify-top fade-in p-2 bg-white drop-shadow-2xl">
      <div className="flex flex-row justify-between p-2 pt-4">
        <Link to="/">
          <img alt="logo" src="./favicon.ico" />
        </Link>
        <label className="switch">
          <input onClick={() => setDarkMode((s) => !s)} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <img
        className="p-1 bg-stone-900 border max-w-full h-auto rounded"
        src={chris}
        alt="Christopher Fajardo"
      />

      <div className="bg-stone-900 text-lg p-2 text-left text-stone-100 rounded my-1">
        <h1>I’m Chris 👋🏽</h1>
        <h1>
          Software Engineer{" "}
          <span role="img" aria-label="emoji">
            💻
          </span>
        </h1>
      </div>
      <Links />
      <SocialMedia />
      <TypedString />
    </div>
  );
}
