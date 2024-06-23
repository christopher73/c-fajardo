"use client";

import { createContext, useState } from "react";
export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {},
});

type WithDarkModeProviderProps = {
  children?: React.ReactNode;
};

export const WithDarkModeProvider = ({
  children,
}: WithDarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
