import Team from "../../../../models/Team";
import connectDB from "../../../../utils/db";

const handler = async (req, res) => {
  const { id } = req.query;
  await connectDB();
  const team = await Team.findById(id).populate({
    path: "members",
    populate: {
      path: "friends teams",
    },
  });
  res.status(200).json(team);
};

export default handler;
