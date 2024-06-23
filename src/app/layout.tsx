import { WithDarkModeProvider } from "@/components/WithDarkMode/WithDarkMode";
import { WithSideBar } from "@/components/WithSideBar/WithSideBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { Metadata } from "next";
import "../styles/globals.css";
import "../styles/switch.css";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export const metadata: Metadata = {
  title: "Chris Fajardo",
  description: "Christopher Fajardo's personal website",
  icons: "/favicon.ico",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkModeStyle = {
    dark: { backgroundColor: "#292c35", color: "#f2f2f2" },
    light: { backgroundColor: "#ffffff", color: "#292c35" },
  };
  return (
    <html lang="en">
      <body>
        <WithDarkModeProvider>
          <WithSideBar>{children}</WithSideBar>
        </WithDarkModeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
