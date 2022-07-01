import React, { useEffect, sty, useState } from "react";
import axios from "axios";
const LIMIT = 15;
const fetchGiphyAPI = (word) =>
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=wqmUbKlFSgVu8OkDO8C3uIJyW7baVW48&q=${word}&limit=${LIMIT.toString()}&offset=0&rating=g&lang=en`
    )
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      alert(error);
      return [];
    });

export const GifBackground = ({ word }) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    async function getData() {
      if (word !== "") {
        let data = await fetchGiphyAPI(word);
        console.log(data);
        setBlocks(data);
      } else {
        setBlocks([]);
      }
    }
    getData();
  }, [word]);

  return (
    <div style={styles.container}>
      {blocks.map((elem, i) => (
        <div key={i} style={styles.block}>
          <img
            alt={elem.title}
            style={styles.blockImage}
            src={elem.images.original.url}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    opacity: 0.4,
    zIndex: -1,
    // marginLeft: "auto",
    height: "100hv",
    position: "absolute",
  },
  block: {
    display: "flex",
    // alignItems: "flex-end",
    //backgroundColor: "blue",
    width: 200,
    height: 200,
  },
  blockImage: {
    width: "100%",
    height: "100%",
  },
};
