import connectDB from "../../../utils/db";
import User from "../../../models/User";
import Team from "../../../models/Team";

const handler = async (req, res) => {
  await connectDB();
  const user = await User.findById(
    process.env.NEXT_PUBLIC_DUMMY_USER_ID
  ).populate([
    {
      path: "friends",
      model: User,
    },
    {
      path: "teams",
      model: Team,
    },
  ]);
  return res.status(200).json(user);
};

export default handler;
