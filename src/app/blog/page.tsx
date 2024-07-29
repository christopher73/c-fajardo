"use client";
import { DarkModeContext } from "@/components/WithDarkMode/WithDarkMode";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Blog() {
  const [news, setNews] = useState<any>([]);
  const { darkMode } = useContext(DarkModeContext);

  const api = "https://hn.algolia.com/api/v1/search?tags=front_page";
  // http://hn.algolia.com/api/v1/search?tags=front_page
  const fetchData = useCallback(async () => {
    if (news.length > 0) return null;
    try {
      const response = await fetch(api);
      const res = await response.json();
      // tslint:disable-next-line: no-console
      setNews([...res.hits]);
    } catch (error) {
      alert(error);
    }
  }, [news.length]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full p-4"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1 className="text-5xl font-bold p-4">Blog</h1>
      <div className="flex justify-center flex-col items-center">
        <div
          className="bg-yellow-100 self-center text-center rounded-lg p-2 text-base text-yellow-700 mb-3 my-10"
          role="alert"
        >
          Sorry, no blog posts available at the moment
          <br /> but you can check the latest news on{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://hn.algolia.com"
            className="p-1 bg-red-700 text-white text-lg"
          >
            HackerNews
          </a>
        </div>
        <div className="flex justify-center flex-col pb-10">
          {news.map((elem: any, i: number) => (
            <div className="flex pt-5" key={i}>
              <a
                className="w-4/5 text-base font-medium text-blue-500 hover:text-blue-800 transition duration-300 ease-in-out underline"
                href={elem.url}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                {elem.title}{" "}
              </a>
              <p className="w-1/5 text-right font-medium text-xs leading-tight uppercase ">
                by : {elem.author}
                <br /> date: {elem.created_at.split("T")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
