import connectDB from "../../../utils/db";
import Project from "../../../models/Project";

export default async function handler(req, res) {
  await connectDB();

  //ROute for read operation
  if (req.method === "GET") {
    try {
      const project = await Project.find();
      res.status(200).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
  //Route for project create operation
  else if (req.method === "POST") {
    const { description, tasks, madeBy, madeFor } = req.body;
    try {
      const newProject = new Project({
        description,
        tasks,
        madeBy,
        madeFor,
      });

      newProject
        .save()
        .then(() => {
          res.status(201).json({ message: "Project created successfully" });
        })
        .catch(() => {
          res
            .status(500)
            .json({ error: "An error occurred while creating the project" });
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
  //Route for project update operation
  else if (req.method === "PUT") {
    const { id } = req.params;
    const { description, tasks, madeBy, madeFor } = req.body;
    try {
      Project.findByIdAndUpdate(id, {
        description,
        tasks,
        madeBy,
        madeFor,
      })
        .then(() => {
          res.status(200).json({ message: "Project updated successfully" });
        })
        .catch(() => {
          res
            .status(500)
            .json({ error: "An error occurred while updating the project" });
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
  //Route for project delete operation
  else if (req.method === "DELETE") {
    const { id } = req.params;
    try {
      Project.findByIdAndDelete(id)
        .then(() => {
          res.status(200).json({ message: "Project deleted successfully" });
        })
        .catch((error) => {
          res
            .status(500)
            .json({ error: "An error occurred while deleting the project" });
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
}
