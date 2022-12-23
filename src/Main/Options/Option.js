import "./Option.css";
import PlanetOverview from "./PlanetInfos/PlanetOverview";
import PlanetStructure from "./PlanetInfos/PlanetStructure";
import PlanetSurface from "./PlanetInfos/PlanetSurface";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Statistics from "./Statistics/Statistics";
const Option = (props) => {
  return (
    <>
      <Router>
        <div className="OptionMainContainer">
          <Link to="/theplanets/overview" className="optionsListOverview">
            OVERVIEW
          </Link>
          <Link to="/theplanets/structure" className="optionsListStructure">
            STRUCTURE
          </Link>
          <Link to="/theplanets/surface" className="optionsListSurface">
            SURFACE
          </Link>
        </div>
        <div className="breakLineForOptionsMob"></div>
        <Routes>
          <Route
            path="/theplanets/overview"
            element={<PlanetOverview data={props.data} />}
          />
          <Route
            path="/theplanets/structure"
            element={<PlanetStructure data={props.data} />}
          />
          <Route
            path="/theplanets/surface"
            element={<PlanetSurface data={props.data} />}
          />
        </Routes>

        <Statistics data={props.data} />
      </Router>
    </>
  );
};

export default Option;
