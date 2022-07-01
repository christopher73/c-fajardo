import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import Landing from "./pages/Landing/Landing";
import Blog from "./pages/Blog/Blog";
import ContactMe from "./pages/ContactMe/ContactMe";
import Stack from "./pages/Stack/Stack";
import Projects from "./pages/Projects/Projects";
import Project from "./components/Project";

import { WithSideBar } from "./components/WithSideBar/WithSideBar";
import ThemeContext from "./components/WithDarkMode/WithDarkMode";
import { chris, allProjects } from "./data/constants";

AOS.init({ duration: 1000 });
console.log(chris);

let projectsRoutes = allProjects.map(function (element) {
  return (
    <Route
      key={element.title}
      exact
      path={element.localLink}
      component={() => {
        const theme = useContext(ThemeContext);
        const style = {
          fontFamily: "Noto Sans JP",
          ...theme,
        };
        return <Project style={style} project={element} />;
      }}
    />
  );
});

function App() {
  return (
    <Router>
      <WithSideBar>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact_me" component={ContactMe} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/stack" component={Stack} />
        {projectsRoutes}
      </WithSideBar>
    </Router>
  );
}

export default App;
