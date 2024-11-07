import dbConnect from '../../lib/connectDB';
import Product from '../../Models/Products';

// Connect to database and handle GET requests
export async function GET(req) {
  await dbConnect();
  const products = await Product.find().populate('category');
  return new Response(JSON.stringify(products), { status: 200 });
}

// Handle POST requests
export async function POST(req) {
  await dbConnect();
  const { title, description, category, price, imageUrl } = await req.json();
  
  const product = new Product({ title, description, category, price, imageUrl });
  await product.save();
  
  return new Response(JSON.stringify(product), { status: 201 });
}
