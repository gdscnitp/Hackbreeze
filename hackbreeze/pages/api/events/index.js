import Event from "../../../models/Event";
import Team from "../../../models/Team";
import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      await connectDB();
      const events = await Event.find({}).populate([
        {
          path: "teams",
          model: Team,
        },
        {
          path: "organisers",
          model: User,
        },
      ]);

      return res.status(200).json(events);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      await connectDB();
      const { title, description, location, startTime, endTime, uid } =
        req.body;
      const newEvent = await Event.create({
        title,
        description,
        location,
        startTime,
        endTime,
      });
      newEvent.organisers.push(uid);
      await newEvent.save();
      res.status(200).json(newEvent);
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
