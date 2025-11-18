import { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const profitData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Profit ($)',
        data: [5000, 7000, 6500, 9000],
        backgroundColor: '#10b981',
      },
      {
        label: 'Buy Box (%)',
        data: [65, 70, 68, 75],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="page">
      <h1 className="page-title">Dashboard Overview</h1>
      
      <div className="kpi-grid">
        <div className="kpi-card">
          <h3 className="kpi-title">Total Sales</h3>
          <p className="kpi-value">$123,000</p>
        </div>
        <div className="kpi-card">
          <h3 className="kpi-title">Total Products</h3>
          <p className="kpi-value">456</p>
        </div>
        <div className="kpi-card">
          <h3 className="kpi-title">Stock Alerts</h3>
          <p className="kpi-value">12</p>
        </div>
        <div className="kpi-card">
          <h3 className="kpi-title">Buy Box %</h3>
          <p className="kpi-value">72%</p>
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
        <h3 className="table-title">Recent Orders</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-1001</td>
              <td>John Doe</td>
              <td>Wireless Mouse</td>
              <td>$250.00</td>
              <td><span className="badge badge-success">Completed</span></td>
              <td>Nov 15, 2025</td>
            </tr>
            <tr>
              <td>#ORD-1002</td>
              <td>Jane Smith</td>
              <td>Mechanical Keyboard</td>
              <td>$180.00</td>
              <td><span className="badge badge-pending">Pending</span></td>
              <td>Nov 16, 2025</td>
            </tr>
            <tr>
              <td>#ORD-1003</td>
              <td>Bob Johnson</td>
              <td>USB-C Hub</td>
              <td>$320.00</td>
              <td><span className="badge badge-success">Completed</span></td>
              <td>Nov 16, 2025</td>
            </tr>
            <tr>
              <td>#ORD-1004</td>
              <td>Alice Brown</td>
              <td>Monitor Stand</td>
              <td>$95.00</td>
              <td><span className="badge badge-success">Completed</span></td>
              <td>Nov 17, 2025</td>
            </tr>
            <tr>
              <td>#ORD-1005</td>
              <td>Charlie Wilson</td>
              <td>Laptop Sleeve</td>
              <td>$45.00</td>
              <td><span className="badge badge-warning">Cancelled</span></td>
              <td>Nov 17, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;