import { Avatar } from "@mui/material";
import React from "react";

function NavItem({ Icon, text, ImageURL }) {
  return (
    <div className="nav-item" title={text}>
      {Icon && <Icon />}
      {ImageURL && <Avatar src={ImageURL} sx={{ width: 24, height: 24 }} />}
      <span>{text}</span>
    </div>
  );
}

export default NavItem;
