import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        電卓の表示
      </div>
      <div className="input">
        <div className="numbers">
          {/* ここに数字のボタンや「.」、「=」ボタン */}
        </div>
        <div className="operators">
          {/* ここに「+」、「-」、「*」、「/」ボタン */}
        </div>
      </div>
    </div>
  );
}

export default App;
