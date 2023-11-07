import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="	https://i.ytimg.com/vi/wT_-UI_PQyE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDNC3OUNNhyVKxj5KLQiBLb00Ggew"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title">Cristiano Ronaldo Motivational quotes</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m views •
        </span>
        <span> 5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/PyzM_lD_IO10kAR1sMCvTtHVJvlJvWU-FRL5oUW87EfhWL4rpz3W_A2nHY6mOCVUM-a6FeoAsQ=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>007Motivations</p>
      </div>
    </div>
  );
};

export default Video;
