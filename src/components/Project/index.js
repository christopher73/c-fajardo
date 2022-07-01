import Chart from "chart.js";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

class Project extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      title: this.props.project.title,
      gitLink: this.props.project.gitLink,
      externalLink: this.props.project.externalLink,
      desc: this.props.project.desc,
      descLong: this.props.project.descLong,
      chartPower: this.props.project.chartPower,
      pictureLink: this.props.project.pictureLink,
    };
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, this.state.chartPower);
  }
  chartRef = React.createRef();
  render() {
    let linkStyle = {
      color: "rgb(2, 115, 115)",
      marginLeft: "20px",
      float: "right",
    };

    return (
      <div style={this.props.style} className="p-2">
        <div className="flex flex-col">
          <div className="flex">
            <div className="col-md-12 m-auto ">
              <h1 className="text-5xl font-bold mt-0 mb-6">
                {this.state.title}
                <a
                  style={linkStyle}
                  href={this.state.gitLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  style={linkStyle}
                  href={this.state.externalLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </h1>
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-center">
            <div className="px-10">
              <p className="text-base ">{this.state.desc}</p>
              {this.state.descLong.map(function (elem, i) {
                return (
                  <p className="text-base " key={i}>
                    {elem}
                  </p>
                );
              })}
            </div>

            <div className="w-max-1/3 p-10">
              <img
                style={{ height: "400px", maxWidth: "100%" }}
                src={this.state.pictureLink}
                alt={this.state.title}
              />
            </div>

            <div className="w-max-1/3 p-10">
              <canvas id="myChart" ref={this.chartRef} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
