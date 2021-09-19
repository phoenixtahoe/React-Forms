import React from 'react';
import TodoList from './todos/todoList'
// import './app.css'
/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
        <div className="m-5 jumbotron">
            <TodoList />
        </div>
    </div>
  );
}

export default App;