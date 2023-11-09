import moment from "moment";
import numeral from "numeral";
import React, { useState } from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import "./_videoMetaData.scss";

const VIdeoMetaData = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreContent =
    "This is an example of a description content.This is an example of a description content.This is an example of a description content.This is an example of a description content.This is an example of a description content.This is an example of a description content.This is an example of a description content. This is an example of a description content. This is an example of a description content. This is an example of a description content. This is an example of a description content. This is an example of a description content.";

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            &nbsp;
            {numeral(100000).format("0.a")}views •
            {moment("2020-06-06").fromNow()}
          </span>
          <div>
            <span className="mx-2">
              <MdThumbUp size={26} /> {numeral(100000).format("0.a")}
            </span>
            <span className="mx-2">
              <MdThumbDown size={26} /> {numeral(100000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            alt=""
            className="rounder-circle"
          />
          <div className="d-flex flex-column">
            <span>007Motivations</span>
            <span>{numeral(100000).format("0.a")}Subscribers</span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        {showMoreContent.length > 300 && !showMore
          ? showMoreContent.slice(0, 300) + "..."
          : showMoreContent}
        {showMoreContent.length > 300 && (
          <span
            className="showMoreText"
            onClick={() => setShowMore((prevValue) => !prevValue)}
          >
            {!showMore ? "SHOW MORE" : "SHOW LESS"}
          </span>
        )}
      </div>
    </div>
  );
};

export default VIdeoMetaData;
