import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
  sender: String,
  text: String,
});

const TeamSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  technologiesDesc: {
    type: String,
  },
  imageUrls: {
    type: [String],
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  messages: [msgSchema],
});

const Team = mongoose.models?.Team || mongoose.model("Team", TeamSchema);

export default Team;
