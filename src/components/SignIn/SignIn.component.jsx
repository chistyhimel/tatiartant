import React, { useContext, useEffect } from "react";
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

  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;

  const onSubmit = (data, e) => {
    console.log(data);
    if (data.phone.length >= 11) {
      SIGNIN_CALL(data).then((response) => {
        if (response.data.errors) {
          console.log(response);
        } else {
          localStorage["token"] = JSON.stringify(response.data.access_token);
          // console.log(response.data);
          console.log(response.data.access_token);

          // GET_USER_INFO_CALL(response.data.access_token).then((response) => {
          //   console.log(response);
          // });
          // localStorage["token"] = JSON.stringify(response.data.access_token);
          // showNotification("Logged in Successfully!");
          // history.replace(from);
        }
      });
    }
  };

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    GET_USER_INFO_CALL().then((response) => {
      console.log(response);
      setLoggedInUser(response.data);
      history.replace(from);
    });
  }, []);

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
              <input type="tel" id="phone" {...register("phone")} />
            </div>

            <div className="input__wrap">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register("password")} />
              <span>Forget password ?</span>
            </div>
            {/* <button type="submit"></button> */}
            <button type="submit">
              <PrimaryButton>Login</PrimaryButton>
            </button>
          </form>
          <p>
            Don't have an account ?{" "}
            <span onClick={() => history.push("/sign-up")}>Create one</span>
          </p>
        </SignInFormContainer>
      </SignInContainer>
    </>
  );
};

export default SignInContent;
