import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  await connectDB();
  const user = await User.create(req.body);
  res.status(200).json(user);
};

export default handler;
