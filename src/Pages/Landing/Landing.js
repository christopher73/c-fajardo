import React, { useState } from "react";
import { GifBackground } from "../../components/GifBackground";

export default function Landing() {
  const [word, setWord] = useState("");

  const handleClick = (clickedWord) => {
    setWord((s) => (s === clickedWord ? "" : clickedWord));
  };
  const landingPhrase = "family ramen tech NYC knicks sushi code";
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center">
        <GifBackground word={word} />
        <div className="flex flex-wrap justify-center">
          <img
            className="p-1 bg-stone-800 border max-w-full h-auto rounded"
            src="./assets/img/chrisPort.png"
            alt="chrisPort"
          />
        </div>

        <div className="flex flex-row items-center flex-wrap w-2/3 justify-center">
          {landingPhrase.split(" ").map((word) => (
            <button
              className="text-3xl bg-stone-800 hover:bg-stone-300 text-white hover:text-stone-800 font-bold py-2 px-4 rounded m-2 "
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
