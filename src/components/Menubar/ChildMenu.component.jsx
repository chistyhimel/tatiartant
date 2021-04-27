import React from "react";
import { useHistory } from "react-router";

const ChildMenu = ({ item, menubarState }) => {
  const history = useHistory();

  const goToProductPage = (categoryName, id) => {
    history.push(`/products/${categoryName}/${id}`);
    menubarState(false);
  };

  return (
    <>
      <p onClick={() => goToProductPage("subcategory_id", item.id)}>
        {item.name}
      </p>
    </>
  );
};

export default ChildMenu;
