import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  //   await connectDB();
  const { uid, fid } = req.body;

  const friend = await User.findById(fid);
  const user = await User.findById(uid);

  user.friends.push(fid);
  friend.friends.push(uid);
  await user.save();
  await friend.save();

  res.status(200).json(user);
};

export default handler;
