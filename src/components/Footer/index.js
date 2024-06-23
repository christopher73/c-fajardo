import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useContext } from "react";
import ThemeContext from "../DarkMode/ThemeContext";

export default function Footer() {
  const theme = useContext(ThemeContext);
  const style = {
    fontFamily: "Noto Sans JP",
    ...theme,
  };
  let iconStyle = {
    color: "#027373",
    fontSize: "2em",
    margin: "7px",
  };
  return (
    <footer style={style} className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center p-3 m-auto">
            <Link href="https://www.linkedin.com/in/cffr90/">
              <FontAwesomeIcon style={iconStyle} icon={faLinkedin} />
            </Link>
            <Link href="https://www.facebook.com/cffr90">
              <FontAwesomeIcon style={iconStyle} icon={faFacebook} />
            </Link>
            <Link href="https://github.com/christopher73">
              <FontAwesomeIcon style={iconStyle} icon={faGithub} />
            </Link>
            <Link href="mailto: christopher.fajardo73@gmail.com">
              <FontAwesomeIcon style={iconStyle} icon={faEnvelope} />
            </Link>
            <p className="h5 text-secondary" to="/">
              Christopher © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
