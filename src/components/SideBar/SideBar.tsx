"use client";
import { brandColors } from "@/tools/constants";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useContext, useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";
import Links from "./Links";
import "./styles.css";

export default function SideBar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const styles: Record<string, CSSProperties> = {
    root: {
      fontFamily: "Noto Sans JP",
    },
    ul: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    li: {
      color: brandColors.black,
    },
    button: {
      backgroundColor: brandColors.pink,
      border: `2.5px solid ${brandColors.black}`,
    },
  };

  // get route from the current page

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-full text-white
                    fixed h-screen transition-all 
                    duration-300 z-10 
                    ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        <div className="with-stripes overflow-y-auto p-2">
          <ul className="cream-background font-medium" style={styles.ul}>
            <li className={`flex items-center justify-between p-2`}>
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
            {/* <TypedString /> */}
            <li className="flex items-center justify-center py-4">
              <a
                href="https://github.com/farm16/c-fajardo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-100 underline hover:text-stone-200 text-sm"
                style={styles.li}
              >
                handcrafted with ❤️ + 🍜 + NextJS
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Main content */}
      <div className={`flex-1 p-4 ${isOpen ? "ml-64" : "ml-0"} absolute`}>
        {/* Button to toggle sidebar */}
        <div className="ml-auto">
          <button
            style={styles.button}
            className="text-white font-bold py-2 px-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Toggle icon based on isOpen state */}
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={brandColors.black}
              >
                <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={brandColors.black}
              >
                <path strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
