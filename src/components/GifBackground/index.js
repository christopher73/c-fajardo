import React, { useEffect, useState } from "react";
import Image from "next/image";

const LIMIT = 15;

export const GifBackground = ({ word }) => {
  const fetchGiphyAPI = async (word) => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=wqmUbKlFSgVu8OkDO8C3uIJyW7baVW48&q=${word}&limit=${LIMIT.toString()}&offset=0&rating=g&lang=en`
    );
    const { data } = await res.json();
    return data;
  };

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    async function getData() {
      if (word !== "") {
        let data = await fetchGiphyAPI(word);
        setBlocks(data);
      } else {
        setBlocks([]);
      }
    }
    getData();
  }, [word]);

  return (
    <div className="flex flex-wrap items-start justify-center opacity-40 absolute">
      {blocks.map((elem, i) => (
        <Image
          key={i}
          alt={elem.title}
          src={elem.images.original.url}
          layout="fixed"
          height={250}
          width={250}
          objectFit="cover"
          quality={100}
        />
      ))}
    </div>
  );
};
