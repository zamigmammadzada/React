import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onClick={ ()=>
        {setCount(count - 1)}}>Decrease</button>
      <button onClick={ ()=>
        {setCount(count + 1)}}>Increase</button>
      <button onClick={()=>
        {setCount(count = 0)}}>Reset</button>
    </div>
  );
}

export default App;
