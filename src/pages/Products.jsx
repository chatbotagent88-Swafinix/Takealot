import { useState } from "react";
import "../styles/main.css";
import DataTable from "../components/DataTable";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      sku: "R35-RS84NET",
      tsin: "98320356",
      name: "6mmx2mm 100 Piece Refrigerator Magnets",
      price: 228,
      rrp: 199,
      stock: 17,
      asl: 78,
      sl: 58,
      rq: 39,
      posCode: "CO:45 SCO:114",
      prfLos: "R114",
      buyBox: true,
      image: "https://via.placeholder.com/56?text=Mag",
    },
    {
      id: 2,
      sku: "C16-M109-1c",
      tsin: "76257553",
      name: "Tablecloth Clips 6pc",
      price: 149,
      rrp: 199,
      stock: 0,
      asl: 19,
      sl: 10,
      rq: 15,
      posCode: "-",
      prfLos: null,
      buyBox: false,
      image: "https://via.placeholder.com/56?text=Clips",
    },
    {
      id: 3,
      sku: "C31-M139-B",
      tsin: "93545462",
      name: "Cherry Stoner/Cherry Core Pitter - Black",
      price: 159,
      rrp: 199,
      stock: 12,
      asl: 36,
      sl: 27,
      rq: 12,
      posCode: "-",
      prfLos: null,
      buyBox: true,
      image: "https://via.placeholder.com/56?text=Cherry",
    },
    {
      id: 4,
      sku: "C400-M630-T",
      tsin: "91279750",
      name: "Heavy Duty Cash Drawer",
      price: 847,
      rrp: 1299,
      stock: 14,
      asl: 33,
      sl: 20,
      rq: 11,
      posCode: "-",
      prfLos: null,
      buyBox: true,
      image: "https://via.placeholder.com/56?text=Drawer",
    },
    {
      id: 5,
      sku: "C30+M79+B19",
      tsin: "78767878",
      name: "Kids Fun Swimming Boat Inflatable Assorted Blues",
      price: 187,
      rrp: 199,
      stock: 0,
      asl: 16,
      sl: 11,
      rq: 9,
      posCode: "CO:40 SCO:108",
      prfLos: "R79",
      buyBox: false,
      image: "https://via.placeholder.com/56?text=Boat",
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

  // Define table columns
  const columns = [
    {
      key: "image",
      label: "IMAGE",
      sortable: false,
      width: "80px",
      render: (p) => (
        <div
          style={{ width: 56, height: 56, borderRadius: 6, overflow: "hidden" }}
        >
          <img
            src={p.image}
            alt="img"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ),
    },
    {
      key: "details",
      label: "DETAILS",
      sortable: false,
      render: (p) => (
        <div>
          <div style={{ fontWeight: 800 }}>{p.name}</div>
          <div style={{ color: "#64748b", fontSize: 12, marginTop: 6 }}>
            SKU: {p.sku} | TSIN: {p.tsin}
          </div>
        </div>
      ),
    },
    {
      key: "status",
      label: "STATUS",
      sortable: false,
      width: "120px",
      render: (p) => (
        <span className={`pill ${p.buyBox ? "success" : "warn"}`}>
          {p.buyBox ? "Buyable" : "Not Buyable"}
        </span>
      ),
    },
    {
      key: "price",
      label: "PRICE",
      sortable: true,
      render: (p) => (
        <div>
          <div className="price-link">R{p.price}</div>
          <div style={{ fontSize: 12, color: "#94a3b8" }}>RRP: R{p.rrp}</div>
        </div>
      ),
    },
    {
      key: "stock",
      label: "STOCK",
      sortable: true,
      render: (p) => (
        <span className={p.stock === 0 ? "num-red" : "num-green"}>
          {p.stock}
        </span>
      ),
    },
    {
      key: "asl",
      label: "ASL",
      sortable: true,
      render: (p) => <span className="num-purple">{p.asl}</span>,
    },
    {
      key: "sl",
      label: "SL",
      sortable: true,
      render: (p) => <span className="num-orange">{p.sl}</span>,
    },
    {
      key: "rq",
      label: "RQ",
      sortable: true,
      render: (p) => <span className="num-red">{p.rq}</span>,
    },
    {
      key: "poscode",
      label: "POS CODE",
      sortable: false,
      render: (p) => (
        <div style={{ fontSize: 12, color: "#64748b" }}>{p.posCode}</div>
      ),
    },
    {
      key: "prflos",
      label: "PRF-LOS",
      sortable: false,
      render: (p) => (
        <div style={{ color: p.prfLos ? "#10b981" : "#94a3b8" }}>
          {p.prfLos || "No cost data"}
        </div>
      ),
    },
    {
      key: "actions",
      label: "ACTIONS",
      sortable: false,
      render: (p) => (
        <div className="row-actions">
          <button className="row-action-btn" title="View">
            👁️
          </button>
          <button
            className="row-action-btn"
            title="Edit"
            onClick={() => handleEditProduct(p)}
          >
            ✏️
          </button>
          <button className="row-action-btn" title="Add to cart">
            🛒
          </button>
        </div>
      ),
    },
  ];

  // Custom filters component
  const customFilters = (
    <>
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
        <option value="all">All Stock</option>
        <option value="in-stock">In Stock</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>

      <select
        value={buyBoxFilter}
        onChange={(e) => setBuyBoxFilter(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Buy Box</option>
        <option value="yes">Has Buy Box</option>
        <option value="no">No Buy Box</option>
      </select>
    </>
  );

  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div>
          <h1 className="page-title">Takealot Products</h1>
          <div className="page-subtitle">
            Total: {products.length} products •{" "}
            <span style={{ color: "#ef4444" }}>Stale (50h old)</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="btn-action btn-green">Calculating...</button>
          <button className="btn-action btn-blue">Refresh View</button>
          <button className="btn-action btn-outline">Filter</button>
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi-card">
          <div>
            <div className="kpi-label">Total Products</div>
            <div className="kpi-number">3 801</div>
            <div className="kpi-sub">Buyable: 1 426 | Not Buyable: 2 375</div>
          </div>
        </div>

        <div className="kpi-card">
          <div>
            <div className="kpi-label">Qty Required</div>
            <div className="kpi-number">414</div>
            <div className="kpi-sub">Available: 2 137 | On Way: 125</div>
          </div>
        </div>

        <div className="kpi-card">
          <div>
            <div className="kpi-label">Low Profit &lt; R30</div>
            <div className="kpi-number">0</div>
            <div className="kpi-sub">Selling in Loss: 0</div>
          </div>
        </div>
      </div>

      <div className="table-card">
        <div className="table-header" style={{ alignItems: "flex-start" }}>
          <div>
            <h3 className="table-title">Products</h3>
            <div className="subtle">
              Search by title, TSIN, SKU, barcode, or POS code...
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="btn-primary" onClick={handleAddProduct}>
              + Add Product
            </button>
          </div>
        </div>

        <DataTable
          data={filteredProducts}
          columns={columns}
          searchPlaceholder="Search by title, TSIN, SKU, barcode, or POS code..."
          itemsPerPageOptions={[25, 50, 100]}
          defaultItemsPerPage={50}
          customFilters={customFilters}
        />
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
