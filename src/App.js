import './App.css';
import { Sub } from './Sub';
import {useState, createContext} from 'react';

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CountContext.Provider value={count}>
        <Sub />
        <div>
          <input type="button" onClick={() => setCount(count+1)} value="countup" />
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
