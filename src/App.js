import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import { allProjects } from "./data/constants";
import Project from "./components/Project";
import { chris } from "./data/constants";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { WithSideBar } from "./components/WithSideBar/WithSideBar";
import ThemeContext from "./components/WithDarkMode/WithDarkMode";
import ContactMe from "./pages/ContactMe/ContactMe";
import Technologies from "./pages/Technologies/Technologies";
import Projects from "./pages/Projects";

AOS.init({ duration: 1000 });
console.log(chris);

let routes = allProjects.map(function (element) {
  return (
    <Route
      key={element.title}
      exact
      path={element.localLink}
      component={() => {
        const theme = useContext(ThemeContext);
        const stylo = {
          fontFamily: "Noto Sans JP",
          ...theme,
        };
        return <Project stylo={stylo} project={element} />;
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
        <Route exact path="/contact-me" component={ContactMe} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/current-stack" component={Technologies} />
        {routes}
      </WithSideBar>
    </Router>
  );
}

export default App;
