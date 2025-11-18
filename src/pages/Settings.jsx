import { useState } from "react";
import "../styles/main.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    storeName: "TakeALot Store",
    email: "admin@takealot.com",
    phone: "+27 11 123 4567",
    address: "123 Main Street, Johannesburg, South Africa",
    currency: "ZAR",
    taxRate: "15",
    apiKey: "",
    apiSecret: "",
    webhookUrl: "",
    enableNotifications: true,
    enableEmailAlerts: true,
    autoSync: false,
    syncInterval: "30",
  });

  const [activeTab, setActiveTab] = useState("general");
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate save action
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    console.log("Settings saved:", settings);
  };

  const handleReset = () => {
    if (
      window.confirm("Are you sure you want to reset all settings to default?")
    ) {
      setSettings({
        storeName: "TakeALot Store",
        email: "admin@takealot.com",
        phone: "+27 11 123 4567",
        address: "123 Main Street, Johannesburg, South Africa",
        currency: "ZAR",
        taxRate: "15",
        apiKey: "",
        apiSecret: "",
        webhookUrl: "",
        enableNotifications: true,
        enableEmailAlerts: true,
        autoSync: false,
        syncInterval: "30",
      });
    }
  };

  return (
    <div className="page">
      <h1 className="page-title">Settings</h1>

      <div className="settings-card">
        <h2 className="settings-section">Store Information</h2>

        <form onSubmit={handleSave} className="settings-form">
          <div className="form-group">
            <label className="form-label" htmlFor="storeName">
              Store Name *
            </label>
            <input
              type="text"
              id="storeName"
              name="storeName"
              className="form-input"
              value={settings.storeName}
              onChange={handleChange}
              required
              placeholder="Enter store name"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={settings.email}
              onChange={handleChange}
              required
              placeholder="store@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              value={settings.phone}
              onChange={handleChange}
              placeholder="+27 11 123 4567"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="address">
              Store Address
            </label>
            <textarea
              id="address"
              name="address"
              className="form-input"
              value={settings.address}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your store address"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="currency">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="form-select"
              value={settings.currency}
              onChange={handleChange}
            >
              <option value="ZAR">ZAR - South African Rand</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="NGN">NGN - Nigerian Naira</option>
              <option value="KES">KES - Kenyan Shilling</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="taxRate">
              Tax Rate (%)
            </label>
            <input
              type="number"
              id="taxRate"
              name="taxRate"
              className="form-input"
              value={settings.taxRate}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.01"
              placeholder="15"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="apiKey">
              API Key
            </label>
            <input
              type={showApiKey ? "text" : "password"}
              id="apiKey"
              name="apiKey"
              className="form-input"
              value={settings.apiKey}
              onChange={handleChange}
              placeholder="Enter your Takealot API Key"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="apiSecret">
              API Secret
            </label>
            <input
              type={showApiSecret ? "text" : "password"}
              id="apiSecret"
              name="apiSecret"
              className="form-input"
              value={settings.apiSecret}
              onChange={handleChange}
              placeholder="Enter your Takealot API Secret"
            />
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <button type="button" className="btn-edit" onClick={handleReset}>
              Reset to Default
            </button>
            <button type="submit" className="btn-primary">
              {saved ? "✓ Saved Successfully" : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
