import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' render={()=><Redirect to='/app/home'/>}/>
        <Route exact path='/app/home' component={Home}/>
      </Switch>

    </HashRouter>
  );
}

export default App;
