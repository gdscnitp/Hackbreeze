import React from "react";
import { useTeams } from "../../hooks/queries";
import TeamList from "../../components/Team/TeamList";

const TeamPage = () => {
  const { teams, isLoading } = useTeams();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <TeamList teams={teams} />
    </div>
  );
};

export default TeamPage;
