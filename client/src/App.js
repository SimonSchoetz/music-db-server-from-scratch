import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UserList from "./UserList";
import MusicList from "./MusicList";
import Error from "./Error404";

function App() {



  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let serverData = await fetch("http://localhost:3000/music")
    let convertedData = await serverData.json()
    setData(convertedData)
    console.log(convertedData.music)
  }



  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Busted Fingerz Music Database</h1>
          <nav>
            <Link to="/">Music</Link>
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
