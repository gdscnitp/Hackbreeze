import React, { useState } from "react";
import VoteCard from "./VoteCard";

const Vote = () => {
  const data1 = [
    {},{},{},{},{},{},{},{}
  ];
  const listitem1 = data1.map((item) => {
    return (
      <VoteCard key={item.id} id={item.id} name={item.name} img={item.img} />
    );
  });
  return (
    <div className="w-full">
      <h2 className="font-poppins text-[20px] font-medium py-[8px]">
        Vote the Ideas
      </h2>
      <div className="flex-col justify-center pl-[px]  bg-white h-full w-[370px] space-y-1 overflow-x-auto">
        {listitem1}
      </div>
    </div>
  );
};
export default Vote;
