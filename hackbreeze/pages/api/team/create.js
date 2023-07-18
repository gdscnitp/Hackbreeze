import Team from "../../../models/Team";
import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  await connectDB();
  const { title, description, uid } = req.body;
  const team = await Team.create({ title, description, uid });
  team.members.push(uid);
  const user = await User.findById(uid);
  user.teams.push(team._id);
  await user.save();
  await team.save();
  res.status(200).json(team);
};

export default handler;
