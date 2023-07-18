import Team from "../../../models/Team";
import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  const { uid } = req.body;
  await connectDB();
  const { teams } = await User.findById(uid).populate("teams").select("teams");
  res.status(200).json(teams);
};

export default handler;
