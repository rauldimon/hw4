import React from 'react';
import './App.css';
import Timer from './Timer';
import Pause from "./Timer/Img/psd.png";
import Play from "./Timer/Img/plst.png";


function App() {
  const [timeOn, setTimeOn] = React.useState(false)
  return (<div className="App">
            <h1>Timer</h1>
            <div className="Clock">
              <button onClick={() => setTimeOn(!timeOn)}>
                { timeOn ? <img alt="pause" src={Pause}/> : <img alt="play" src={Play}/>}
              </button>
              { timeOn ? <Timer /> : null }
            </div>
          </div>
  );
}

export default App;
