import React from "react";
import { useSelector } from "react-redux";
import store from "../Store/store";

const SideBar = () => {
  const isMenuItemOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log("menu item ----------------  ", MenuItem);

  return isMenuItemOpen ? (
    ""
  ) : (
    <div className="h-vh w-40 p-5 shadow-xl">
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Live</li>
        <li>Comdey</li>
      </ul>

      <h1 className="font-bold pt-5">Topic 1</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Live</li>
        <li>Comdey</li>
      </ul>

      <h1 className="font-bold pt-5">Topic 2</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Live</li>
        <li>Comdey</li>
      </ul>
    </div>
  );
};

export default SideBar;
