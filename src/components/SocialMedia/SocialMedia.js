import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "./cfajardo_resume.pdf";
export default function SocialMedia() {
  return (
    <div className="flex flex-row w-full justify-around mt-auto">
      <a
        className="inline-block p-1.5 text-lg text-white
         font-medium leading-tight 
         uppercase rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/cfajardo112/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="inline-block p-1.5 text-lg text-white
         font-medium leading-tight 
         uppercase rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/cffr90"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="inline-block p-1.5 text-lg text-white
         font-medium leading-tight 
         uppercase rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/christopher73"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="inline-block p-1.5 text-lg text-white
         font-medium leading-tight 
         uppercase rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto: cfajardo112@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        className="inline-block p-1.5 text-lg text-white
         font-medium leading-tight 
         uppercase rounded shadow-md hover:bg-stone-200 hover:text-stone-900 bg-stone-900 m-2 transition duration-150 ease-in-out"
        rel="noopener noreferrer"
        target="_blank"
        href={resume}
      >
        <FontAwesomeIcon icon={faFile} />
      </a>
    </div>
  );
}
