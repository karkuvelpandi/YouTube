import React from "react";
import "./_comments.scss";
import CommentCard from "./components/CommentCard";

const Comments = () => {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>1231 comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="avatar"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(15)].map(() => (
          <CommentCard />
        ))}
      </div>
    </div>
  );
};

export default Comments;
