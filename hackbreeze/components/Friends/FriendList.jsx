import React from "react";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-primary text-tertiary px-2 py-4">TeamList</h1>
      <div className="">
        {friends?.map((friend) => (
          <FriendListItem friend={friend} key={friend._id} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
