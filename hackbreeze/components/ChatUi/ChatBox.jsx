import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Member from "../Team/Member";
import axios from "axios";
import { pusherClient } from "../../utils/pusher";

const ChatBox = ({ team }) => {
  const [toggle, setToggle] = useState(false);

  const [msgs, setMsgs] = useState(team.messages);
  console.log(msgs);

  useEffect(() => {
    pusherClient.subscribe("chat");

    pusherClient.bind("msg", (data) => {
      setMsgs((prev) => [...prev, data]);
    });

    return () => {
      pusherClient.unbind("msg");
      pusherClient.unsubscribe("chat");
      pusherClient.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col w-[850px] h-[550px]">
        <div className="flex bg-[#FFEDED] rounded-tl-[30px] rounded-tr-[30px] h-[80px] w-[850px] mb-[3px]">
          <h2 className="font-poppins font-medium text-[25px] font-bold pl-[18px] pt-[18px] w-[150px]">
            Group Chat
          </h2>
          <button
            className="ml-[350px] mt-[20px] rounded-[10px] py-[0px] bg-white h-[40px] w-[150px] font-semibold text-[15px]"
            onClick={() => setToggle(false)}
          >
            Messages
          </button>
          <button
            className=" rounded-[10px] mt-[20px] ml-[10px] py-[0px] hover:bg-white h-[40px] w-[150px] font-semibold text-[15px]"
            onClick={() => setToggle(true)}
          >
            Participants
          </button>
        </div>
        {JSON.stringify(msgs)}
        {!toggle && (
          <div className=" pl-[20px] py-[9px] bg-[#FFEDED] rounded-bl-md rounded-br-md h-[400px] w-[850px] space-y-5 overflow-x-auto">
            <div className="mt-[330px]">
              <Formik
                initialValues={{ msg: "" }}
                onSubmit={async (val) => {
                  await axios.post(`/api/team/${team._id}/msg`, {
                    sender: new Date().toISOString().toString(),
                    msg: val.msg,
                  });
                  setMsgs((prev) => [
                    ...prev,
                    {
                      sender: new Date().toISOString().toString(),
                      msg: val.msg,
                    },
                  ]);
                }}
              >
                <Form>
                  <button className="" type="button">
                    attachment
                  </button>
                  <Field
                    type="textbox"
                    className="outline-0 w-[650px] h-[40px] rounded-[5px]"
                    name="msg"
                    placeholder="Write your message...."
                  />
                  <button type="submit">send</button>
                </Form>
              </Formik>
            </div>
          </div>
        )}
        {!!toggle && (
          <>
            {team?.members?.map((el) => (
              <Member name={el.name} description={el.email} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default ChatBox;
