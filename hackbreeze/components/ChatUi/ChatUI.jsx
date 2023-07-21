import { useTeam } from "../../hooks/queries";
import { useRouter } from "next/router";
import Picture from "./Picture";
import ChatBox from "./ChatBox";
import Vote from "./Vote";

const ChatUI = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: team, isLoading } = useTeam(id);
  // const isLoading = 1;
  if (!isLoading) {
    return (
      <div className="relative fixed inset-0 h-full w-screen bg-white overflow-hidden">
        <div className="flex flex-col ml-[10px] h-screen">
          <div className="h-0 ml-[75%]">
            <Picture />
          </div>
          <div className="w-[200px] ml-[40%] mt-[3%] mb-[3%]">
            <h1 className="font-semibold text-[40px]">{team.title}</h1>
          </div>
          <div className="ml-[10%] h-0 w-0">
            {team && !isLoading && <ChatBox team={team} />}
          </div>
          <div className="ml-[72%] mt-[3%]">
            <Vote id={id} />
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};
export default ChatUI;
