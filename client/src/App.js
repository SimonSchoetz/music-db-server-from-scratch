import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import AccountManager from "./AccountManager";
import MusicList from "./MusicList";
import Home from "./Home";
import MusicInputForm from './MusicInputForm';
import MusicDetail from './MusicDetail';
import MusicEdit from './MusicEdit';
import LogIn from './LogIn';
import SignUp from './SignUp';
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
        <Route exact path="/user" component={AccountManager} />
        <Route exact path="/music/post" component={MusicInputForm} />
        <Route exact path="/music/:id" component={MusicDetail} />
        <Route exact path="/:id/edit" component={MusicEdit} />
        <Route exact path="/user/login" component={LogIn} />
        <Route exact path="/user/signup" component={SignUp} />
        <Route component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
