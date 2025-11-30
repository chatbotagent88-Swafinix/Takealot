import { useState } from "react";
import "../styles/main.css";
import DataTable from "../components/DataTable";

const AutoPrice = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://placehold.co/40",
      name: "Electronic Insulated Terminals 30 Pieces",
      tsin: "90058098",
      sku: "C50-M159-30piece",
      status: "Buyable",
      brand: "-",
      rating: 0,
      reviews: 0,
      yourPrice: 196,
      lowPrice: null,
      priceDiff: null,
      winPrice: null,
      compStatus: "winning",
      competitors: 0,
      minPrice: null,
      maxPrice: null,
      autoPrice: false,
    },
    {
      id: 2,
      image: "https://placehold.co/40",
      name: "Color Change Digital Clock Alarm",
      tsin: "77642774",
      sku: "c50..m95-cc",
      status: "Buyable",
      brand: "-",
      rating: 0,
      reviews: 0,
      yourPrice: 157,
      lowPrice: null,
      priceDiff: null,
      winPrice: null,
      compStatus: "winning",
      competitors: 0,
      minPrice: null,
      maxPrice: null,
      autoPrice: false,
    },
    {
      id: 3,
      image: "https://placehold.co/40",
      name: "Riding Goggles Yellow lens",
      tsin: "91265864",
      sku: "c38..m87-yl",
      status: "Buyable",
      brand: "-",
      rating: 0,
      reviews: 0,
      yourPrice: 129,
      lowPrice: null,
      priceDiff: null,
      winPrice: null,
      compStatus: "winning",
      competitors: 0,
      minPrice: null,
      maxPrice: null,
      autoPrice: false,
    },
    {
      id: 4,
      image: "https://placehold.co/40",
      name: "PUBG Mobile Phone Fire Gaming Dual Trigger Buttons Handle- Red",
      tsin: "74281377",
      sku: "C20-M109-RED",
      status: "Buyable",
      brand: "-",
      rating: 2.0,
      reviews: 6,
      yourPrice: 189,
      lowPrice: 199,
      priceDiff: "+R10",
      winPrice: 198,
      compStatus: "winning",
      competitors: 1,
      minPrice: null,
      maxPrice: null,
      autoPrice: false,
    },
    {
      id: 5,
      image: "https://placehold.co/40",
      name: "Meat Shredder",
      tsin: "91171730",
      sku: "C50-M129-b",
      status: "Buyable",
      brand: "-",
      rating: 0,
      reviews: 0,
      yourPrice: 160,
      lowPrice: null,
      priceDiff: null,
      winPrice: null,
      compStatus: "winning",
      competitors: 0,
      minPrice: null,
      maxPrice: null,
      autoPrice: false,
    },
    {
      id: 6,
      image: "https://placehold.co/40",
      name: "3 Piece Household Drill Brush Set - Yellow9( All Purpose Power Scrubber)",
      tsin: "91488293",
      sku: "C75-M159-3pps",
      status: "Buyable",
      brand: "-",
      rating: 0,
      reviews: 0,
      yourPrice: 249,
      lowPrice: null,
      priceDiff: null,
      winPrice: null,
      compStatus: "winning",
      competitors: 0,
      minPrice: null,
      maxPrice: null,
      autoPrice: false,
    },
  ]);

  const columns = [
    {
      key: "product",
      label: "Product",
      sortable: true,
      width: "300px",
      render: (row) => (
        <div className="product-cell">
          <img src={row.image} alt="" className="product-img" />
          <div className="product-info">
            <div className="product-name">{row.name}</div>
            <div className="product-meta">
              <span>TSIN: {row.tsin}</span>
              <span className="separator">|</span>
              <span>SKU: {row.sku}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      width: "100px",
      render: (row) => (
        <span className="status-badge buyable">{row.status}</span>
      ),
    },
    {
      key: "brand",
      label: "Brand / Rating",
      sortable: true,
      width: "120px",
      render: (row) => (
        <div className="brand-cell">
          <div>{row.brand}</div>
          <div className="rating">
            <span className="star">⭐</span> {row.rating} • {row.reviews}{" "}
            reviews
          </div>
        </div>
      ),
    },
    {
      key: "price",
      label: "Your Price / Low Price",
      sortable: true,
      width: "140px",
      render: (row) => (
        <div className="price-cell">
          <div className="your-price">
            Your: <strong>R{row.yourPrice}</strong>
          </div>
          <div className="low-price">
            Low: {row.lowPrice ? `R${row.lowPrice}` : "-"}
          </div>
        </div>
      ),
    },
    {
      key: "priceDiff",
      label: "Price Diff",
      sortable: true,
      width: "100px",
      render: (row) => (
        <span
          className={
            row.priceDiff?.startsWith("+") ? "diff-positive" : "diff-neutral"
          }
        >
          {row.priceDiff || "-"}
        </span>
      ),
    },
    {
      key: "winPrice",
      label: "Win Price",
      sortable: true,
      width: "100px",
      render: (row) => (
        <span className="win-price">
          {row.winPrice ? `R${row.winPrice}` : "-"}
        </span>
      ),
    },
    {
      key: "compStatus",
      label: "Competitive Status",
      sortable: true,
      width: "140px",
      render: (row) => (
        <span className="comp-status winning">🏆 {row.compStatus}</span>
      ),
    },
    {
      key: "competitors",
      label: "Competitors",
      sortable: true,
      width: "100px",
      render: (row) => <span>{row.competitors}</span>,
    },
    {
      key: "minMax",
      label: "Min / Max Price",
      sortable: false,
      width: "120px",
      render: (row) => (
        <div className="min-max-cell">
          <div>Min: {row.minPrice || "-"}</div>
          <div>Max: {row.maxPrice || "-"}</div>
        </div>
      ),
    },
    {
      key: "autoPrice",
      label: "Auto Price",
      sortable: false,
      width: "80px",
      render: (row) => (
        <label className="switch">
          <input type="checkbox" checked={row.autoPrice} readOnly />
          <span className="slider round"></span>
        </label>
      ),
    },
    {
      key: "actions",
      label: "ACTIONS",
      sortable: false,
      width: "120px",
      render: () => (
        <div className="actions-cell">
          <button className="action-btn">↻</button>
          <button className="action-btn">👁️</button>
          <button className="action-btn">✏️</button>
        </div>
      ),
    },
  ];

  return (
    <div className="page auto-price-page">
      <div className="page-header-custom">
        <h1 className="page-title-custom">Auto Price Management - LTech</h1>
        <div className="header-actions">
          <button className="btn-winning">🏆 Winning Only</button>
          <button className="btn-losing">📉 Losing Only</button>
          <button className="btn-primary">All Products</button>
          <button className="btn-outline">↻ Bulk Sync (47)</button>
          <button className="btn-outline">↻ Refresh</button>
          <button className="btn-outline">▼ Filters</button>
        </div>
      </div>

      <div className="summary-cards-grid">
        <div className="summary-card">
          <div className="card-title">Total Products</div>
          <div className="card-value">7 004</div>
          <div className="card-footer">
            <span className="success">Buyable: 1 426</span>
            <span className="danger">Not: 5 578</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-title">Competitive Data</div>
          <div className="card-value">311</div>
          <div className="card-footer">
            <span className="success">Winning: 128</span>
            <span className="danger">Losing: 184</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-title">Active Auto Pricing</div>
          <div className="card-value">142</div>
          <div className="card-sub">Products with auto-price enabled</div>
        </div>
        <div className="summary-card">
          <div className="card-title">Products With Cost</div>
          <div className="card-value">149</div>
          <div className="card-footer">
            <span className="success">With: 149</span>
            <span className="muted">Without: 6 855</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="card-title">Win Rate</div>
          <div className="card-value">9.0%</div>
          <div className="card-sub">Percentage of winning products</div>
        </div>
      </div>

      <div className="table-container">
        <DataTable
          data={products}
          columns={columns}
          searchPlaceholder="Search by name, SKU, TSIN..."
          itemsPerPageOptions={[50, 100]}
          defaultItemsPerPage={50}
        />
      </div>

      <style>{`
        .auto-price-page {
          padding: 1.5rem 2rem;
        }

        .page-header-custom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .page-title-custom {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
        }

        .header-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .btn-winning {
          background: #fef9c3;
          color: #854d0e;
          border: 1px solid #fde047;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-losing {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-primary {
          background: #2563eb;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-outline {
          background: white;
          color: #374151;
          border: 1px solid #d1d5db;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .summary-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .summary-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.25rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .card-title {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .card-sub {
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .success { color: #10b981; }
        .danger { color: #ef4444; }
        .muted { color: #9ca3af; }

        .table-container {
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }

        /* Table Cell Styles */
        .product-cell {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .product-img {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          object-fit: cover;
        }

        .product-info {
          display: flex;
          flex-direction: column;
        }

        .product-name {
          font-weight: 600;
          color: #2563eb;
          font-size: 0.9rem;
        }

        .product-meta {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .separator {
          margin: 0 4px;
          color: #d1d5db;
        }

        .status-badge.buyable {
          background: #dcfce7;
          color: #166534;
          padding: 2px 8px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .brand-cell {
          font-size: 0.85rem;
        }

        .rating {
          font-size: 0.75rem;
          color: #6b7280;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .star {
          color: #fbbf24;
        }

        .price-cell {
          font-size: 0.85rem;
        }

        .your-price strong {
          color: #111827;
        }

        .low-price {
          color: #6b7280;
          font-size: 0.8rem;
        }

        .diff-positive {
          color: #10b981;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .diff-neutral {
          color: #9ca3af;
        }

        .win-price {
          color: #10b981;
          font-weight: 600;
        }

        .comp-status.winning {
          background: #dcfce7;
          color: #166534;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .min-max-cell {
          font-size: 0.75rem;
          color: #6b7280;
        }

        /* Switch Toggle */
        .switch {
          position: relative;
          display: inline-block;
          width: 36px;
          height: 20px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #e5e7eb;
          transition: .4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: .4s;
        }

        input:checked + .slider {
          background-color: #2563eb;
        }

        input:checked + .slider:before {
          transform: translateX(16px);
        }

        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }

        .actions-cell {
          display: flex;
          gap: 6px;
        }

        .action-btn {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          padding: 4px 8px;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s;
        }

        .action-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default AutoPrice;
