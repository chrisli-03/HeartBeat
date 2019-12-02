import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import BeatList from './containers/main/BeatList'
import { Menu, Icon } from 'antd'

const App = () => {
  const [current, setCurrent] = useState('1')
  const [width, setWidth] = useState(50)

  const handleClick = e => {
    setCurrent(e.key)
  }
  return (
    <Router>
      <div className="App">
        <Menu
          className="nav"
          theme="light"
          onClick={handleClick}
          onMouseEnter={() => setWidth(128)}
          onMouseLeave={() => setWidth(50)}
          style={{ width: width }}
          selectedKeys={[current]}
          mode="inline"
        >
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
              Beats
            </Link>
          </Menu.Item>
        </Menu>
        <section className="body">
          <Switch>
            <Route path="/">
              <BeatList />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
