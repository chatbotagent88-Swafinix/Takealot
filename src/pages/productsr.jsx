function Products() {
  return (
    <div className="page">
      <h1 className="page-title">Products</h1>
      
      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Product List</h3>
          <button className="btn-primary">Add Product</button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SKU-001</td>
              <td>Wireless Mouse</td>
              <td>Electronics</td>
              <td>$50.00</td>
              <td>120</td>
              <td><span className="badge badge-success">In Stock</span></td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>SKU-002</td>
              <td>Mechanical Keyboard</td>
              <td>Electronics</td>
              <td>$75.00</td>
              <td>80</td>
              <td><span className="badge badge-success">In Stock</span></td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>SKU-003</td>
              <td>USB-C Hub</td>
              <td>Accessories</td>
              <td>$100.00</td>
              <td>5</td>
              <td><span className="badge badge-warning">Low Stock</span></td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>SKU-004</td>
              <td>Monitor Stand</td>
              <td>Furniture</td>
              <td>$95.00</td>
              <td>45</td>
              <td><span className="badge badge-success">In Stock</span></td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>SKU-005</td>
              <td>Laptop Sleeve</td>
              <td>Accessories</td>
              <td>$45.00</td>
              <td>150</td>
              <td><span className="badge badge-success">In Stock</span></td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;