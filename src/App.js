import React from 'react';
import { Route,Switch } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component'
import './App.css';
import ShopPage from "./pages/shop/shop.component"
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUSerProfileDocument } from './firebase/firebase.utils';



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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUSerProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
            // console.log(this.state)
        });
      }
      else {
        this.setState(
            { currentUser: userAuth }
          )
      }
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
