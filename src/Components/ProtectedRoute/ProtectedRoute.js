import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../../Pages/Login";
import { useDispatch, useSelector } from "react-redux";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo !== null) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" component={LoginPage} />;
        }
      }}
    />
  );
};
