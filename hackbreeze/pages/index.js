import React from "react";
import Friends from "../components/Home/Friends";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import Search from "../components/Home/Search";
import LeaderBoard from "../components/Home/LeaderBoard";

const HomePage = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center pt-14 pb-4">
      <div className="flex">
        <div className="font-poppins text-[80px] font-medium font-weight-500">
          <h1>WELCOME</h1>
        </div>
        <div className="font-poppins text-[80px]  font-weight-400 ml-[15px] ">
          <h1>to</h1>
        </div>
        <div className="font-poppins text-[80px] text-[#7B2869] font-semibold font-weight-500">
          <h1>HackBreeze</h1>
        </div>
        <div className="font-poppins text-[80px]  font-semibold font-weight-500">
          <h1>!</h1>
        </div>
      </div>
      <div className="flex items-center justify-center my-8 w-3/5">
        <div className="mx-2">
          <p className="text-[25px] font-poppins font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="mx-2">
          <Friends />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="max-w-md">
          <UpcomingEvents />
        </div>
        <div className="flex mx-4">
          <Search />
        </div>
        <div className="mx-4">
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
