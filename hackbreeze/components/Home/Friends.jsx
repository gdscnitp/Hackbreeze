import React from "react";
import ProfileImage from "../Profile/ProfileImage";

const Friends = ({ friends }) => {
  return (
    <div className="flex flex-col w-80 h-100">
      <div className="bg-[#7B2869] rounded-tl-[30px] rounded-tr-[30px] h-10 w-80">
        <h2 className="font-poppins text-xl text-white font-bold px-[120px] py-[6px]">
          Friends
        </h2>
      </div>
      <div className="bg-[#FFEDED] rounded-bl-md rounded-br-md h-[100px] w-80">
        {friends?.map((fr) => (
          <div className="relative flex pt-[20px] px-[20px]">
            <ProfileImage name={fr.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
