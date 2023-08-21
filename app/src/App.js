import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);
  const [ans, setAns] = useState(null);

  const keyPressed = (key) => {
    if (ope === null) {
      setLeft(left * 10 + key);
    } else {
      setRight(right * 10 + key);
    }
  }

  const opeKeyPressed = (key) => {
    setOpe(key);
  }

  const equalKeyPressed = () => {
    if (ope === "+") {
      setAns(left + right);
    } else if (ope === "-") {
      setAns(left - right);
    } else if (ope === "*") {
      setAns(left * right);
    } else if (ope === "/") {
      setAns(left / right);
    }
  }

  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {left}
        {ope === null ? "" : ope}
        {ope === null ? "" : right}

        {ans === null ? "" : " 答え:" + ans}
      </div>
      <div className="input">
        <div className="numbers">
          <Button text="0" onClick={() => { keyPressed(0) }} />
          <Button text="1" onClick={() => { keyPressed(1) }} />
          <Button text="2" onClick={() => { keyPressed(2) }} />
          <Button text="3" onClick={() => { keyPressed(3) }} />
          <Button text="4" onClick={() => { keyPressed(4) }} />
          <Button text="5" onClick={() => { keyPressed(5) }} />
          <Button text="6" onClick={() => { keyPressed(6) }} />
          <Button text="7" onClick={() => { keyPressed(7) }} />
          <Button text="8" onClick={() => { keyPressed(8) }} />
          <Button text="9" onClick={() => { keyPressed(9) }} />
          <Button text="=" onClick={() => { equalKeyPressed() }} />
        </div>
        <div className="operators">
          <Button text="+" onClick={() => { opeKeyPressed("+") }} />
          <Button text="-" onClick={() => { opeKeyPressed("-") }} />
          <Button text="*" onClick={() => { opeKeyPressed("*") }} />
          <Button text="/" onClick={() => { opeKeyPressed("/") }} />
        </div>
      </div>
    </div>
  );
}

export default App;