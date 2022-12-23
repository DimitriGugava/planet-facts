import "./Option.css";
import PlanetInfo from "./PlanetInfos/PlanetInfo";
const Option = (props) => {
  return (
    <>
      <div className="OptionMainContainer">
        <h2 className="optionsListOverview">OVERVIEW</h2>
        <h2 className="optionsListStructure">Structure</h2>
        <h2 className="optionsListSurface">Surface </h2>
      </div>
      <div className="breakLineForOptionsMob"></div>
      <PlanetInfo data={props.data} />
    </>
  );
};

export default Option;
