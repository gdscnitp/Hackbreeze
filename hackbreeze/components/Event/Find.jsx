import React, { useState } from "react";
import PastTeams from "../Find/PastTeams";
import Friends from "../Find/Friends";
import AllTeams from "../Find/AllTeams";
import Member from "../Team/Member";

export default function Find({ teams, userTeams, friends }) {
  const [tmems, setTmems] = useState([]);

  const addFriendHandler = (friend) => {
    if (!tmems.find((mem) => mem._id === friend._id))
      setTmems((prev) => [...prev, friend]);
    else {
      let cteam = [...tmems];
      cteam = cteam.filter((cmem) => cmem._id !== friend._id);
      setTmems(cteam);
    }
  };

  return (
    <>
      {/* //Your past Terms */}
      <div className="h-screen bg-white-200 p-16 flex flex-col md:flex-row w-full">
        <div className="flex flex-col w-1/2">
          <div className="bg-pink-100  text-white text-center mt-11 overflow-hidden text-5xl py-4 pt-px-[169px] m-4 max-w-fit rounded-xl h-40">
            <div className="bg-pink-600 -m-4  rounded-xl">
              <p className="bg-white-300 text-xl">Your past Teams</p>
            </div>

            <PastTeams teams={userTeams} />
          </div>
          {/* Friends with similar interest */}
          <div className="bg-pink-100 flex-1 text-white text-center overflow-hidden text-5xl m-3 py-4  rounded-lg ">
            <div className="bg-pink-600 -m-4   rounded-xl">
              <p className="bg-white-300 text-xl">
                Friends with similar interest
              </p>
            </div>

            <Friends
              friends={friends}
              team={tmems}
              addFriendHandler={addFriendHandler}
            />
          </div>
        </div>
        {/* Join other teams */}
        <div className="flex flex-col">
          <div className="bg-pink-100 flex-1 text-white text-center overflow-hidden text-5xl mb-2 m-2 mt-11 py-4 rounded-lg ">
            <div className="bg-pink-600 -m-4 rounded-xl">
              <p className="bg-white-300 text-xl">Join other teams</p>
            </div>

            <AllTeams teams={teams} />
          </div>
          {/* People with similar ideas */}
          <div className="flex flex-col items-center">
            <div className="bg-pink-600 w-full text-center text-white font-semibold rounded-t-xl py-1">
              Manage a team
            </div>

            <div className="bg-pink-100 px-4 py-2 w-full flex flex-col">
              {tmems.map((mem) => (
                <Member name={mem.name} description={mem.email} />
              ))}
              <button className="bg-secondary text-white">See</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
