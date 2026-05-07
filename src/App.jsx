import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button  id="increment-btn" onClick={() => setCount(count + 1)}>Increment</button>
      <button id="reset-btn" onClick={() => setCount(0)}>Reset</button>
      <button id="decrement-btn" onClick={() => setCount(count - 1)}>Decrement</button>
      
    </div>
  );
}

export default App;