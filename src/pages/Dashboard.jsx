import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import DataTable from "../components/DataTable";
import { useUser } from "@clerk/clerk-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [recentOrders] = useState([
    {
      id: 1,
      orderId: "#ORD-1001",
      customer: "John Doe",
      product: "Wireless Mouse",
      amount: 250.0,
      status: "Completed",
      date: "Nov 15, 2025",
    },
    {
      id: 2,
      orderId: "#ORD-1002",
      customer: "Jane Smith",
      product: "Mechanical Keyboard",
      amount: 180.0,
      status: "Pending",
      date: "Nov 16, 2025",
    },
    {
      id: 3,
      orderId: "#ORD-1003",
      customer: "Bob Johnson",
      product: "USB-C Hub",
      amount: 320.0,
      status: "Completed",
      date: "Nov 16, 2025",
    },
    {
      id: 4,
      orderId: "#ORD-1004",
      customer: "Alice Brown",
      product: "Monitor Stand",
      amount: 95.0,
      status: "Completed",
      date: "Nov 17, 2025",
    },
    {
      id: 5,
      orderId: "#ORD-1005",
      customer: "Charlie Wilson",
      product: "Laptop Sleeve",
      amount: 45.0,
      status: "Cancelled",
      date: "Nov 17, 2025",
    },
    {
      id: 6,
      orderId: "#ORD-1006",
      customer: "Diana Martinez",
      product: "Webcam HD",
      amount: 129.99,
      status: "Completed",
      date: "Nov 18, 2025",
    },
    {
      id: 7,
      orderId: "#ORD-1007",
      customer: "Edward Lee",
      product: "Desk Lamp LED",
      amount: 34.99,
      status: "Pending",
      date: "Nov 18, 2025",
    },
    {
      id: 8,
      orderId: "#ORD-1008",
      customer: "Fiona Green",
      product: "Phone Charger",
      amount: 19.99,
      status: "Completed",
      date: "Nov 19, 2025",
    },
    {
      id: 9,
      orderId: "#ORD-1009",
      customer: "George Harris",
      product: "Headphones Wireless",
      amount: 129.99,
      status: "Shipping",
      date: "Nov 19, 2025",
    },
    {
      id: 10,
      orderId: "#ORD-1010",
      customer: "Helen Clark",
      product: "Mouse Pad",
      amount: 9.99,
      status: "Completed",
      date: "Nov 20, 2025",
    },
    {
      id: 11,
      orderId: "#ORD-1011",
      customer: "Ivan Rodriguez",
      product: 'Monitor 24"',
      amount: 199.99,
      status: "Pending",
      date: "Nov 20, 2025",
    },
    {
      id: 12,
      orderId: "#ORD-1012",
      customer: "Julia White",
      product: "Keyboard Wireless",
      amount: 79.99,
      status: "Completed",
      date: "Nov 21, 2025",
    },
    {
      id: 13,
      orderId: "#ORD-1013",
      customer: "Kevin Brown",
      product: "USB Cable",
      amount: 12.99,
      status: "Cancelled",
      date: "Nov 21, 2025",
    },
    {
      id: 14,
      orderId: "#ORD-1014",
      customer: "Laura Davis",
      product: "Laptop Stand Pro",
      amount: 65.0,
      status: "Shipping",
      date: "Nov 22, 2025",
    },
    {
      id: 15,
      orderId: "#ORD-1015",
      customer: "Michael Scott",
      product: "Microphone USB",
      amount: 89.99,
      status: "Completed",
      date: "Nov 22, 2025",
    },
  ]);

  const { user } = useUser();
  const username =
    user?.fullName ||
    user?.firstName ||
    user?.primaryEmailAddress?.emailAddress ||
    "thesales";

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Completed":
        return "badge-success";
      case "Pending":
        return "badge-pending";
      case "Shipping":
        return "badge-info";
      case "Cancelled":
        return "badge-warning";
      default:
        return "";
    }
  };

  // Define order columns
  const orderColumns = [
    {
      key: "orderId",
      label: "Order ID",
      sortable: true,
    },
    {
      key: "customer",
      label: "Customer",
      sortable: true,
    },
    {
      key: "product",
      label: "Product",
      sortable: true,
    },
    {
      key: "amount",
      label: "Amount",
      sortable: true,
      render: (order) => `$${order.amount.toFixed(2)}`,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (order) => (
        <span className={`badge ${getStatusBadgeClass(order.status)}`}>
          {order.status}
        </span>
      ),
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
    },
  ];

  // Custom filters for orders
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = recentOrders.filter((order) => {
    if (statusFilter === "all") return true;
    return order.status === statusFilter;
  });

  const orderFilters = (
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="filter-select"
    >
      <option value="all">All Status</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
      <option value="Shipping">Shipping</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );

  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales ($)",
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const profitData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Profit ($)",
        data: [5000, 7000, 6500, 9000],
        backgroundColor: "#10b981",
      },
      {
        label: "Buy Box (%)",
        data: [65, 70, 68, 75],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="page page-dashboard">
      <div className="page-header">
        <div>
          <h2 className="welcome">
            Welcome back, <span className="username">{username}</span>
          </h2>
          <p className="subtle">Here's a summary of your POS business</p>
        </div>

        <div className="tabs">
          <button className="tab active">POS</button>
          <button className="tab">Takealot</button>
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi-card big">
          <div className="kpi-left">
            <p className="kpi-label">POS Revenue</p>
            <p className="kpi-number">R 199</p>
            <p className="kpi-sub">Monthly revenue</p>
          </div>
          <div className="kpi-icon">💰</div>
        </div>

        <div className="kpi-card">
          <p className="kpi-label">POS Products</p>
          <p className="kpi-number">1</p>
          <p className="kpi-sub">Total products</p>
        </div>

        <div className="kpi-card">
          <p className="kpi-label">POS Orders</p>
          <p className="kpi-number">1</p>
          <p className="kpi-sub">Total orders (all time)</p>
        </div>

        <div className="kpi-card">
          <p className="kpi-label">POS Users</p>
          <p className="kpi-number">0</p>
          <p className="kpi-sub">Active users</p>
        </div>
      </div>

      <div className="overview-grid">
        <div className="overview-card">
          <h3 className="overview-title">POS Business Overview</h3>

          <div className="overview-stats">
            <div className="overview-item">
              <p className="muted">Monthly</p>
              <p className="large">R 199</p>
              <p className="muted small">1 orders</p>
            </div>
            <div className="overview-item">
              <p className="muted">Last 7 Days</p>
              <p className="large">R 0</p>
              <p className="muted small">0 orders</p>
            </div>
            <div className="overview-item">
              <p className="muted">Today</p>
              <p className="large">R 0</p>
              <p className="muted small">0 orders</p>
            </div>
          </div>

          <div className="overview-rows">
            <div className="overview-box">
              <h4>Today's Performance</h4>
              <div className="perf-row">
                <div>Sales</div>
                <div>R 0</div>
              </div>
              <div className="perf-row">
                <div>Orders</div>
                <div>0</div>
              </div>
              <div className="perf-row">
                <div>Avg Order</div>
                <div>R 0</div>
              </div>
            </div>

            <div className="overview-box">
              <h4>7-Day Summary</h4>
              <div className="perf-row">
                <div>Total Revenue</div>
                <div>R 0</div>
              </div>
              <div className="perf-row">
                <div>Total Orders</div>
                <div>0</div>
              </div>
              <div className="perf-row">
                <div>Daily Average</div>
                <div>R 0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="products-card">
          <h3 className="overview-title">Product Overview by Stock Handler</h3>
          <div className="placeholder">
            Total Product Statistics (1 Stock Handlers)
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">Sales Trend (6 Months)</h3>
          <Line data={salesData} options={chartOptions} />
        </div>
        <div className="chart-card">
          <h3 className="chart-title">Quarterly Profit & Buy Box</h3>
          <Bar data={profitData} options={chartOptions} />
        </div>
      </div>

      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Recent Orders</h3>
        </div>
        <DataTable
          data={filteredOrders}
          columns={orderColumns}
          searchPlaceholder="Search orders by ID, customer, product..."
          itemsPerPageOptions={[5, 10, 15, 20]}
          defaultItemsPerPage={10}
          customFilters={orderFilters}
        />
      </div>
    </div>
  );
}

export default Dashboard;
