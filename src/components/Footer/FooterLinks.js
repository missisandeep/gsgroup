import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavLinks = [
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

const FooterLinks = () => {
  return (
    <>
      {NavLinks.map((links) => {
        const { id, url, LinkName } = links;
        return (
          <Link className="btn btn-link" to={url} key={id}>
            <FaAngleRight /> {LinkName}
          </Link>
        );
      })}
    </>
  );
};

export default FooterLinks;
