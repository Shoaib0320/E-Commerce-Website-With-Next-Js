import connectToDatabase from '../../lib/connectDB';
import Category from '../../Models/Category';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const categories = await Category.find();
      res.json(categories);
      break;
    case 'POST':
      const { name, status } = req.body;
      const newCategory = new Category({ name, status });
      await newCategory.save();
      res.json({ message: 'Category added' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
