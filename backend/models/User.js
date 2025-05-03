import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  location: {type: String, default: ''},
  profilePicture: { type: String, default: '' },
  rating: { type: Number, default: 0 },

  role: { type: String, enum: ['user', 'owner', 'admin'], default:'user' },
  // For storing IDs of products uploaded by user
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
