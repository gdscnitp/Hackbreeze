const ChatBox = () => {
  return (
    <div className="flex flex-col w-[850px] h-[550px]">
      <div className="flex bg-[#FFEDED] rounded-tl-[30px] rounded-tr-[30px] h-[80px] w-[850px] mb-[3px]">
        <h2 className="font-poppins font-medium text-[25px] font-bold pl-[18px] pt-[18px] w-[150px]">
          Group Chat
        </h2>
        <button className="ml-[350px] mt-[20px] rounded-[10px] py-[0px] bg-white h-[40px] w-[150px] font-semibold text-[15px]">Messages</button>
        <button className=" rounded-[10px] mt-[20px] ml-[10px] py-[0px] hover:bg-white h-[40px] w-[150px] font-semibold text-[15px]">Participants</button>
      </div>
      <div className=" pl-[20px] py-[9px] bg-[#FFEDED] rounded-bl-md rounded-br-md h-[400px] w-[850px] space-y-5 overflow-x-auto">
        <div className="mt-[330px]">
        <button className="">attachment</button>
        <input type="textbox" className="outline-0 w-[650px] h-[40px] rounded-[5px]" placeholder="Write your message...."/>
        <button>send</button>
        </div>  
      </div>
    </div>
  )
}
export default ChatBox