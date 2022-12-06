import React, {useState, useEffect} from "react";
import BoardView from "./components/Board";
import "./main.scss";
import "./styles.scss";

function App() {

  const [color, setColor] = useState('#57407c')

  const colorHandler = (color) => {setColor(color)}

  useEffect(() => {
    document.body.style.backgroundColor = color},[color]
  )

  return (
    <div className="app">
      <BoardView />
      {/* <footer className="footer">
        <p className="footer__elements">Design by <a href="https://www.behance.net/romaincousin" target="_balnk">Romain Cousin</a></p>
        <p className="footer__elements">Algorithm by <a href="https://github.com/IvanVergiliev/2048-react" target="_balnk">Ivan Vergiliev</a></p>
      </footer> */}
      <div className="color">
      <button onClick={() => {colorHandler('#57407c')}} className="btn">P</button>
      <button onClick={() => {colorHandler('#1d75d9')}} className="btn btn2">B</button>
      <button onClick={() => {colorHandler('rgb(224, 224, 215)')}} className="btn btn3">W</button>
      <button onClick={() => {colorHandler('rgb(38, 38, 38)')}} className="btn btn4">D</button>
      </div>
    </div>
  );
}

export default App;
