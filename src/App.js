import React from 'react';
import { Route,Switch } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component'
import './App.css';
import ShopPage from "./pages/shop/shop.component"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
