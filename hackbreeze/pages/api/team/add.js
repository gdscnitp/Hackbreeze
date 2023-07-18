import Team from "../../../models/Team";
import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  //   const { id } = req.query;
  const { fid, uid, id } = req.body;
  await connectDB();
  const team = await Team.findById(id);
  team.members.push(fid);
  await team.save();
  const user = await User.findById(uid);
  user.teams.push(team._id);
  await user.save();
  res.status(200).json(team);
};

export default handler;
