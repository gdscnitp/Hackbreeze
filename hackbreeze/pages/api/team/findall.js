import Team from "../../../models/Team";
import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  await connectDB();
  const teams = await Team.find({}).populate([
    {
      path: "members",
      model: User,
      select: "name contact email",
    },
  ]);
  res.status(200).json(teams);
};

export default handler;
