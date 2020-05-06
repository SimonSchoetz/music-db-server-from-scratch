import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UserList from "./UserList";
import MusicList from "./MusicList";
import Error from "./Error404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Busted Fingerz Music Database</h1>
          <nav>
            <Link to="/user">Music</Link>
            <Link to="/user">My Account</Link>
          </nav>
        </header>

      </div>
      <Switch>
        <Route exact path="/" component={MusicList} />
        <Route exact path="/user" component={UserList} />
        <Route component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
