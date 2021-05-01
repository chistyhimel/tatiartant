import React, { useContext } from "react";
import { UserContext } from "../../App";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { AccountContainer } from "./AccountContent.style";

function AccountContent() {
  const { user, products } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;

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
