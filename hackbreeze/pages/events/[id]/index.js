import { useRouter } from "next/router";
import React, { useEffect } from "react";
import EventComponent from "../../../components/Event/Event";
import { useEvent } from "../../../hooks/queries";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: event, isLoading } = useEvent(id);

  return (
    <div>
      {!isLoading && (
        <EventComponent
          title={event.title}
          description={event.description}
          id={event._id}
          //   orgname={event?.organisers[0].name}
        />
      )}
      {!!isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Event;
