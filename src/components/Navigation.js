import React from "react";
import NavItem from "./NavItem";

import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";

import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EmojiFlagsOutlinedIcon from "@mui/icons-material/EmojiFlagsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

import { Avatar, Divider } from "@mui/material";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavItem Icon={HomeIcon} text="Home" />
      <NavItem Icon={YouTubeIcon} text="Shorts" />
      <NavItem Icon={SubscriptionsIcon} text="Subscriptions" />

      <Divider variant="inset" style={{ margin: "10px 0" }} />

      <NavItem Icon={VideoLibraryIcon} text="Library" />
      <NavItem Icon={HistoryIcon} text="History" />
      <NavItem Icon={SlideshowIcon} text="Your Videos" />
      <NavItem Icon={AccessTimeIcon} text="Watch Later" />
      <NavItem Icon={ThumbUpOffAltIcon} text="Liked Videos" />
      <NavItem Icon={KeyboardArrowDownIcon} text="Show More" />

      <Divider variant="inset" style={{ margin: "10px 0" }} />

      <h3>Subscriptions</h3>
      <NavItem
        ImageURL="https://yt3.ggpht.com/FA98Wt-W9Dnxd7YFMvUqjMI5SWGN5Ex4K2nm8pCyljcCY6bLTVZ-RiUo23CUTTUoBAiK9dlrIA=s88-c-k-c0x00ffffff-no-rj"
        text="Aditya Music India"
      />
      <NavItem
        ImageURL="https://yt3.ggpht.com/ytc/AGIKgqOW0BCwdwP6bX7bBn7tSvPT-2lgcJAN8_LWvYGhIH0=s88-c-k-c0x00ffffff-no-rj"
        text="Polimer News"
      />
      <NavItem
        ImageURL="https://yt3.ggpht.com/5ZtoCHyWV95KdgDkYjVfhC1TCdZjHHE8_ar96Uvd8ulPp9rPbKhyds_ULHZUTdR27_XMdGbcLPE=s88-c-k-c0x00ffffff-no-rj"
        text="Pudhiya Thalamurai"
      />
      <NavItem
        ImageURL="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s88-c-k-c0x00ffffff-no-rj"
        text="Codedamn"
      />
      <NavItem
        ImageURL="https://yt3.ggpht.com/JL71VpQoztJzy3adUx6Gwein3Bryy74DC6h93BDO3r3R6i5quT-CqgfBJuHql6_TCRkk95rz8w=s88-c-k-c0x00ffffff-no-rj"
        text="Developers Corner"
      />
      <NavItem Icon={KeyboardArrowDownIcon} text="Show 195 More" />

      <Divider variant="inset" style={{ margin: "10px 0" }} />

      <h3>Explore</h3>

      <NavItem Icon={WhatshotIcon} text="Trending" />
      <NavItem Icon={ShopOutlinedIcon} text="Shopping" />
      <NavItem Icon={AudiotrackOutlinedIcon} text="Music" />
      <NavItem Icon={MovieCreationOutlinedIcon} text="Movies & Shows" />
      <NavItem Icon={CellTowerOutlinedIcon} text="Live" />
      <NavItem Icon={SportsEsportsOutlinedIcon} text="Gaming" />
      <NavItem Icon={NewspaperOutlinedIcon} text="News" />
      <NavItem Icon={EmojiEventsOutlinedIcon} text="Sports" />
      <NavItem Icon={LightbulbOutlinedIcon} text="Learning" />
      <NavItem Icon={DryCleaningIcon} text="Fashion & Beauty" />

      <Divider variant="inset" style={{ margin: "10px 0" }} />

      <NavItem Icon={SettingsOutlinedIcon} text="Settings" />
      <NavItem Icon={EmojiFlagsOutlinedIcon} text="Report History" />
      <NavItem Icon={HelpOutlineOutlinedIcon} text="Help" />
      <NavItem Icon={FeedbackOutlinedIcon} text="Send Feedback" />

      <p className="copyrights">© 2023 Google LLC</p>
    </div>
  );
};

export default Navigation;
