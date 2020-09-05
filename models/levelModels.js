import mongoose from 'mongoose';

const levelSchema = mongoose.Schema({
  course: { type: Number, required: true },
  video: { type: Number, required: true },
  extraQuizz: { type: Number, required: true },
  battle: { type: Number, required: true },
  opcional: { type: Number, required: true },
});

const levelModel = mongoose.model('levels', levelSchema);

export { levelModel };
