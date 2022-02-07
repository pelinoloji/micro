import React, { useState } from "react";
import "../src/assets/style/App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from React</p>
        <p>{count}</p>
        <div>
          <button className="button" onClick={() => setCount(count + 5)}>
            +
          </button>
          <button className="button" onClick={() => setCount(count - 3)}>
            -
          </button>
          <button onClick={() => setCount(0)}>clear</button>
        </div>
      </header>
    </div>
  );
}

export default App;
