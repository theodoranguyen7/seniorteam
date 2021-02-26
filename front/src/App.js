import './App.css';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/Login'>
            <Login/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
