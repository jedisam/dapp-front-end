import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// styles
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/paper-kit.scss?v=1.3.0';
import 'assets/demo/demo.css?v=1.3.0';
// pages
import LandingPage from 'views/examples/LandingPage.js';
import RegisterPage from 'views/examples/RegisterPage.js';

// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <LandingPage {...props} />} />

      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      {/* <Redirect to="/" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
