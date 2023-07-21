import React from "react";
import TeamListItem from "./TeamListItem";
import { useRouter } from "next/router";

const TeamList = ({ teams }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-primary text-tertiary px-2 py-4">TeamList</h1>
      <div className="flex">
        {teams?.map((team) => (
          <>
            <TeamListItem team={team} key={team._id} />
            <button
              className=""
              onClick={() => router.push(`/team/${team._id}`)}
            >
              View
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
