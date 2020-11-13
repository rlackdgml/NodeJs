import "./App.css";
import BackImg from "./0181bc5ff612ef003e6c9bd40a25b35a.jpg";
import BBSMain from "./main/BBSMain";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroudAttachment: "fixed",
    backgroundSize: "100wh 50vh",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>&#127833;REACT BBS 2020&#127833;</h3>
        <p>&#127843;React로 구현하는 BBS Project&#127843;</p>
      </header>
      <BBSMain />
      <footer className="footer">
        <address>CopyRigh &copy; dhdlqkqh2003@naver.com</address>
      </footer>
    </div>
  );
}

export default App;
