import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { SignInContainer, SignInFormContainer } from "./SignIn.style";

const SignInContent = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data, e) => {
    if (data.phone.length === 11) {
      console.log(data);
      // SIGNIN_CALL(data).then((response) => console.log(response));
      // e.target.reset();
    }
  };

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
