import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { SignInContainer, SignInFormContainer } from "../SignIn/SignIn.style";
import { SIGNIN_CALL } from "../../requests/services";

const SignUpContent = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data, e) => {
    if (data.phone.length === 11) {
      console.log(data);
      SIGNIN_CALL(data).then((response) => console.log(response));
      // e.target.reset();
    }
  };

  return (
    <>
      <SignInContainer>
        <SignInFormContainer>
          <h1>Register</h1>
          <br />
          <p>Please fill in the information below:</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input__wrap">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" {...register("name")} />
            </div>

            <div className="input__wrap">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" {...register("phone")} />
            </div>

            {/* <div className="input__wrap">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div> */}

            <div className="input__wrap">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register("password")} />
            </div>

            <div className="input__wrap">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                {...register("password_confirmation")}
              />
            </div>

            <button type="submit">
              <PrimaryButton>Login</PrimaryButton>
            </button>
          </form>
          <p>
            Already have an account ?
            <span onClick={() => history.push("/sign-in")}> Log in</span>
          </p>
        </SignInFormContainer>
      </SignInContainer>
    </>
  );
};

export default SignUpContent;
