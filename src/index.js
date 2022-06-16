import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

// styles
import 'bootstrap/scss/bootstrap.scss';
import 'assets/scss/paper-kit.scss?v=1.3.0';
import 'assets/demo/demo.css?v=1.3.0';
// pages
import LandingPage from 'views/LandingPage.js';
import AdminView from 'views/AdminView';
import Typography from 'views/Typography.js';
import UserProfile from 'views/UserProfile.js';

// others

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminView />} />
      <Route path="/typo" element={<Typography />} />
      <Route path="/user" element={<UserProfile />} />

      {/* <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      /> */}
      {/* <Navigate to="/" /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
