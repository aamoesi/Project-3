import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import AdminRegister from './components/auth/AdminRegister';
import AdminLogin from './components/auth/AdminLogin';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import adminDashboard from './components/dashboard/adminDashboard';
import EditAdminProfile from '../src/components/profile-forms/editAdminProfile';
import CreateProfile from '../src/components/profile-forms/CreateProfile';
import EditProfile from '../src/components/profile-forms/EditProfile';
import CreateAdminProfile from '../src/components/profile-forms/createAdminProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import adminSpinner from './components/administrators/adminSpinner';
import Twitch from './components/Twitch'
// Games Produced by DAJJMA!
import Game1 from './components/TicTacToe/Game1';
import Tetris from './components/tetris/Tetris';
import PokemonClicky from './components/games/pokemon-clicky/PokemonClicky';
// Games Produced by Other Developers
import Mergeit from './components/games/Mergeit';
import Tentenhex from './components/games/1010hex';
import Mainpower from './components/games/Mainpower';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/Register' component={Register} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/AdminRegister' component={AdminRegister} />
              <Route exact path='/AdminLogin' component={AdminLogin} />
              <Route exact path='/administrators' component={adminSpinner} />
              <PrivateRoute exact path='/Dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/adminDashboard'
                component={adminDashboard}
              />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/adminDashboard'
                component={adminDashboard}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              {/* Games Developed by DAJJMA */}
              <PrivateRoute exact path='/Game1' component={Game1} />
              <PrivateRoute exact path='/Game2' component={Tetris} />
              <PrivateRoute
                exact
                path='/pokemon-clicky'
                component={PokemonClicky}
              />
              {/* Games Developed by Other Developers */}
              <PrivateRoute exact path='/games/mergeit' component={Mergeit} />
              <PrivateRoute exact path='/games/1010hex' component={Tentenhex} />
              <PrivateRoute
                exact
                path='/games/mainpower'
                component={Mainpower}
              />
            </Switch>
            <Twitch/>
          </section>

        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
