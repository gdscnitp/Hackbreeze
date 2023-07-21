import Team from "../../../../models/Team";
import { pusher } from "../../../../utils/pusher";

const handler = async (req, res) => {
  const { msg, sender } = req.body;
  const { id } = req.query;

  const team = await Team.findById(id);
  pusher.trigger("chat", "msg", msg);
  console.log(req.body);
  team.messages.push({ sender: sender, text: msg });
  await team.save();
  res.status(200).json({ message: "Success" });
};

export default handler;
