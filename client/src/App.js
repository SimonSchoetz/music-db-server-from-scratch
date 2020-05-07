import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UserList from "./UserList";
import MusicList from "./MusicList";
import Home from "./Home";
import Error from "./Error404";

function App() {




  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Busted Fingerz Music Database</h1>
          <nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/music">Music</Link>
            <Link className="nav-link" to="/user">My Account</Link>
          </nav>
        </header>

      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/music" component={MusicList} />
        <Route exact path="/user" component={UserList} />
        <Route component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
