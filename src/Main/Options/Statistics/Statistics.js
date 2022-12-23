import "./Statistics.css";

const Statistics = (props) => {
  return (
    <div className="planetInfoMainCont">
      <div className="statisticlInfoBox">
        <a className="statisticInfoTitle">ROTATION</a>
        <a className="statitsicNumbers">{props.data.rotation}</a>
      </div>
      <div className="statisticlInfoBox">
        <a className="statisticInfoTitle">REVOLUTION TIME</a>
        <a className="statitsicNumbers">{props.data.revolution}</a>
      </div>
      <div className="statisticlInfoBox">
        <a className="statisticInfoTitle">RADIUS</a>
        <a className="statitsicNumbers">{props.data.radius}</a>
      </div>
      <div className="statisticlInfoBox">
        <a className="statisticInfoTitle">AVERAGE TEMP.</a>
        <a className="statitsicNumbers">{props.data.temperature}</a>
      </div>
    </div>
  );
};

export default Statistics;
