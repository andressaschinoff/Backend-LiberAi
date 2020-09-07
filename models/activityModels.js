import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  teacher: { type: String },
  score: { type: Number, required: true },
  time: { type: Number, required: true },
  image: { type: String },
  levelRequired: { type: Number },
});

const activityModel = mongoose.model("activities", activitySchema);

export { activityModel };
