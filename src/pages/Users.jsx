function Users() {
  return (
    <div className="page">
      <h1 className="page-title">User Management</h1>
      
      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Users</h3>
          <button className="btn-primary">Add User</button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Admin</td>
              <td>admin@crm.com</td>
              <td><span className="badge badge-success">Admin</span></td>
              <td><span className="badge badge-success">Active</span></td>
              <td>Jan 15, 2025</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Sarah Manager</td>
              <td>manager@crm.com</td>
              <td><span className="badge badge-pending">Manager</span></td>
              <td><span className="badge badge-success">Active</span></td>
              <td>Feb 01, 2025</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Mike Staff</td>
              <td>staff@crm.com</td>
              <td><span className="badge">Staff</span></td>
              <td><span className="badge badge-success">Active</span></td>
              <td>Mar 10, 2025</td>
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

export default Users;