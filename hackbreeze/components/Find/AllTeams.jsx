import React from "react";

const AllTeams = ({ teams }) => {
  return (
    <>
      {teams?.map((team) => (
        <div className="text-xl text-bold text-black py-5 flex m-3 overflow-auto items-center">
          <p>{team.title}</p>
          <div className="flex flex-row space-x-0 m-4 bg-red-50">
            <div className="flex m-2  -space-x-4">
              {team.members.map((mem) => (
                <div className=" w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                  {mem.name}
                </div>
              ))}
              <a
                className="flex items-center justify-center w-14 h-14 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                href="#"
              >
                +99
              </a>
            </div>
          </div>

          <button className="bg-purple-700 rounded-full m-8 w-24 h-10">
            Join
          </button>
        </div>
      ))}
    </>
  );
};

export default AllTeams;
