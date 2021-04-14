// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import './Seconds';
import Seconds from './Seconds';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = (props) => {
  const [minutes, setMinutes] = useState(0);
  const increaseMinutes=()=>{
    if (minutes < 5) setMinutes(minutes + 1);
  }
  const decreaseMinutes=()=>{
    if(minutes > 0) setMinutes(minutes - 1)
  }
  return (
    <div className="container">
      <div className="controllers">
        <button className="button" onClick={decreaseMinutes}>-</button>
        <h1>{`${minutes} Minute`}</h1>
        <button className="button" onClick={increaseMinutes}>+</button>
      </div>
      {minutes>0 && <Seconds minutes={minutes} setMinutes={setMinutes}/>}
    </div>
  );
};
export default App;
