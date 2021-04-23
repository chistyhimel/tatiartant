import React, { useEffect, useState } from "react";
import { GET_PRODUCT_CATEGORY_CALL } from "../../requests/services";
import ChildMenu from "./ChildMenu.component";
import { SubmenuContainer } from "./Menubar.style";
import { menubarData } from "./MenubarData";

const SubMenu = ({ openSubMenu }) => {
  const [childMenuOpen, setChildMenuOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [childData, setChildData] = useState([]);
  const openChildMenu = (data) => {
    setChildData(data.subs);
    setChildMenuOpen(true);
  };

  useEffect(() => {
    GET_PRODUCT_CATEGORY_CALL().then((response) => {
      setCategories(response.data);
    });
  }, []);

  console.log(categories);

  return (
    <>
      <SubmenuContainer openSubMenu={openSubMenu}>
        {/* {menubarData.map((data, idx) => (
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
        ))} */}
        {categories.length
          ? categories.map((category) => (
              <p key={category.id}>{category.name}</p>
            ))
          : null}
      </SubmenuContainer>
    </>
  );
};

export default SubMenu;
