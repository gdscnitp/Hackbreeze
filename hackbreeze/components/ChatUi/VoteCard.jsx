import { useTeamMutations } from "../../hooks/mutations";

const VoteCard = ({ name, id, teamId, votes }) => {
  const { editProject } = useTeamMutations(teamId);

  console.log(id);

  return (
    <div className="bg-[#FFEDED] h-[45px] py-[10px] pl-[10px] font-normal w-[370px] flex rounded-xl">
      <div>{name}</div>
      <div className="mx-2 bg-secondary text-white">{votes}</div>
      <div
        className="ml-[30px]"
        onClick={() => {
          editProject.mutate({
            id: id,
            offset: 1,
          });
        }}
      >
        +
      </div>
      <div
        className="ml-[30px]"
        onClick={() => {
          editProject.mutate({
            id: id,
            offset: -1,
          });
        }}
      >
        -
      </div>
    </div>
  );
};
export default VoteCard;
