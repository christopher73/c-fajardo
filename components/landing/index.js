import React, { useState } from "react";
import { GifBackground } from "../GifBackground";
import Image from "next/image";

export function Landing() {
  const [word, setWord] = useState("");

  const handleClick = (clickedWord) => {
    setWord((s) => (s === clickedWord ? "" : clickedWord));
  };
  const landingPhrase = "family ramen tech NYC knicks sushi code";

  return (
    <div className="flex h-full  flex-col items-center justify-center  ">
      <GifBackground word={word} />
      <div>
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
      <div className=" z-40 flex flex-row items-center flex-wrap w-2/3 justify-center">
        {landingPhrase.split(" ").map((word, index) => (
          <button
            key={index}
            className="text-3xl bg-stone-800 hover:bg-stone-300 text-white hover:text-stone-800 font-bold py-2 px-4 rounded m-2 "
            onClick={() => handleClick(word)}
          >
            #{word}
          </button>
        ))}
      </div>
    </div>
  );
}
