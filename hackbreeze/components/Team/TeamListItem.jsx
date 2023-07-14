import React from "react";
import ProfileImage from "../Profile/ProfileImage";

const TeamListItem = () => {
  return (
    <div className="flex items-center justify-around w-full border-b-secondary border-b-2 outline-none py-2">
      <ProfileImage name={"Team"} size={"sm"} />
      <div className="flex flex-col mx-4 items-center">
        <h1 className="text-xl text-secondary">Team1</h1>
        <h1 className="text-sm text-secondary">Desc1</h1>
      </div>
    </div>
  );
};

export default TeamListItem;
