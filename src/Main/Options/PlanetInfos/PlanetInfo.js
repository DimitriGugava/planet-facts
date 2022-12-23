import "./PlanetInfo.css";
import LinkURL from "../../../icons/linkURL.svg";

const PlanetInfo = (props) => {
  return (
    <>
      <img className="planetImage" />
      <h1 className="planetTitle">{props.data.name}</h1>
      <a className="planetInfoText">{props.data.overview.content}</a>

      <div className="sourceBox">
        <h2 className="source">
          Source:{" "}
          <a
            className="sourceLink"
            target="_blank"
            href={props.data.overview.source}
            rel="canonical"
          >
            {props.data.overview.source}
          </a>{" "}
          <img
            src={LinkURL}
            target="_blank"
            href={props.data.overview.source}
            className="linkUrl"
            alt="linkURL"
          />
        </h2>
      </div>

      <div className="planetInfoMainCont">
        <div className="statisticlInfoBox">
          <a className="statisticInfoTitle">ROTATION</a>
          <a className="statitsicNumbers">58.6 days</a>
        </div>
        <div className="statisticlInfoBox">
          <a className="statisticInfoTitle">ROTATION</a>
          <a className="statitsicNumbers">58.6 days</a>
        </div>
        <div className="statisticlInfoBox">
          <a className="statisticInfoTitle">ROTATION</a>
          <a className="statitsicNumbers">58.6 days</a>
        </div>
        <div className="statisticlInfoBox">
          <a className="statisticInfoTitle">ROTATION</a>
          <a className="statitsicNumbers">58.6 days</a>
        </div>
      </div>
    </>
  );
};

export default PlanetInfo;
