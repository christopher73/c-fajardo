"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { GifBackground } from "../GifBackground/GifBackground";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";
import "./styles.css";

export function Landing() {
  const [word, setWord] = useState(getRandomWord(programmingWords));
  const { darkMode } = useContext(DarkModeContext);

  const handleClick = (clickedWord: string) => {
    setWord((s) => (s === clickedWord ? "" : clickedWord));
  };
  const landingPhrase = "family ramen tech NYC knicks sushi code";

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <GifBackground word={word} />
      <div className="main">
        <div className="main-image">
          <Image
            layout="fixed"
            objectFit="contain"
            src="/assets/img/animated_me.jpg"
            width={250}
            height={200}
            quality={100}
            alt="chris-landing"
            className="mx-4 shadow-lg my-4"
          />
        </div>
        <div className="main-title">
          <h1 className="main-title-text">
            Hi, my name is <span id="chris">Chris</span> 👋🏽
            <br />
            <span>I am a human who loves to code.</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center w-8/12">
          {landingPhrase.split(" ").map((word, index) => (
            <button
              key={index}
              className="hash-tag-button text-2xl font-bold p-2 m-2"
              onClick={() => handleClick(word)}
            >
              #{word}
            </button>
          ))}
        </div>
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
