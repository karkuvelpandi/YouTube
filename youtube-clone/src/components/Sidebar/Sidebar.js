import React from "react";
import "./_sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { logout } from "../../redux/actions/auth.action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar, toggleSidebarHandler }) => {
  const dispatch = useDispatch();
  //
  const logoutHandler = () => {
    dispatch(logout());
  };
  //
  return (
    <nav
      className={toggleSidebar ? "sidebar open" : "sidebar"}
      onClick={() => toggleSidebarHandler(false)}
    >
      <ul>
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
        <Link to="/feed/subscriptions">
          <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
          </li>
        </Link>
        <li>
          <MdThumbUp size={23} />
          <span>Liked Videos</span>
        </li>
        <li>
          <MdHistory size={23} />
          <span>History</span>
        </li>

        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>
        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I don't Know</span>
        </li>
        <hr />
        <li onClick={logoutHandler}>
          <MdExitToApp size={23} />
          <span>Log Out</span>
        </li>
        <hr />
      </ul>
    </nav>
  );
};

export default Sidebar;
