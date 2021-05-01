import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";
import Loading from "../Lodading/Loading.component";
import { GET_USER_INFO_CALL } from "../../requests/services";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, products } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      GET_USER_INFO_CALL(JSON.parse(token))
        .then((response) => {
          setLoggedInUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default PrivateRoute;
