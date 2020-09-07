import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  teacher: { type: String },
  score: { type: Number, required: true },
  time: { type: Number, required: true },
  image: { type: Number },
  levelRequired: { type: Number },
});

const activityModel = mongoose.model("activities", activitySchema);

export { activityModel };
