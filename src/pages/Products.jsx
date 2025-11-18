import { useState } from "react";
import "../styles/main.css";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      sku: "SKU001",
      name: "Wireless Mouse",
      price: 29.99,
      stock: 150,
      category: "Electronics",
      buyBox: true,
    },
    {
      id: 2,
      sku: "SKU002",
      name: "Mechanical Keyboard",
      price: 89.99,
      stock: 45,
      category: "Electronics",
      buyBox: false,
    },
    {
      id: 3,
      sku: "SKU003",
      name: "USB-C Cable",
      price: 12.99,
      stock: 0,
      category: "Accessories",
      buyBox: true,
    },
    {
      id: 4,
      sku: "SKU004",
      name: "Laptop Stand",
      price: 45.5,
      category: "Accessories",
      stock: 78,
      buyBox: false,
    },
    {
      id: 5,
      sku: "SKU005",
      name: "Webcam HD",
      price: 65.0,
      stock: 23,
      category: "Electronics",
      buyBox: true,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [stockFilter, setStockFilter] = useState("all");
  const [buyBoxFilter, setBuyBoxFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    stock: "",
    category: "",
    buyBox: false,
  });

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;

    const matchesStock =
      stockFilter === "all" ||
      (stockFilter === "in-stock" && product.stock > 0) ||
      (stockFilter === "out-of-stock" && product.stock === 0);

    const matchesBuyBox =
      buyBoxFilter === "all" ||
      (buyBoxFilter === "yes" && product.buyBox) ||
      (buyBoxFilter === "no" && !product.buyBox);

    return matchesSearch && matchesCategory && matchesStock && matchesBuyBox;
  });

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      sku: "",
      name: "",
      price: "",
      stock: "",
      category: "",
      buyBox: false,
    });
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      sku: product.sku,
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category,
      buyBox: product.buyBox,
    });
    setShowModal(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setFormData({
      sku: "",
      name: "",
      price: "",
      stock: "",
      category: "",
      buyBox: false,
    });
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      // Update existing product
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                ...formData,
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock),
              }
            : p
        )
      );
    } else {
      // Add new product
      const newProduct = {
        id: Math.max(...products.map((p) => p.id)) + 1,
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      };
      setProducts([...products, newProduct]);
    }

    handleCloseModal();
  };

  return (
    <div className="page">
      <h1 className="page-title">Product Management</h1>

      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Products</h3>
          <button className="btn-primary" onClick={handleAddProduct}>
            + Add Product
          </button>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Buy Box</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.sku}</td>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>
                    <span
                      className={`badge ${
                        product.stock === 0 ? "badge-warning" : "badge-success"
                      }`}
                    >
                      {product.stock === 0
                        ? "Out of Stock"
                        : `${product.stock} units`}
                    </span>
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <span
                      className={`badge ${
                        product.buyBox ? "badge-success" : "badge-pending"
                      }`}
                    >
                      {product.buyBox ? "Yes" : "No"}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "2rem" }}
                >
                  No products found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingProduct ? "Edit Product" : "Add New Product"}</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="product-form">
              <div className="form-group">
                <label className="form-label" htmlFor="sku">
                  SKU *
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  className="form-input"
                  value={formData.sku}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter SKU (e.g., SKU001)"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter product name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="price">
                    Price *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-input"
                    value={formData.price}
                    onChange={handleFormChange}
                    required
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="stock">
                    Stock *
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    className="form-input"
                    value={formData.stock}
                    onChange={handleFormChange}
                    required
                    min="0"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="category">
                  Category *
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="form-input"
                  value={formData.category}
                  onChange={handleFormChange}
                  required
                  placeholder="e.g., Electronics, Accessories"
                />
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="buyBox"
                    checked={formData.buyBox}
                    onChange={handleFormChange}
                  />
                  <span>Has Buy Box</span>
                </label>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-edit"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingProduct ? "💾 Update Product" : "✓ Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
