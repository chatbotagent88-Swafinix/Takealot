function Settings() {
  return (
    <div className="page">
      <h1 className="page-title">Settings</h1>
      
      <div className="settings-card">
        <h3 className="settings-section">General Settings</h3>
        <form className="settings-form">
          <div className="form-group">
            <label className="form-label">Company Name</label>
            <input type="text" className="form-input" defaultValue="My CRM Company" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" defaultValue="admin@company.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-input" defaultValue="+1 (555) 123-4567" />
          </div>
          <div className="form-group">
            <label className="form-label">Currency</label>
            <select className="form-select">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>INR (₹)</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Time Zone</label>
            <select className="form-select">
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+5:30 (IST)</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">Save Settings</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;