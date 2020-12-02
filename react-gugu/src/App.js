import { useState } from "react";
import "./App.css";
import GuguInput from "./main/GuguInput";
import GuguList from "./main/GuguList";
import GuguList2 from "./main/GuguList2";

function App() {
  const divStyle = {
    display: "inline-block",
    width: "30%",
    margin: "10px",
    border: "1px solid yellow ",
    float: "left",
  };
  const [number, setNumber] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <GuguInput setNumberFunc={setNumber} />
        <div style={{ width: "80%", margin: "30px auto", display: "flex" }}>
          <div style={divStyle}>
            <GuguList number={number} />
          </div>
          <div style={divStyle}>
            <GuguList2 number={number} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
