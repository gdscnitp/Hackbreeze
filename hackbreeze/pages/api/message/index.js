import { pusher } from "../../../utils/pusher";

const handler = async (req, res) => {
  const { txt } = req.body;
  pusher.trigger("chat", "msg", txt);
  res.status(200).json({ message: "Success" });
};

export default handler;
