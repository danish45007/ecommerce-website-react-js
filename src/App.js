import React from 'react';
import { Route,Switch } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component'
import './App.css';

const HatsPage = () => {
  return(
    <div>
      <h1>
        This second HomePage
      </h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
