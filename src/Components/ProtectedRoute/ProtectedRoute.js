import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../../Pages/Login";
import store from "../../Store/initialStore";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const state = store.getState();
  console.log(state);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.login.isSignedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" component={LoginPage} />;
        }
      }}
    />
  );
};
