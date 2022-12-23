import "./Header.css";
import scrollbar from "../../icons/scrollbar.svg";
import arrow from "../../icons/arrow.svg";
const Header = (props) => {
  return (
    <>
      <div className="headerContainer">
        <h1 className="headerTitle">THE PLANETS</h1>
        <img
          src={scrollbar}
          alt="scroll bar"
          className="scroll"
          onClick={props.scrollBarHandle}
        />
      </div>
      <div className="headerBreakLine"></div>
      {props.showScroll ? (
        <div className="planetListContainer">
          <div className="planetlistBox">
            <div className="planetColor"></div>
            <h1 className="planetName">MERCURY</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
          <div className="headerBreakLine2"></div>
          <div className="planetlistBox">
            <div className="planetColorVenys"></div>
            <h1 className="planetName"> VENUS</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
          <div className="headerBreakLine2"></div>
          <div className="planetlistBox">
            <div className="planetColorEarth"></div>
            <h1 className="planetName">EARTH</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
          <div className="headerBreakLine2"></div>
          <div className="planetlistBox">
            <div className="planetColorMars"></div>
            <h1 className="planetName">MARS</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
          <div className="headerBreakLine2"></div>
          <div className="planetlistBox">
            <div className="planetColorJupiter"></div>
            <h1 className="planetName">JUPITER</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
          <div className="headerBreakLine2"></div>
          <div className="planetlistBox">
            <div className="planetColorSaturn"></div>
            <h1 className="planetName">SATURN</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
          <div className="headerBreakLine2"></div>
          <div className="planetlistBox">
            <div className="planetColorUranus"></div>
            <h1 className="planetName">URANUS</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
          <div className="headerBreakLine2"></div>
          <div className="planetlistBox">
            <div className="planetColorNeptune"></div>
            <h1 className="planetName">NEPTUNE</h1>
            <img src={arrow} className="arrow" alt="arrowright" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
