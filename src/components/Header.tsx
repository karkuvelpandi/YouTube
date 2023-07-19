import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import Img from "../assets/images/logo/youtube_light.svg"
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex header-flex">
        <div className="flex items-center left">
          <IconButton>
            <MenuIcon className="yt-icon" fontSize="medium" />
          </IconButton>

          {/* <img className="flex ml-2 logo" src={Img} alt="" /> */}
        </div>
        <div className="flex-1 text-center center">
          <div className="search-flex">
            <input type="text" placeholder="Search" />
            <Tooltip title="Search">
              <button className="button">
                <SearchIcon className="yt-icon" fontSize="medium" />
              </button>
            </Tooltip>
            <Tooltip title="Search with your voice">
              <IconButton>
                <MicIcon className="mic" fontSize="medium" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="flex right">
          <Tooltip title="Create">
            <IconButton>
              <VideoCallOutlinedIcon className="yt-icon" fontSize="medium" />
            </IconButton>
          </Tooltip>
          <Tooltip title="notifications">
            <IconButton>
              <NotificationsOutlinedIcon
                className="yt-icon"
                fontSize="medium"
              />
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              bgcolor: "red",
              fontSize: "16px",
              width: 30,
              height: 30,
              paddingTop: "2px",
              cursor: "pointer",
            }}
          >
            K
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
