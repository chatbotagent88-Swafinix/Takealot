import { useState } from "react";
import "../styles/main.css";
import DataTable from "../components/DataTable";

const Sales = () => {
  const [sales, setSales] = useState([
    {
      id: 1,
      image: "https://placehold.co/40",
      orderDate: "2025/11/26, 13:59",
      title: "Indoor and Outdoor Mouse Trap for Home - 4 ...",
      sku: "R64-M94/L237",
      tsin: "97798352",
      orderId: "196329564",
      sellingPrice: 195.0,
      grossSale: 195.0,
      quantity: 1,
      status: "Preparing for Customer",
      customer: "Tamryn Peetz",
      dc: "JHB",
    },
    {
      id: 2,
      image: "https://placehold.co/40",
      orderDate: "2025/11/26, 13:52",
      title: "Door Bottom Seal",
      sku: "c23",
      tsin: "95498380",
      orderId: "196328451",
      sellingPrice: 157.0,
      grossSale: 157.0,
      quantity: 1,
      status: "Preparing for Customer",
      customer: "Karlien Nel",
      dc: "JHB",
    },
    {
      id: 3,
      image: "https://placehold.co/40",
      orderDate: "2025/11/26, 13:38",
      title: "Stainless Steel Bench Dough Scraper",
      sku: "C35-M139-030",
      tsin: "77112094",
      orderId: "196326030",
      sellingPrice: 219.0,
      grossSale: 219.0,
      quantity: 1,
      status: "Preparing for Customer",
      customer: "Geoffrey Crewe-Brown",
      dc: "CPT",
    },
    {
      id: 4,
      image: "https://placehold.co/40",
      orderDate: "2025/11/26, 13:35",
      title: "Hockey Board Game",
      sku: "C58 - M 170 HBG",
      tsin: "97322837",
      orderId: "196325147",
      sellingPrice: 229.0,
      grossSale: 229.0,
      quantity: 1,
      status: "Preparing for Customer",
      customer: "Yaseen Malick",
      dc: "CPT",
    },
    {
      id: 5,
      image: "https://placehold.co/40",
      orderDate: "2025/11/26, 13:21",
      title: "Colorful Educational Building Blocks for Kids",
      sku: "F00C50",
      tsin: "101733830",
      orderId: "196322889",
      sellingPrice: 249.0,
      grossSale: 249.0,
      quantity: 1,
      status: "Draft Shipment",
      customer: "Henry Steyn",
      dc: "JHB",
    },
    {
      id: 6,
      image: "https://placehold.co/40",
      orderDate: "2025/11/26, 13:15",
      title: "High-Quality 5-Layer Large-Capacity Dust-Pr...",
      sku: "C110/shoerack",
      tsin: "98194087",
      orderId: "196321761",
      sellingPrice: 273.0,
      grossSale: 273.0,
      quantity: 1,
      status: "Draft Shipment",
      customer: "Puleng Morobe",
      dc: "JHB",
    },
    {
      id: 7,
      image: "https://placehold.co/40",
      orderDate: "2025/11/26, 12:29",
      title: "6mmx2mm 100 Piece Refrigerator Magnets",
      sku: "R35-RS84NET",
      tsin: "98320356",
      orderId: "196313700",
      sellingPrice: 163.0,
      grossSale: 163.0,
      quantity: 1,
      status: "Preparing for Customer",
      customer: "Caroline Nieuwstad",
      dc: "JHB",
    },
  ]);

  const columns = [
    {
      key: "image",
      label: "IMAGE",
      sortable: false,
      width: "60px",
      render: (row) => (
        <img src={row.image} alt="" className="product-thumbnail" />
      ),
    },
    {
      key: "orderDate",
      label: "Order Date ↓",
      sortable: true,
      width: "140px",
      render: (row) => (
        <div className="date-cell">
          <span className="calendar-icon">📅</span> {row.orderDate}
        </div>
      ),
    },
    {
      key: "title",
      label: "Title",
      sortable: true,
      width: "250px",
      render: (row) => (
        <div className="title-cell">
          <div className="product-title">{row.title}</div>
          <div className="product-meta">
            <span>SKU: {row.sku}</span> | <span>TSIN: {row.tsin}</span>
          </div>
        </div>
      ),
    },
    {
      key: "orderId",
      label: "Order ID",
      sortable: true,
      width: "100px",
      render: (row) => <span className="order-id">{row.orderId}</span>,
    },
    {
      key: "sellingPrice",
      label: "Selling Price",
      sortable: true,
      width: "100px",
      render: (row) => (
        <span className="price-text">R{row.sellingPrice.toFixed(2)}</span>
      ),
    },
    {
      key: "grossSale",
      label: "Gross Sale",
      sortable: true,
      width: "100px",
      render: (row) => (
        <span className="success-text">R{row.grossSale.toFixed(2)}</span>
      ),
    },
    {
      key: "quantity",
      label: "Quantity",
      sortable: true,
      width: "80px",
      render: (row) => <span className="qty-badge">{row.quantity}</span>,
    },
    {
      key: "status",
      label: "Sale Status",
      sortable: true,
      width: "160px",
      render: (row) => (
        <span
          className={`status-badge ${
            row.status === "Draft Shipment" ? "status-draft" : "status-prep"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "customer",
      label: "Customer Name",
      sortable: true,
      width: "140px",
    },
    {
      key: "dc",
      label: "DC",
      sortable: true,
      width: "60px",
    },
    {
      key: "actions",
      label: "ACTIONS",
      sortable: false,
      width: "80px",
      render: () => (
        <button className="btn-view">
          <span className="eye-icon">👁️</span> View
        </button>
      ),
    },
  ];

  return (
    <div className="page sales-page">
      <div className="page-header-custom">
        <div className="header-left">
          <h1 className="page-title-custom">Takealot Sales</h1>
          <p className="page-subtitle-custom">Takealot Sales</p>
        </div>
        <div className="header-actions">
          <button className="btn-refresh">↻ Refresh</button>
          <button className="btn-filter">▼ Filters</button>
        </div>
      </div>

      <div className="summary-cards-grid">
        <div className="summary-card">
          <div className="card-header-row">
            <span className="card-icon blue">🛒</span>
            <span className="card-label">Sales • Today: 29</span>
          </div>
          <div className="card-stats">
            <span>Yesterday: 91</span> • <span>7D: 377</span> •{" "}
            <span>30D: 1257</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-header-row">
            <span className="card-icon green">💲</span>
            <span className="card-label">Revenue • Today: R7.4k</span>
          </div>
          <div className="card-stats">
            <span>Yesterday: R19.7k</span> • <span>7D: R90.3k</span> •{" "}
            <span>30D: R327.8k</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-header-row">
            <span className="card-icon red">❌</span>
            <span className="card-label">Returns • Today: 0</span>
          </div>
          <div className="card-stats">
            <span>Yesterday: 1</span> • <span>7D: 5</span> •{" "}
            <span>30D: 55</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-header-row">
            <span className="card-icon pink">📅</span>
            <span className="card-label">Total Sales</span>
          </div>
          <div className="card-stats pink-text">
            1764 sales found • Page 1 of 18
          </div>
        </div>
      </div>

      <div className="table-container">
        <DataTable
          data={sales}
          columns={columns}
          searchPlaceholder="Search by product title, order ID, customer name, SKU, or TSIN..."
          itemsPerPageOptions={[50, 100]}
          defaultItemsPerPage={100}
        />
      </div>

      <style>{`
        .sales-page {
          padding: 1.5rem 2rem;
        }

        .page-header-custom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .page-title-custom {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.25rem;
        }

        .page-subtitle-custom {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-refresh {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-filter {
          background-color: white;
          color: #374151;
          border: 1px solid #d1d5db;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .summary-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .summary-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .card-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.5rem;
        }

        .card-icon {
          font-size: 1rem;
        }

        .card-label {
          font-weight: 700;
          font-size: 0.9rem;
          color: #374151;
        }

        .card-label .today {
          color: #2563eb;
        }

        .card-stats {
          font-size: 0.75rem;
          color: #6b7280;
          margin-left: 24px;
        }

        .pink-text { color: #db2777; font-weight: 600; }

        .table-container {
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
        }

        .date-cell {
          font-size: 0.8rem;
          color: #6b7280;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .title-cell {
          display: flex;
          flex-direction: column;
        }

        .product-title {
          font-weight: 600;
          color: #374151;
          font-size: 0.85rem;
          margin-bottom: 2px;
        }

        .product-meta {
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .order-id {
          font-family: monospace;
          color: #374151;
        }

        .price-text {
          font-weight: 600;
          color: #374151;
        }

        .success-text {
          font-weight: 700;
          color: #10b981;
        }

        .qty-badge {
          background: #eff6ff;
          color: #2563eb;
          padding: 2px 8px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .status-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
        }

        .status-prep {
          background: #fef9c3;
          color: #854d0e;
        }

        .status-draft {
          background: #fee2e2;
          color: #991b1b;
        }

        .btn-view {
          background: #eff6ff;
          color: #2563eb;
          border: none;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>
    </div>
  );
};

export default Sales;
