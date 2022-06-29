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

  async function getData() {
    if (word !== "") {
      let data = await fetchGiphyAPI(word);
      console.log(data);
      setBlocks(data);
    } else {
      setBlocks([]);
    }
  }

  useEffect(() => {
    getData();
  }, [word]);

  return (
    <div style={styles.container}>
      {blocks.map((elem, i) => (
        <div key={i} alt={elem.title} style={styles.block}>
          <img style={styles.blockImage} src={elem.images.original.url} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    opacity: 0.4,
    // zIndex: -1,
    // position: "absolute",
  },
  block: {
    backgroundColor: "blue",
    width: "33.333%",
    height: "20vh",
    // borderStyle: "solid",
    // borderWidth: 0.5,
    // borderColor: "red",
    // zIndex: -1,
    // position: "absolute",
  },
  blockImage: {
    width: "100%",
    height: "100%",
  },
};
