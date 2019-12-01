import React from 'react'
import './App.css'

function App() {
  fetch('https://192.168.0.1', {
    method: 'get'
  }).then(response => response.text()).then(text => console.log(text)).catch(e => console.log(e))
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
