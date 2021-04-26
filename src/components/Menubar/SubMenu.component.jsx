import React, { useEffect, useState } from "react";
import { GET_PRODUCT_CATEGORY_CALL } from "../../requests/services";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import ChildMenu from "./ChildMenu.component";
import { ChildMenuWrapper } from "./Menubar.style";

const SubMenu = ({ openSubMenu, item }) => {
  const [childMenuOpen, setChildMenuOpen] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GET_PRODUCT_CATEGORY_CALL().then((response) => {
      setCategories(response.data);
    });
  }, []);

  // let categoryRef = useClickOutside(() => {
  //   setChildMenuOpen(false);
  // });

  return (
    <div>
      <p onClick={() => setChildMenuOpen(!childMenuOpen)}>{item.name}</p>

      <ChildMenuWrapper childMenuOpen={childMenuOpen}>
        {item.subs.length && childMenuOpen
          ? item.subs.map((item, id) => <ChildMenu key={item.id} item={item} />)
          : null}
      </ChildMenuWrapper>
    </div>
  );
};

export default SubMenu;
