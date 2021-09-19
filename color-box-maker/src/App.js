import React from 'react';
import BoxList from './boxes/boxList'
import './App.css'
/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
        <div className="container">
            <BoxList/>
        </div>
    </div>
  );
}

export default App;