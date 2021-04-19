import React from "react";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../App";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { AccountContainer } from "./AccountContent.style";

function AccountContent() {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;

  console.log(loggedInUser);
  return (
    <>
      <AccountContainer>
        <small>Logout</small>
        <br />
        <br />
        <h2>My Account</h2>
        <br />
        <p>Welcome back, {loggedInUser.name} !</p>
        <br />
        <br />
        <div>
          <section>
            <small>My orders</small>

            <hr />
          </section>
          <aside>
            <small>Primary Address</small>
            <hr />

            <div>
              <PrimaryButton>Edit Address</PrimaryButton>
            </div>
          </aside>
        </div>
      </AccountContainer>
    </>
  );
}

export default AccountContent;
