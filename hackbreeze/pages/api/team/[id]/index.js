import Event from "../../../../models/Event";
import Project from "../../../../models/Project";
import Team from "../../../../models/Team";
import User from "../../../../models/User";
import connectDB from "../../../../utils/db";

const handler = async (req, res) => {
  await connectDB();
  const { id } = req.query;
  const team = await Team.findById(id).populate([
    {
      path: "members",
      model: User,
      populate: [
        {
          path: "friends",
          model: User,
        },
        {
          path: "teams",
          model: Team,
        },
      ],
    },
    { path: "projects", model: Project },
    { path: "messages" },
  ]);

  res.status(200).json(team);
};

export default handler;
