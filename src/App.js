import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './App.css';
import './index.css';
import Users from './components/UsersComponent';
import Contact from './components/ContactComponent';
import Home from './components/HomeComponent';
import NotFound from './components/NotFoundComponent';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <ul>
            <li>
              <NavLink exact actvieClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink actvieClassName="active" to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink actvieClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
