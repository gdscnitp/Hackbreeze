import connectDB from "../../../utils/db";
import Project from "../../../models/Project";
import Team from "../../../models/Team";

export default async function handler(req, res) {
  await connectDB();
  //routes for projectIdeas model
  //Route for read operation
  if (req.method === "GET") {
    const { tid } = req.body;
    try {
      const { projects } = await Team.findById(tid).populate("projects");
      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
  //Route for project create operation
  else if (req.method === "POST") {
    const { description, madeBy } = req.body;
    try {
      const newProject = new Project({ description, votes: 0 });
      await newProject.save();
      const team = await Team.findById(madeBy);
      team.projects.push(newProject._id);
      await team.save();
      return res.status(201).json({ message: "Project created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
}
