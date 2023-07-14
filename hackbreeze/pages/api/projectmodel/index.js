import connectDB from "../../../utils/db";
import Project from "../../../models/Project";

export default async function handler(req, res) 
{
  await connectDB();
  if (req.method === "GET")
   {
    try 
    {
      const project = await Project.find();
      res.status(200).json(project);
    }
    catch (error)
    {
      console.error(error);
      res.status(500).json({error: "Server Error"});
    }
}
}