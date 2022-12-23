import { useState } from "react";
import "./App.css";
import Main from "./Main/Main";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {data.map((data, index) => {
        if (data.name === "Mercury") return <Main data={data} />;
      })}
    </div>
  );
}

export default App;
