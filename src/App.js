import React, { useState } from "react";

const App = () => {
  // 다운로드 받음
  const [users, setUsers] = useState([]);

  const download = () => {
    let sample = [
      { id: 1, name: "홍길동" },
      { id: 2, name: "임꺽정" },
      { id: 3, name: "장보고" },
      { id: 4, name: "이순신" },
    ];

    setUsers(sample);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
};

export default App;
