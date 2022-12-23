import "./Main.css";
import Header from "./Header/Header";
import Option from "./Options/Option";
const Main = (props) => {
  return (
    <>
      <div className="mainContainer">
        <Header data={props.data}></Header>
        <Option data={props.data}></Option>
      </div>
    </>
  );
};

export default Main;
