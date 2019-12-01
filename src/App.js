import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Main from './containers/main/Main'

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <section className="body">
          <Switch>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
