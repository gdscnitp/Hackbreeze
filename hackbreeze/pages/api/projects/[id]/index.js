import Project from "../../../../models/Project";

export default async function handler(req, res) {
  //Route for project update operation
  if (req.method === "PUT") {
    const { id } = req.query;
    const { offset } = req.body;
    try {
      const proj = await Project.findById(id);
      const updated = (proj.votes += +offset);
      proj.votes = updated;
      await proj.save();
      res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
  //Route for project delete operation
  else if (req.method === "DELETE") {
    const { id } = req.query;
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
