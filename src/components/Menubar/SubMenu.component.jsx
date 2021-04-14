import React, { useState } from "react";
import ChildMenu from "./ChildMenu.component";
import { SubmenuContainer } from "./Menubar.style";
import { menubarData } from "./MenubarData";

const SubMenu = ({ openSubMenu }) => {
  const [childMenuOpen, setChildMenuOpen] = useState(false);

  const [childData, setChildData] = useState([]);
  const openChildMenu = (data) => {
    setChildData(data.subs);
    setChildMenuOpen(true);
  };

  return (
    <>
      <SubmenuContainer openSubMenu={openSubMenu}>
        {menubarData.map((data, idx) => (
          <>
            <p key={idx} onClick={() => openChildMenu(data)}>
              {data.name}
            </p>
            {childMenuOpen &&
            data.id.toString() === childData[0].category_id ? (
              <ChildMenu
                childMenuData={childData}
                childMenuOpen={childMenuOpen}
              />
            ) : null}
          </>
        ))}
      </SubmenuContainer>
    </>
  );
};

export default SubMenu;
