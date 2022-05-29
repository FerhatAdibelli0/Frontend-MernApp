import React from "react";
import reactDom from "react-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;
  return reactDom.createPortal(content, document.getElementById("drawer"));
};

export default SideDrawer;
