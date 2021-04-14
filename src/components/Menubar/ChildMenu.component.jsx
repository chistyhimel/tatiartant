import React from "react";
import { ChildMenuContainer } from "./Menubar.style";

const ChildMenu = ({ childMenuData, childMenuOpen }) => {
  const childData = childMenuData;
  console.log(childData);
  return childData.length ? (
    <>
      <ChildMenuContainer childMenuOpen={childMenuOpen}>
        {childData.map((data, idx) => (
          <p>{data.name}</p>
        ))}
      </ChildMenuContainer>
    </>
  ) : null;
};

export default ChildMenu;
