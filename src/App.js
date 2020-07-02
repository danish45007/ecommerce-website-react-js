import React from 'react';
import { Route,Switch } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component'
import './App.css';
import ShopPage from "./pages/shop/shop.component"
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  // removing the user state
  unsubscribeFromAuth = null;

  // using OAuth for storing user into state
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
