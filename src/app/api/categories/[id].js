import dbConnect from '../../lib/connectDB';
import Category from '../../Models/Category';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { name, status } = req.body;
    const category = await Category.findByIdAndUpdate(id, { name, status }, { new: true });
    res.status(200).json(category);
  } else if (req.method === 'DELETE') {
    await Category.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
