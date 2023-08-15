import "./App.css";
import Wood from "./wood";

// 0. React 엔진 - 데이터변경감지해서 UI그려주는~!
// 1. 실행과정 (index.html) - 싱글페이지어플리케이션(SPA)
// 2. JSX 문법

function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
