import { useState } from "react";
import Button from "./components/Button";

function App() {

  //コンポーネント内
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);
  const [ans, setAns] = useState(null);

  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {left}
        {ope === null ? "" : ope}
        {ope === null ? "" : right}
      </div>
      <div className="input">
        <div className="numbers">
          <Button text="0" />
        </div>
        <div className="operators">
          {/* ここに「+」、「-」、「*」、「/」ボタン */}
        </div>
      </div>
    </div>
  );
}

export default App;
