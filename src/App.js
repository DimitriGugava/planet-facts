import "./App.css";
import Main from "./Main/Main";
import data from "./data.json";
function App() {
  return (
    <div className="App">
      {data.map((data) => (
        <Main data={data} />
      ))}
    </div>
  );
}

export default App;
