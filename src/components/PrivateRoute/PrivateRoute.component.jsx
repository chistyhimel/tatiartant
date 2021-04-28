import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, products } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.phone ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
