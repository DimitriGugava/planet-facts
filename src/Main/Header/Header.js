import "./Header.css";
import scrollbar from "../../icons/scrollbar.svg";
import arrow from "../../icons/arrow.svg";
const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <h1 className="headerTitle">THE PLANETS</h1>
        <img src={scrollbar} alt="scroll bar" />
      </div>

      <div className="headerBreakLine"></div>
      <div className="planetListContainer">
        <div className="planetlistBox">
          <div className="planetColor"></div>
          <h1 className="planetName">MERCURY</h1>
          <img src={arrow} className="arrow" alt="arrowright" />
        </div>
      </div>
    </>
  );
};

export default Header;
