import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";

const LIMIT = 15;

type GifBackgroundProps = {
  word: string;
};
export const GifBackground = (props: GifBackgroundProps) => {
  const { word } = props;
  const { darkMode } = useContext(DarkModeContext);

  const fetchGiphyAPI = async (word: string) => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=wqmUbKlFSgVu8OkDO8C3uIJyW7baVW48&q=${word}&limit=${LIMIT}&offset=0&rating=g&lang=en`
    );
    const { data } = await res.json();
    return data;
  };

  const [blocks, setBlocks] = useState<Gifs>([]);

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

  console.log(">>>", blocks[0]);

  // add oppacity to the background
  const css: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    height: "100%",

    // top: 0,
    // left: 0,
    zIndex: -1,
    background: darkMode ? "#000" : "#fff",
    opacity: 0.5,
  };

  return (
    <div style={css}>
      {blocks.map((elem, i) => {
        if (!elem.images.original.url) return null;
        return (
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
        );
      })}
    </div>
  );
};

type Sizes = {
  height?: string;
  width?: string;
  size?: string;
  url?: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
};
type Gif = {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    original: Sizes;
    downsized: Sizes;
    downsized_large: Sizes;
    downsized_medium: Sizes;
    downsized_small: Sizes;
    downsized_still: Sizes;
    fixed_height: Sizes;
    fixed_height_downsampled: Sizes;
    fixed_height_small: Sizes;
    fixed_height_small_still: Sizes;
    fixed_height_still: Sizes;
    fixed_width: Sizes;
    fixed_width_downsampled: Sizes;
    fixed_width_small: Sizes;
    fixed_width_small_still: Sizes;
    fixed_width_still: Sizes;
    looping: Sizes;
    original_still: Sizes;
    original_mp4: Sizes;
    preview: Sizes;
    preview_gif: Sizes;
    preview_webp: Sizes;
    "480w_still": Sizes;
  };
  user: {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
  };
  analytics_response_payload: string;
  analytics: {
    onload: { url: string };
    onclick: { url: string };
    onsent: { url: string };
  };
  alt_text: string;
};
type Gifs = Gif[];
