import React from "react";
import Vote from "../components/ChatUi/Vote";
import ChatBox from "../components/ChatUi/ChatBox";
import Picture from "../components/ChatUi/Picture";

const chatUi = () => {
  return (
    <div className="relative fixed inset-0 h-full w-screen bg-white overflow-hidden">
      <div className="flex flex-col ml-[10px] h-screen">
        <div className="h-0 ml-[75%]">
            <Picture/>
          </div>
          <div className="w-[200px] ml-[40%] mt-[3%] mb-[3%]">
            <h1 className="font-semibold text-[40px]">Team XYZ</h1>
          </div>
        <div className="ml-[10%] h-0 w-0">
          <ChatBox/>
        </div>
        <div className="ml-[72%] mt-[3%]">
          <Vote/>
        </div>
      </div>
    </div>
  )
}
export default chatUi