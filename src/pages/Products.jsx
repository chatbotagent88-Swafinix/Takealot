import { useState } from "react";
import "../styles/Products.css";

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
    <div className="products-page">
      <div className="products-header">
        <h1>Products</h1>
        <button className="btn-primary" onClick={handleAddProduct}>
          <span className="icon">+</span> Add Product
        </button>
      </div>

      <div className="products-controls">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by product name or SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filters">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Stock Status</option>
            <option value="in-stock">In Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>

          <select
            value={buyBoxFilter}
            onChange={(e) => setBuyBoxFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Buy Box</option>
            <option value="yes">Buy Box: Yes</option>
            <option value="no">Buy Box: No</option>
          </select>
        </div>
      </div>

      <div className="products-table-container">
        <table className="products-table">
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
                  <td className="sku-cell">{product.sku}</td>
                  <td className="name-cell">{product.name}</td>
                  <td className="price-cell">${product.price.toFixed(2)}</td>
                  <td className="stock-cell">
                    <span
                      className={`stock-badge ${
                        product.stock === 0 ? "out-of-stock" : "in-stock"
                      }`}
                    >
                      {product.stock === 0
                        ? "Out of Stock"
                        : `${product.stock} units`}
                    </span>
                  </td>
                  <td className="category-cell">
                    <span className="category-badge">{product.category}</span>
                  </td>
                  <td className="buybox-cell">
                    <span
                      className={`buybox-badge ${
                        product.buyBox ? "yes" : "no"
                      }`}
                    >
                      {product.buyBox ? "✓ Yes" : "✗ No"}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <button
                      className="btn-icon btn-edit"
                      onClick={() => handleEditProduct(product)}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      className="btn-icon btn-delete"
                      onClick={() => handleDeleteProduct(product.id)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">
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
                <label htmlFor="sku">SKU *</label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter SKU"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Product Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter product name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price *</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                    required
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="stock">Stock *</label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleFormChange}
                    required
                    min="0"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  required
                  placeholder="Enter category"
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
                  <span>Buy Box</span>
                </label>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingProduct ? "Update Product" : "Add Product"}
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
