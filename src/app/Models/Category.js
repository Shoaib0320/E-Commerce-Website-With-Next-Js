// Models/Category.js
import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
