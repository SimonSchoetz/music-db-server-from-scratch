import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import UserList from "./UserList";
import MusicList from "./MusicList";
import Home from "./Home";
import InputFormMusic from './InputFormMusic';
import Error from "./Error404";

function App() {




  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Busted Fingerz Music Database</h1>
          <nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/music">Music</NavLink>
            <NavLink className="nav-link" to="/user">My Account</NavLink>
          </nav>
        </header>

      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/music" component={MusicList} />
        <Route exact path="/user" component={UserList} />
        <Route exact path="/music/post" component={InputFormMusic} />
        <Route component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
