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
        <Link to="/">
          <li>
            <MdHome size={23} />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/feed/subscriptions">
          <li>
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
          </li>
        </Link>
        <Link to="/feed/likedVideos">
          <li>
            <MdThumbUp size={23} />
            <span>Liked Videos</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <MdHistory size={23} />
            <span>History</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <MdLibraryBooks size={23} />
            <span>Library</span>
          </li>
        </Link>
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
