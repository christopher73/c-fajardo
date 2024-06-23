import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMedia() {
  return (
    <li className="flex flex-row justify-center">
      <a
        className="inline-block p-1.5 text-white
         font-medium leading-tight 
          rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/cfajardo112/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="inline-block p-1.5 text-white
         font-medium leading-tight 
          rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/cffr90"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="inline-block p-1.5 text-white
         font-medium leading-tight 
          rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/farm16"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="inline-block p-1.5 text-white
         font-medium leading-tight 
          rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto: cfajardo112@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className="inline-block p-1.5 text-white
         font-medium leading-tight 
          rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href={"/assets/Christopher_Fajardo_resume_2024.pdf"}
      >
        <FontAwesomeIcon icon={faFile} />
      </a>
    </li>
  );
}
