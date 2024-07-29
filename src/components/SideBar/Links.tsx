import { brandColors } from "@/tools/constants";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { DarkModeContext } from "../WithDarkMode/WithDarkMode";
import "./styles.css";

export default function Links() {
  const { darkMode } = useContext(DarkModeContext);
  const path = usePathname();

  const pathName = path === "/" ? "home" : path;

  const styles: Record<string, React.CSSProperties> = {
    link: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: brandColors.cream,
    },
    icon: {
      backgroundColor: "black",
      padding: 1,
      borderRadius: 8,
      width: 16,
      height: 16,
      color: brandColors.pink,
    },
    linkText: {
      color: brandColors.black,
    },
  };

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        flex: 1,
      }}
    >
      <li className="py-2 pt-6">
        <Link
          href="/"
          className={`tab-bar-link ${
            path === "/" ? "tab-bar-link-selected" : ""
          }`}
        >
          <FontAwesomeIcon style={styles.icon} icon={faChevronCircleRight} />
          <span className="ml-3">home</span>
        </Link>
      </li>
      <li className="py-2">
        <Link
          href="/projects"
          className={`tab-bar-link ${
            path.includes("projects") ? "tab-bar-link-selected" : ""
          }`}
        >
          <FontAwesomeIcon
            style={styles.icon}
            width={17}
            icon={faChevronCircleRight}
          />
          <span className="ml-3">projects</span>
        </Link>
      </li>
      <li className="py-2">
        <Link
          href="/stack"
          className={`tab-bar-link ${
            path === "/stack" ? "tab-bar-link-selected" : ""
          }`}
        >
          <FontAwesomeIcon
            style={styles.icon}
            width={17}
            icon={faChevronCircleRight}
          />
          <span className="ml-3">stack</span>
        </Link>
      </li>
      <li className="py-2">
        <Link
          href="/blog"
          className={`tab-bar-link ${
            path === "/blog" ? "tab-bar-link-selected" : ""
          }`}
        >
          <FontAwesomeIcon
            style={styles.icon}
            width={17}
            icon={faChevronCircleRight}
          />
          <span className="ml-3">blog</span>
        </Link>
      </li>
    </div>
  );
}
