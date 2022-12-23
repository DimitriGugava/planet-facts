import "./PlanetOverview.css";
import LinkURL from "../../../icons/linkURL.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const PlanetSurface = (props) => {
  return (
    <>
      <img className="planetImage" src={props.data.images.internal} />
      <img
        className="planetImage"
        src={props.data.images.geology}
        style={{
          position: "absolute",
          marginTop: "80px",
          marginLeft: "-242px",
        }}
      />
      <h1 className="planetTitle">{props.data.name}</h1>
      <a className="planetInfoText">{props.data.geology.content}</a>

      <div className="sourceBox">
        <h2 className="source">
          Source:
          <a
            className="sourceLink"
            target="_blank"
            href={props.data.geology.source}
            rel="canonical"
          >
            Wikipedia
            <img
              src={LinkURL}
              target="_blank"
              href={props.data.geology.source}
              className="linkUrl"
              alt="linkURL"
            />
          </a>
        </h2>
      </div>
    </>
  );
};

export default PlanetSurface;
