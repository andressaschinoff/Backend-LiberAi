import mongoose from "mongoose";

const levelSchema = mongoose.Schema({
  title: { type: String, required: true },
  mandatoryActivities: [{ type: String, required: true }],
  bankPrize: { type: String, required: true },
});

const levelModel = mongoose.model("levels", levelSchema);

export { levelModel };
