import { useState } from "react";
import "../styles/main.css";
import DataTable from "../components/DataTable";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://placehold.co/40",
      name: "6mmx2mm 100 Piece Refrigerator Magnets",
      sku: "R35-RS84NET",
      tsin: "98320358",
      status: "Buyable",
      price: 228,
      rrp: 199,
      stock: 17,
      asl: 78,
      sl: 58,
      rq: 39,
      posCode: { co: 45, sco: 114, mn: 137, mx: 228 },
      prfLos: { value: 114, label: "Man.R45", isLoss: false },
      buyBox: true,
      category: "Home",
    },
    {
      id: 2,
      image: "https://placehold.co/40",
      name: "Tablecloth Clips 6pc- Woo",
      sku: "C16-M109-tc",
      tsin: "76257553",
      status: "Not Buyable",
      price: 149,
      rrp: 199,
      stock: 0,
      asl: 19,
      sl: 10,
      rq: 15,
      posCode: null,
      prfLos: { value: "No cost data", isLoss: true },
      buyBox: false,
      category: "Home",
    },
    {
      id: 3,
      image: "https://placehold.co/40",
      name: "Cherry Stoner/Cherry Core Pitter - Black",
      sku: "C31-M139-B",
      tsin: "93545462",
      status: "Buyable",
      price: 159,
      rrp: 199,
      stock: 12,
      asl: 36,
      sl: 27,
      rq: 12,
      posCode: null,
      prfLos: { value: "No cost data", isLoss: true },
      buyBox: true,
      category: "Kitchen",
    },
    {
      id: 4,
      image: "https://placehold.co/40",
      name: "Heavy Duty Cash Drawer",
      sku: "C400-M630-T",
      tsin: "91279750",
      status: "Buyable",
      price: 847,
      rrp: 1299,
      stock: 14,
      asl: 33,
      sl: 20,
      rq: 11,
      posCode: null,
      prfLos: { value: "No cost data", isLoss: true },
      buyBox: true,
      category: "Office",
    },
    {
      id: 5,
      image: "https://placehold.co/40",
      name: "Kids Fun Swimming Boat Inflatable Assorted Blues",
      sku: "C30-++M79+B19",
      tsin: "76786718",
      status: "Not Buyable",
      price: 187,
      rrp: 199,
      stock: 0,
      asl: 16,
      sl: 11,
      rq: 9,
      posCode: { co: 40, sco: 108, mn: 130, mx: 216 },
      prfLos: { value: 79, label: "Man.R40", isLoss: false },
      buyBox: false,
      category: "Toys",
    },
    {
      id: 6,
      image: "https://placehold.co/40",
      name: "3 in 1 Pet Steamy Brush",
      sku: "R25-M71brush",
      tsin: "97456116",
      status: "Buyable",
      price: 139,
      rrp: 199,
      stock: 22,
      asl: 36,
      sl: 28,
      rq: 8,
      posCode: null,
      prfLos: { value: "No cost data", isLoss: true },
      buyBox: true,
      category: "Pets",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Define table columns
  const columns = [
    {
      key: "image",
      label: "IMAGE",
      sortable: false,
      width: "60px",
      render: (product) => (
        <img
          src={product.image}
          alt={product.name}
          className="product-thumbnail"
        />
      ),
    },
    {
      key: "details",
      label: "DETAILS",
      sortable: true,
      width: "300px",
      render: (product) => (
        <div className="product-details-cell">
          <div className="product-name">{product.name}</div>
          <div className="product-meta">
            <span className="meta-sku">SKU: {product.sku}</span>
            <span className="meta-separator">|</span>
            <span className="meta-tsin">
              TSIN: {product.tsin} <span className="copy-icon">❐</span>
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "status",
      label: "STATUS",
      sortable: true,
      width: "100px",
      render: (product) => (
        <span
          className={`status-badge ${
            product.status === "Buyable"
              ? "status-buyable"
              : "status-not-buyable"
          }`}
        >
          {product.status}
        </span>
      ),
    },
    {
      key: "price",
      label: "PRICE",
      sortable: true,
      width: "100px",
      render: (product) => (
        <div className="price-cell">
          <div className="current-price">R{product.price}</div>
          <div className="rrp-price">RRP: R{product.rrp}</div>
        </div>
      ),
    },
    {
      key: "stock",
      label: "STOCK",
      sortable: true,
      width: "80px",
      render: (product) => (
        <span
          className={`stock-value ${
            product.stock > 0 ? "in-stock" : "out-of-stock"
          }`}
        >
          {product.stock}
        </span>
      ),
    },
    {
      key: "asl",
      label: "ASL",
      sortable: true,
      width: "60px",
      render: (product) => <span className="metric-value">{product.asl}</span>,
    },
    {
      key: "sl",
      label: "SL",
      sortable: true,
      width: "60px",
      render: (product) => <span className="metric-value">{product.sl}</span>,
    },
    {
      key: "rq",
      label: "RQ",
      sortable: true,
      width: "60px",
      render: (product) => (
        <span className="metric-value rq-value">{product.rq}</span>
      ),
    },
    {
      key: "posCode",
      label: "POS CODE ⓘ",
      sortable: false,
      width: "140px",
      render: (product) =>
        product.posCode ? (
          <div className="pos-code-cell">
            <div>-</div>
            <div className="pos-metrics">
              <span className="pos-metric">CO:{product.posCode.co}</span>
              <span className="pos-metric">SCO:{product.posCode.sco}</span>
            </div>
            <div className="pos-metrics">
              <span className="pos-metric success">
                MN:{product.posCode.mn}
              </span>
              <span className="pos-metric primary">
                MX:{product.posCode.mx}
              </span>
            </div>
          </div>
        ) : (
          <div className="pos-code-cell">-</div>
        ),
    },
    {
      key: "prfLos",
      label: "PRF-LOS",
      sortable: true,
      width: "120px",
      render: (product) => (
        <div className="prf-los-cell">
          {typeof product.prfLos.value === "number" ? (
            <>
              <div className="prf-value success">R{product.prfLos.value}</div>
              <div className="prf-label success">{product.prfLos.label}</div>
            </>
          ) : (
            <div className="prf-no-data">{product.prfLos.value}</div>
          )}
        </div>
      ),
    },
    {
      key: "actions",
      label: "ACTIONS",
      sortable: false,
      width: "120px",
      render: () => (
        <div className="actions-cell">
          <button className="action-icon-btn" title="View">
            👁️
          </button>
          <button className="action-icon-btn" title="Edit">
            ✏️
          </button>
          <button className="action-icon-btn" title="External Link">
            🔗
          </button>
          <button className="action-icon-btn" title="Add to Cart">
            🛒
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="page products-page">
      <div className="page-header-custom">
        <div className="header-left">
          <h1 className="page-title-custom">Takealot Products</h1>
          <div className="header-subtitle">
            Total: 3 801 products •{" "}
            <span className="stale-warning">● Stale (50h old)</span>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn-calculating">Calculating...</button>
          <button className="btn-refresh">↻ Refresh View</button>
          <button className="btn-filter">▼ Filter •</button>
        </div>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-header">
            <span className="summary-label">Total Products</span>
          </div>
          <div className="summary-value-row">
            <span className="summary-icon">📦</span>
            <span className="summary-value">3 801</span>
          </div>
          <div className="summary-footer">
            <span className="success-text">Buyable: 1 426</span>
            <span className="divider">|</span>
            <span className="warning-text">Not Buyable: 2 375</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-header">
            <span className="summary-label">Qty Required</span>
          </div>
          <div className="summary-value-row">
            <span className="summary-icon">⛃</span>
            <span className="summary-value">414</span>
          </div>
          <div className="summary-footer">
            <span className="text-dark">Available: 2 137</span>
            <span className="divider">|</span>
            <span className="primary-text">On Way: 125</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-header">
            <span className="summary-label">Low Profit &lt; R30</span>
          </div>
          <div className="summary-value-row">
            <span className="summary-icon danger-icon">📉</span>
            <span className="summary-value danger-text">0</span>
          </div>
          <div className="summary-footer">
            <span className="text-muted">Selling in Loss</span>
            <div className="loss-value danger-text">0</div>
          </div>
        </div>
      </div>

      <div className="table-card-custom">
        <DataTable
          data={products}
          columns={columns}
          searchPlaceholder="Search by title, TSIN, SKU, barcode, or POS code..."
          itemsPerPageOptions={[10, 25, 50, 100]}
          defaultItemsPerPage={50}
        />
      </div>

      <style>{`
        .products-page {
          padding: 1rem 2rem;
          max-width: 100%;
        }

        .page-header-custom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .page-title-custom {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.25rem;
        }

        .header-subtitle {
          font-size: 0.9rem;
          color: #6b7280;
          font-weight: 500;
        }

        .stale-warning {
          color: #ef4444;
          font-weight: 600;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-calculating {
          background-color: #86efac;
          color: #14532d;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: default;
        }

        .btn-refresh {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .btn-filter {
          background-color: white;
          color: #374151;
          border: 1px solid #d1d5db;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }

        /* Summary Cards */
        .summary-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .summary-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.25rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .summary-header {
          margin-bottom: 0.75rem;
        }

        .summary-label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 600;
        }

        .summary-value-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .summary-icon {
          font-size: 1.5rem;
          color: #3b82f6;
        }

        .summary-value {
          font-size: 1.875rem;
          font-weight: 800;
          color: #111827;
          line-height: 1;
        }

        .summary-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 500;
          padding-top: 0.75rem;
          border-top: 1px solid #f3f4f6;
        }

        .divider {
          color: #d1d5db;
        }

        .success-text { color: #10b981; }
        .warning-text { color: #f59e0b; }
        .danger-text { color: #ef4444; }
        .primary-text { color: #2563eb; }
        .text-dark { color: #374151; }
        .text-muted { color: #9ca3af; }
        .danger-icon { color: #ef4444; }

        .loss-value {
          margin-left: auto;
          font-weight: 700;
        }

        /* Table Styles */
        .table-card-custom {
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }

        .product-thumbnail {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          object-fit: cover;
          border: 1px solid #e5e7eb;
        }

        .product-details-cell {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .product-name {
          font-weight: 600;
          color: #111827;
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .product-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .meta-separator {
          color: #d1d5db;
        }

        .copy-icon {
          cursor: pointer;
          font-size: 0.8rem;
          margin-left: 2px;
        }

        .status-badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-buyable {
          background-color: #dcfce7;
          color: #166534;
        }

        .status-not-buyable {
          background-color: #fef9c3;
          color: #854d0e;
        }

        .price-cell {
          display: flex;
          flex-direction: column;
        }

        .current-price {
          font-weight: 700;
          color: #4f46e5;
          font-size: 0.95rem;
        }

        .rrp-price {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .stock-value {
          font-weight: 700;
          font-size: 0.9rem;
        }

        .stock-value.in-stock { color: #10b981; }
        .stock-value.out-of-stock { color: #ef4444; }

        .metric-value {
          font-weight: 600;
          color: #6b7280;
          font-size: 0.9rem;
        }

        .rq-value {
          color: #f97316;
        }

        .pos-code-cell {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .pos-metrics {
          display: flex;
          gap: 6px;
        }

        .pos-metric {
          font-weight: 500;
        }

        .pos-metric.success { color: #10b981; }
        .pos-metric.primary { color: #2563eb; }

        .prf-los-cell {
          font-size: 0.8rem;
        }

        .prf-value.success {
          color: #10b981;
          font-weight: 700;
        }

        .prf-label.success {
          color: #10b981;
          font-size: 0.7rem;
        }

        .prf-no-data {
          color: #9ca3af;
          font-style: italic;
          font-size: 0.75rem;
        }

        .actions-cell {
          display: flex;
          gap: 8px;
        }

        .action-icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s;
          color: #6b7280;
        }

        .action-icon-btn:hover {
          background-color: #f3f4f6;
          color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default Products;
