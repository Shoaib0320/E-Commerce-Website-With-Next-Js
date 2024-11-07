import dbConnect from '../../lib/connectDB';
import Category from '../../Models/Category';

export async function GET(req, res) {
  await dbConnect();
  const categories = await Category.find();
  return res.status(200).json(categories);
}

export async function POST(req, res) {
  await dbConnect();
  const { name, status } = await req.json();
  const category = new Category({ name, status });
  await category.save();
  return res.status(201).json(category);
}
