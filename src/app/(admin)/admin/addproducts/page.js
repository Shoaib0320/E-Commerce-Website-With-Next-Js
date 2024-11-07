// export default function AddProducts() {
//   return (
//     <div className="min-h-screen p-20 bg-background text-primary">
//       <h1 className="text-4xl font-bold text-center">Add Products</h1>
//     </div>
//   );
// }



"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddProducts() {
  const [categories, setCategories] = useState([]);
  const [showProductDrawer, setShowProductDrawer] = useState(false);
  const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    imageUrl: ''
  });
  const [categoryData, setCategoryData] = useState({
    name: '',
    status: 'Active'
  });

  // Fetch categories on mount
  useEffect(() => {
    axios.get('/api/categories')
      .then(response => {
        setCategories(response.data.filter(cat => cat.status === 'Active'));
      })
      .catch(error => console.error(error));
  }, []);

  const handleAddProduct = () => {
    axios.post('/api/products', productData)
      .then(response => {
        console.log("Product added:", response.data);
        setShowProductDrawer(false);
      })
      .catch(error => console.error(error));
  };

  const handleAddCategory = () => {
    axios.post('/api/categories', categoryData)
      .then(response => {
        console.log("Category added:", response.data);
        setCategories([...categories, response.data]);
        setShowCategoryDrawer(false);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="min-h-screen p-20 bg-background text-primary">
      <button onClick={() => setShowCategoryDrawer(true)} className="btn-primary">
        Add Category
      </button>

      {/* Category Table */}
      <table className="w-full my-5">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>{category.status}</td>
              <td>
                {/* Add Edit/Delete actions here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Products Button */}
      <button onClick={() => setShowProductDrawer(true)} className="btn-primary">
        Add Product
      </button>

      {/* Add Category Drawer */}
      {showCategoryDrawer && (
        <div className="drawer">
          <h2>Add Category</h2>
          <input
            type="text"
            placeholder="Category Name"
            value={categoryData.name}
            onChange={e => setCategoryData({ ...categoryData, name: e.target.value })}
          />
          <select
            value={categoryData.status}
            onChange={e => setCategoryData({ ...categoryData, status: e.target.value })}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button onClick={handleAddCategory}>Add Category</button>
          <button onClick={() => setShowCategoryDrawer(false)}>Close</button>
        </div>
      )}

      {/* Add Products Drawer */}
      {showProductDrawer && (
        <div className="drawer">
          <h2>Add Product</h2>
          <input
            type="text"
            placeholder="Title"
            value={productData.title}
            onChange={e => setProductData({ ...productData, title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={productData.description}
            onChange={e => setProductData({ ...productData, description: e.target.value })}
          />
          <select
            value={productData.category}
            onChange={e => setProductData({ ...productData, category: e.target.value })}
          >
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Price"
            value={productData.price}
            onChange={e => setProductData({ ...productData, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={productData.imageUrl}
            onChange={e => setProductData({ ...productData, imageUrl: e.target.value })}
          />
          <button onClick={handleAddProduct}>Add Product</button>
          <button onClick={() => setShowProductDrawer(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
