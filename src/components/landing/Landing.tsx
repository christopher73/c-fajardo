"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { GifBackground } from "../GifBackground/GifBackground";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";

export function Landing() {
  const [word, setWord] = useState(getRandomWord(programmingWords));
  const { darkMode } = useContext(DarkModeContext);

  const handleClick = (clickedWord: string) => {
    setWord((s) => (s === clickedWord ? "" : clickedWord));
  };
  const landingPhrase = "family ramen tech NYC knicks sushi code";

  return (
    <div
      style={{
        //background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <GifBackground word={word} />
      <div className="flex justify-center">
        <Image
          layout="fixed"
          objectFit="contain"
          src="/assets/img/chris.png"
          width={650}
          height={400}
          quality={100}
          // layout="fixed"

          alt="chris-landing"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {landingPhrase.split(" ").map((word, index) => (
          <button
            key={index}
            className="text-3xl bg-stone-800 hover:bg-stone-300 text-white hover:text-stone-800 font-bold py-2 px-4 m-2 "
            onClick={() => handleClick(word)}
          >
            #{word}
          </button>
        ))}
      </div>
    </div>
  );
}

const programmingWords = [
  "c++",
  "java",
  "javascript",
  "typescript",
  "kernel",
  "sql",
  "database",
  "server",
  "algorithm",
  "data",
  "structure",
  "computer",
  "science",
  "software",
  "engineer",
  "developer",
  "programmer",
  "code",
  "coding",
  "programming",
  "tech",
  "technology",
  "computer",
  "laptop",
  "desktop",
  "monitor",
  "keyboard",
  "github",
  "git",
];

function getRandomWord(words: string[]): string {
  return words[Math.floor(Math.random() * words.length)];
}
