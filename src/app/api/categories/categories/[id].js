// pages/api/categories/[id].js
import connectMongo from "../../../lib/connectDB";
import Category from "../../../Models/Category";

export default async function handler(req, res) {
  await connectMongo();
  const { id } = req.query;

  if (req.method === "PUT") {
    const category = await Category.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(category);
  }

  if (req.method === "DELETE") {
    await Category.findByIdAndDelete(id);
    return res.status(204).end();
  }

  res.setHeader("Allow", ["PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
