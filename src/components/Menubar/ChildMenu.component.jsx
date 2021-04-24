import React from "react";
import { ChildMenuContainer } from "./Menubar.style";

const ChildMenu = ({ item }) => {
  return (
    <>
      <p>{item.name}</p>
    </>
  );
};

export default ChildMenu;
