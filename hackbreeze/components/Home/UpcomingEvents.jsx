import React from "react";
import EventCards from "./EventCards";

const UpcomingEvents = ({ data }) => {
  return (
    <div className="flex flex-col mx-4">
      <div className="flex bg-[#7B2869] px-2 py-4 justify-center rounded-t-3xl">
        <h2 className="font-poppins text-white text-[20px] font-bold mr-2">
          Upcoming
        </h2>
        <h2 className="font-poppins text-white text-[20px] font-bold">
          Events
        </h2>
      </div>
      <div className="bg-primary rounded-bl-md rounded-br-md space-y-5 overflow-x-auto py-8 px-4">
        {data?.map((el) => (
          <EventCards
            key={el.id}
            title={el.title}
            description={el.description}
            date={el.date}
            time={el.time}
          ></EventCards>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
