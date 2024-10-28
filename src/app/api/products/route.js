import connectToDatabase from '../../lib/connectDB';
import Product from '../../Models/Products';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const products = await Product.find().populate('category');
      res.json(products);
      break;
    case 'POST':
      const { title, description, category, price, image } = req.body;
      const newProduct = new Product({ title, description, category, price, image });
      await newProduct.save();
      res.json({ message: 'Product added' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
