// Models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: Number,
  imageUrl: String,
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
