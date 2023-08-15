import React, { useState } from "react";
import Sub from "./Sub";

// let number = 1; // 상태 값 아님

export default function App() {
  const [number, setNumber] = useState(2); // React안에 hooks 라이브러리가 있다. 그래서 쓸 수 있음. 상태값이 됨.
  // 랜더링 시점 = 상태값 변경

  const add = () => {
    setNumber(number + 1); // 리액트한테 number 값 변경할께! 라고 요청하는것이다.
    console.log("add", number);
  };

  return (
    <div>
      <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}

// add() 이건 바로 실행한다는거다! 쓰지마셈.
