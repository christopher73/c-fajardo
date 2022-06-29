import React, { useContext } from "react";
import ThemeContext from "../../components/WithDarkMode/WithDarkMode";
import ProjectList from "../../components/ProjectList";
import { allProjects } from "../../data/constants";
import "./style.css";

const projectDivs = allProjects.map((elem, i) =>
  elem.isFeatured === true ? <ProjectList project={elem} key={i} /> : null
);

export default function Projects() {
  const theme = useContext(ThemeContext);
  const stylo = {
    fontFamily: "Noto Sans JP",
    ...theme,
  };
  return (
    <div style={stylo} className="landing-project">
      {projectDivs}
    </div>
  );
}

//OLD CODE
// import SlideShow from "../../components/SlideShow/SlideShow";
// import video from "../../assets/changes.mp4";
// const shortid = require("shortid");
// import TypedString from "../../components/Typed";
// import SocialMedia from "../../components/SocialMedia/SocialMedia";
// useEffect(() => {
//   if (showDiv) {
//     document.body.style.overflow = "unset";
//   } else {
//     document.body.style.overflow = "hidden";
//   }
// });
/* <video
autoPlay
muted
onEnded={() => {
localStorage.setItem("showDiv", true);
setShowDiv(true);
}}
className='video'
>
<source src={video} type='video/mp4' />
</video>
{console.log(stylo)} */
