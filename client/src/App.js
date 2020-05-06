import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from "./UserList";
import MusicList from "./MusicList";
import Error from "./Error404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Busted Fingerz Music Database</h1>
        </header>
      </div>
      <Switch>
        <Route exact path="/music" component={MusicList} />
        <Route exact path="/users" component={UserList} />
        <Route component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
