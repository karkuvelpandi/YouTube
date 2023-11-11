import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ toggleSidebarHandler }) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const user = useSelector((state) => state.auth?.user);

  const submitHandler = (event) => {
    event.preventDefault();
    navigate(`/search/${keyword}`);
  };
  return (
    <div className="header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={toggleSidebarHandler}
      />
      <img
        className="header__logo"
        alt="youtube_logo"
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
      />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
