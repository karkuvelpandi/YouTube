import moment from "moment";
import React from "react";
import "./_commentCard.scss";
const CommentCard = () => {
  return (
    <div className="comment p-3 d-flex ">
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="avatar"
      />
      <div className="comment__body">
        <p className="comment__header mb-1">
          Karkuvel • {moment("2020-05-05").fromNow()}
        </p>
        <p className="mb-0">Nice video dude!!!</p>
      </div>
    </div>
  );
};

export default CommentCard;
