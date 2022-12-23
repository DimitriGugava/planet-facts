import "./Main.css";
import Header from "./Header/Header";
import Option from "./Options/Option";
import { useState } from "react";
const Main = (props) => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollBarHandle = () => {
    return setShowScroll(!showScroll);
  };

  return (
    <>
      <div className="mainContainer">
        <Header
          data={props.data}
          scrollBarHandle={scrollBarHandle}
          showScroll={showScroll}
        ></Header>
        {!showScroll ? (
          <Option data={props.data} showScroll={showScroll}></Option>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Main;
