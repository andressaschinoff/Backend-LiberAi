import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  profileImage: { type: String },
  score: { type: Number },
  level: { type: Number },
  activities: [{ activityId: { type: Number } }],
});

const userModel = mongoose.model("users", userSchema);

export { userModel };
