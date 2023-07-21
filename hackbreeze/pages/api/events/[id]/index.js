import Event from "../../../../models/Event";
import Team from "../../../../models/Team";
import User from "../../../../models/User";
import connectDB from "../../../../utils/db";

const handler = async (req, res) => {
  await connectDB();
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      await connectDB();
      const event = await Event.findById(id).populate([
        {
          path: "organisers",
          model: User,
        },
      ]);
      res.status(200).json(event);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "PUT") {
    try {
      await connectDB();
      const { title, description, location, startTime, endTime, uid } =
        req.body;
      const updatedEvent = await Event.findByIdAndUpdate(
        id,
        {
          title,
          description,
          location,
          startTime,
          endTime,
        },
        { new: true }
      );

      res.status(200).json(updatedEvent);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "DELETE") {
    await connectDB();
    try {
      await Event.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
  }
};

export default handler;
