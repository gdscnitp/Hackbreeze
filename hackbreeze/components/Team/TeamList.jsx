import React from "react";
import TeamListItem from "./TeamListItem";

const TeamList = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-primary text-tertiary px-2 py-4">TeamList</h1>
      <div className="">
        <TeamListItem />
      </div>
    </div>
  );
};

export default TeamList;
