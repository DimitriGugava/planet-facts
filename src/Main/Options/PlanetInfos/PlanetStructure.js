import "./PlanetOverview.css";
import LinkURL from "../../../icons/linkURL.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const PlanetStructure = (props) => {
  return (
    <>
      <img className="planetImage" src={props.data.images.internal} />
      <h1 className="planetTitle">{props.data.name}</h1>
      <a className="planetInfoText">{props.data.structure.content}</a>

      <div className="sourceBox">
        <h2 className="source">
          Source:
          <a
            className="sourceLink"
            target="_blank"
            href={props.data.structure.source}
            rel="canonical"
          >
            Wikipedia
            <img
              src={LinkURL}
              target="_blank"
              href={props.data.structure.source}
              className="linkUrl"
              alt="linkURL"
            />
          </a>
        </h2>
      </div>
    </>
  );
};

export default PlanetStructure;
