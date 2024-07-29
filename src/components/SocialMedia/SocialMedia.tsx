import { brandColors } from "@/tools/constants";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export default function SocialMedia() {
  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.375rem" /* 1.5 * 0.25rem (1 rem = 16px) */,
    color: brandColors.black,
    fontWeight: "500",
    lineHeight: "1.25" /* This can be adjusted as needed */,
    margin: "0.5rem" /* 2 * 0.25rem */,
    transition: "all 150ms ease-in-out",
    backgroundColor: brandColors.pink,
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    border: `1.5px solid ${brandColors.black}`,
  };
  return (
    <li className="flex flex-row justify-center">
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="social-media"
        href="https://www.linkedin.com/in/cfajardo112/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="social-media"
        href="https://www.facebook.com/cffr90"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="social-media"
        href="https://github.com/farm16"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="social-media"
        href="mailto: cfajardo112@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        className="social-media"
        href={"/assets/Christopher_Fajardo_resume_2024.pdf"}
      >
        <FontAwesomeIcon icon={faFile} />
      </a>
    </li>
  );
}
