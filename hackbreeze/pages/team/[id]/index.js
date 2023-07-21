import React from "react";
import Image from "next/image";
import { useTeam } from "../../../hooks/queries";
import { useRouter } from "next/router";
import TeamBox from "../../../components/Team/TeamBox";
import Member from "../../../components/Team/Member";

const TeamPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: team, isError, isLoading, error } = useTeam(id);

  return (
    <>
      {!!isLoading && <p>Loading...</p>}
      {!isLoading && team && (
        <div>
          <div className="my-12">
            <h1 className="text-center font-bold text-2xl my-4">
              {team.title}
            </h1>
            <div className="flex flex-col md:flex-row justify-around items-center w-full">
              <div className="flex flex-col items-center justify-between h-full w-full md:w-1/2">
                <div className="my-6 w-full px-12">
                  <TeamBox title={"Team members"}>
                    {team.members.map((mem) => (
                      <Member name={mem.name} description={mem.email} />
                    ))}
                  </TeamBox>
                </div>
                <div className="my-6 w-full px-12">
                  <TeamBox title={"Acheivements"}>
                    {" "}
                    1). Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Architecto aperiam dolorum earum repellendus maxime
                    accusamus, ratione <br /> 2). Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Architecto aperiam dolorum
                    earum repellendus maxime accusamus
                  </TeamBox>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between h-full w-full md:w-1/2">
                <div className="my-6 w-full px-12">
                  <TeamBox title={"Team Progress"}>
                    <div className="h-40 md:h-64 relative">
                      <Image src={"/static/Form.png"} fill={true} alt="Chart" />
                    </div>
                  </TeamBox>
                </div>
                <div className="my-6 w-full px-12">
                  <TeamBox title={"Description"}>{team.description}</TeamBox>
                </div>
              </div>
            </div>
          </div>
          <button
            className="text-center"
            onClick={() => router.push(`/team/${id}/chat`)}
          >
            Hi
          </button>
        </div>
      )}

      {isError && <>Something went wrong</>}
    </>
  );
};

export default TeamPage;
