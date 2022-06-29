import React, { useContext, useState } from "react";
import ThemeContext from "../../components/WithDarkMode/WithDarkMode";
import { GifBackground } from "../../components/GifBackground";

export default function Landing() {
  const [word, setWord] = useState("");
  const theme = useContext(ThemeContext);
  const style = {
    fontFamily: "Noto Sans JP",
    ...theme,
  };
  const handleClick = (clickedWord) => {
    setWord((s) => (s === clickedWord ? "" : clickedWord));
  };
  const landingPhrase = "ramen tech NYC knicks kids sushi";
  return (
    <div
      style={{ ...style }}
      className="flex w-full flex-col items-center justify-center"
    >
      <GifBackground word={word} />
      <div className="flex flex-col items-center absolute">
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
