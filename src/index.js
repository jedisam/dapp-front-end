import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

// styles
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/paper-kit.scss?v=1.3.0';
import 'assets/demo/demo.css?v=1.3.0';
// pages
import LandingPage from 'views/LandingPage.js';
// import RegisterPage from 'views/RegisterPage.js';

// others

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/admin" element={<AdminPage />} /> */}

      {/* <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      /> */}
      {/* <Navigate to="/" /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
