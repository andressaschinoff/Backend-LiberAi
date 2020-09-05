import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  cpf: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  score: { type: Number },
  level: { type: Number },
  profileImage: { type: String },
  lastModified: { type: Date, default: Date.now },
});

const userModel = mongoose.model('users', userSchema);

export { userModel };
