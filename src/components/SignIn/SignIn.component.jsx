import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { GET_USER_INFO_CALL, SIGNIN_CALL } from "../../requests/services";
import { showNotification } from "../../utils/notifications";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { SignInContainer, SignInFormContainer } from "./SignIn.style";

const SignInContent = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const { user, products } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;
  const [error, setError] = useState(null);

  const onSubmit = (data, e) => {
    console.log(data);
    if (data.phone.length >= 11 && data.password.length >= 4) {
      SIGNIN_CALL(data)
        .then((response) => {
          if (response.data) {
            console.log(response);
            setError(null);
            localStorage["token"] = JSON.stringify(response.data.access_token);
            console.log(response);
            GET_USER_INFO_CALL(response.data.access_token)
              .then((response) => {
                if (response.data) {
                  setError(null);
                  setLoggedInUser(response.data);
                  console.log(response);
                  history.replace(from);
                  showNotification("Logged in Successfully!");
                }
              })
              .catch((err) => {
                setError("Something went wrong! Please try again later.");
              });
          }
        })
        .catch((err) => {
          console.log(err.message);
          setError("Credentials not found! Please register.");
        });
    } else {
      if (data.phone.length < 11) {
        setError("Phone number must be 11 numbers!");
      } else if (data.password.length <= 4) {
        setError("Password must be 4 charecters or more!");
      }
    }
  };

  // useEffect(() => {
  //   // let token = JSON.parse(localStorage.getItem("token"));
  //   GET_USER_INFO_CALL().then((response) => {
  //     console.log(response);
  //     setLoggedInUser(response.data);
  //     history.replace(from);
  //   });
  // }, []);

  return (
    <>
      <SignInContainer>
        <SignInFormContainer>
          <h1>Login</h1>
          <br />
          <p>Please enter your email and password:</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input__wrap">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" {...register("phone")} required />
            </div>

            <div className="input__wrap">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password")}
                required
              />
              <span>Forget password ?</span>
            </div>
            <small>{error ? error : null}</small>
            <button type="submit">
              <PrimaryButton>Login</PrimaryButton>
            </button>
          </form>
          <p>
            Don't have an account ?
            <span onClick={() => history.push("/sign-up")}>Create one</span>
          </p>
        </SignInFormContainer>
      </SignInContainer>
    </>
  );
};

export default SignInContent;
