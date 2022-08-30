import React from "react";
import { NavLink } from "react-router-dom";
const TopMenu = [
  {
    id: 1,
    url: "/",
    LinkName: "Home",
  },
  {
    id: 2,
    url: "about",
    LinkName: "About Us",
  },
  {
    id: 3,
    url: "gallery",
    LinkName: "Photo Gallery",
  },
  {
    id: 4,
    url: "contact",
    LinkName: "Contact Us",
  },
];
const Menu = () => {
  return (
    <>
      {TopMenu.map((value) => {
        const { id, url, LinkName } = value;
        return (
          <NavLink className="nav-item nav-link" to={url} key={id}>
            {LinkName}
          </NavLink>
        );
      })}
    </>
  );
};

export default Menu;
