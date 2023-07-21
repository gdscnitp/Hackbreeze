import React from "react";

const Friends = ({ friends, addFriendHandler, team }) => {
  return (
    <div>
      <div className="flex flex-col overflow-auto m-2">
        <div className="text-xl text-bold text-black py-5 flex m-3 overflow-auto items-center">
          {friends?.map((fr) => (
            <>
              <div className="flex flex-row m-4 items-center">
                <div className="flex m-2">
                  <ol className=" text-black list-decimal">
                    <li className="px-10">
                      <div className=" w-14 h-14 border-2 bg-gray-400 border-white rounded-full dark:border-gray-800 text-xl">
                        {fr.name[0]}
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <p className="m-8">{fr.email}</p>
              <button
                className="bg-secondary py-2 px-4 rounded-lg"
                onClick={() => addFriendHandler(fr)}
              >
                {!team.find((mate) => mate._id === fr._id) ? "Add" : "Remove"}
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
