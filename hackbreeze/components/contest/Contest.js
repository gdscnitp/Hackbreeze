import React from "react";
import Des from "./Des";
function ContestList({ data }) {
  return (
    // <Des
    //   date={mydate}
    //   duration={duration}
    //   attendees={attendees}
    //   contest_name={contest_name}
    //   contest_des={contest_des}
    //   friends_att={friends_att}
    // />
    <>
      {data?.map((el) => (
        <Des
          contest_des={el.description}
          contest_name={el.title}
          friends_att={0}
          attendees={0}
          date={new Date()}
          duration={0}
          cid={el._id}
        />
      ))}
    </>
  );
}

export default ContestList;
