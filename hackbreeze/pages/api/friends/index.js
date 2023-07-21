import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  //   await connectDB();
  const { uid } = req.body;

  const { friends } = await User.findById(uid)
    .populate({
      path: "friends",
      model: User,
    })
    .select("friends");

  res.status(200).json(friends);
};

export default handler;
