import React, { useEffect, useState } from "react";
import axios from "axios";
import { pusherClient } from "../../utils/pusher";
import { ChatClientContext } from "../../context/ChatClientProvider";

const ChatPage = () => {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const channel = pusherClient.subscribe("chat");

    pusherClient.bind("msg", (data) => {
      setMsgs((prev) => [...prev, data]);
    });

    return () => {
      channel.unbind("msg");
      pusherClient.unsubscribe("chat");
      pusherClient.disconnect();
    };
  }, []);

  const [txt, setTxt] = useState("");

  const submitHandler = async () => {
    // setMsgs((prev) => [...prev, { txt: txt }]);
    await axios.post("/api/message", { txt: txt });
  };

  return (
    <div className="bg-pink-200">
      <h1 className="text-xl text-blue-700 font-bold">Chat page</h1>
      <input
        type="text"
        name=""
        id=""
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
      />

      <button className="" onClick={submitHandler}>
        Submit
      </button>

      <div className="p-16 bg-blue-400">
        {msgs.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
