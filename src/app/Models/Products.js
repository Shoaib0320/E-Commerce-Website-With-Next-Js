import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // Store URL or path to image
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
