import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../login/login';
import { Home } from '../home';
import { LayoutClient } from '../components/layout/layoutclient';
//const isAuthenticated = () => {
//  return localStorage.getItem('authToken') !== null;
//};

//const PrivateRoute = (props: any) => {
//   return isAuthenticated() ? props.element : <Navigate to="/" />;
//  };
export const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<LayoutClient />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Routes>
      );
};

export default AppRoutes;
