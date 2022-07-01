import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import WithDarkMode from "../components/WithDarkMode/WithDarkMode";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/switch.css";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const darkModeStyle = {
    dark: { backgroundColor: "#292c35", color: "#f2f2f2" },
    light: { backgroundColor: "#ffffff", color: "#292c35" },
  };
  return (
    <WithDarkMode.Provider
      value={darkMode ? { ...darkModeStyle.dark } : { ...darkModeStyle.light }}
    >
      <Head>
        <title>Christopher F.</title>
        <meta name="description" content="Christopher Fajardo Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={
          darkMode ? { ...darkModeStyle.dark } : { ...darkModeStyle.light }
        }
        className="flex flex-row"
      >
        <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col h-screen flex-1 ">
          <div>
            <h1 className="text-5xl font-bold mt-0 mb-6">
              {`.${router.asPath}`}
            </h1>
          </div>
          <div className="h-full ">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </WithDarkMode.Provider>
  );
}

export default MyApp;
