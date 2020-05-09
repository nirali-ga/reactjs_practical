import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import Asteroidsearch from './containers/Asteroidsearch';
import Asteroiddetails from './containers/Asteroiddetails';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Asteroidsearch} />
            <Route path="/asteroid-details/:id" component={Asteroiddetails} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
