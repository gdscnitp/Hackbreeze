import React from "react";
import Find from "../../../components/Event/Find";
import { useFriends, useTeams, useUser } from "../../../hooks/queries";

const FindTeams = () => {
  const { data: friends, isLoading: isFriendsLoading } = useFriends();
  const { data: user, isLoading: isUserLoading } = useUser();
  const { teams, isError, isLoading, error } = useTeams();

  return (
    <div>
      <Find friends={friends} userTeams={user?.teams} teams={teams} />
    </div>
  );
};

export default FindTeams;
