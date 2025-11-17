import { useState } from "react";
import "../styles/Settings.css";

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
    <div className="settings-page">
      <div className="settings-header">
        <div className="header-content">
          <h1>Settings</h1>
          <p>Manage your store configuration and integrations</p>
        </div>
        <div className="admin-badge">
          <span className="badge-icon">👤</span>
          <span>Admin Access</span>
        </div>
      </div>

      <div className="settings-container">
        {/* Tabs Navigation */}
        <div className="settings-tabs">
          <button
            className={`tab-btn ${activeTab === "general" ? "active" : ""}`}
            onClick={() => setActiveTab("general")}
          >
            <span className="tab-icon">🏪</span>
            General
          </button>
          <button
            className={`tab-btn ${activeTab === "api" ? "active" : ""}`}
            onClick={() => setActiveTab("api")}
          >
            <span className="tab-icon">🔑</span>
            API & Integration
          </button>
          <button
            className={`tab-btn ${activeTab === "preferences" ? "active" : ""}`}
            onClick={() => setActiveTab("preferences")}
          >
            <span className="tab-icon">⚙️</span>
            Preferences
          </button>
        </div>

        <form onSubmit={handleSave} className="settings-form">
          {/* General Settings */}
          {activeTab === "general" && (
            <div className="settings-section">
              <div className="section-header">
                <h2>Store Information</h2>
                <p>Configure your basic store details</p>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="storeName">
                    <span className="label-icon">🏪</span>
                    Store Name *
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    name="storeName"
                    value={settings.storeName}
                    onChange={handleChange}
                    required
                    placeholder="Enter store name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-icon">📧</span>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    required
                    placeholder="store@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <span className="label-icon">📱</span>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={settings.phone}
                    onChange={handleChange}
                    placeholder="+27 11 123 4567"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="address">
                    <span className="label-icon">📍</span>
                    Store Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={settings.address}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Enter your store address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="currency">
                    <span className="label-icon">💰</span>
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
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
                  <label htmlFor="taxRate">
                    <span className="label-icon">📊</span>
                    Tax Rate (%)
                  </label>
                  <input
                    type="number"
                    id="taxRate"
                    name="taxRate"
                    value={settings.taxRate}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    step="0.01"
                    placeholder="15"
                  />
                </div>
              </div>
            </div>
          )}

          {/* API Settings */}
          {activeTab === "api" && (
            <div className="settings-section">
              <div className="section-header">
                <h2>Takealot API Integration</h2>
                <p>Connect your store with Takealot marketplace</p>
              </div>

              <div className="api-info-card">
                <div className="info-icon">ℹ️</div>
                <div className="info-content">
                  <h4>How to get your API credentials</h4>
                  <ol>
                    <li>Log in to your Takealot Seller Portal</li>
                    <li>Navigate to Settings → API Management</li>
                    <li>Generate new API Key and Secret</li>
                    <li>Copy and paste them below</li>
                  </ol>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="apiKey">
                    <span className="label-icon">🔑</span>
                    API Key
                  </label>
                  <div className="input-with-icon">
                    <input
                      type={showApiKey ? "text" : "password"}
                      id="apiKey"
                      name="apiKey"
                      value={settings.apiKey}
                      onChange={handleChange}
                      placeholder="Enter your Takealot API Key"
                      className="secret-input"
                    />
                    <button
                      type="button"
                      className="toggle-visibility"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? "👁️" : "🔒"}
                    </button>
                  </div>
                  <small className="field-hint">
                    Your API key is encrypted and stored securely
                  </small>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="apiSecret">
                    <span className="label-icon">🔐</span>
                    API Secret
                  </label>
                  <div className="input-with-icon">
                    <input
                      type={showApiSecret ? "text" : "password"}
                      id="apiSecret"
                      name="apiSecret"
                      value={settings.apiSecret}
                      onChange={handleChange}
                      placeholder="Enter your Takealot API Secret"
                      className="secret-input"
                    />
                    <button
                      type="button"
                      className="toggle-visibility"
                      onClick={() => setShowApiSecret(!showApiSecret)}
                    >
                      {showApiSecret ? "👁️" : "🔒"}
                    </button>
                  </div>
                  <small className="field-hint">
                    Never share your API secret with anyone
                  </small>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="webhookUrl">
                    <span className="label-icon">🔗</span>
                    Webhook URL (Optional)
                  </label>
                  <input
                    type="url"
                    id="webhookUrl"
                    name="webhookUrl"
                    value={settings.webhookUrl}
                    onChange={handleChange}
                    placeholder="https://your-domain.com/webhook"
                  />
                  <small className="field-hint">
                    Receive real-time updates from Takealot
                  </small>
                </div>
              </div>

              <div className="api-test-section">
                <button type="button" className="btn-test">
                  🔌 Test Connection
                </button>
                <span className="connection-status">Not connected</span>
              </div>
            </div>
          )}

          {/* Preferences */}
          {activeTab === "preferences" && (
            <div className="settings-section">
              <div className="section-header">
                <h2>System Preferences</h2>
                <p>Customize your store behavior and notifications</p>
              </div>

              <div className="preferences-grid">
                <div className="preference-card">
                  <div className="preference-header">
                    <div className="preference-icon">🔔</div>
                    <div>
                      <h3>Notifications</h3>
                      <p>Manage system notifications</p>
                    </div>
                  </div>
                  <div className="preference-options">
                    <label className="switch-label">
                      <input
                        type="checkbox"
                        name="enableNotifications"
                        checked={settings.enableNotifications}
                        onChange={handleChange}
                      />
                      <span className="switch-toggle"></span>
                      <span>Enable push notifications</span>
                    </label>
                    <label className="switch-label">
                      <input
                        type="checkbox"
                        name="enableEmailAlerts"
                        checked={settings.enableEmailAlerts}
                        onChange={handleChange}
                      />
                      <span className="switch-toggle"></span>
                      <span>Enable email alerts</span>
                    </label>
                  </div>
                </div>

                <div className="preference-card">
                  <div className="preference-header">
                    <div className="preference-icon">🔄</div>
                    <div>
                      <h3>Synchronization</h3>
                      <p>Auto-sync with Takealot</p>
                    </div>
                  </div>
                  <div className="preference-options">
                    <label className="switch-label">
                      <input
                        type="checkbox"
                        name="autoSync"
                        checked={settings.autoSync}
                        onChange={handleChange}
                      />
                      <span className="switch-toggle"></span>
                      <span>Enable auto-sync</span>
                    </label>
                    <div className="form-group" style={{ marginTop: "1rem" }}>
                      <label htmlFor="syncInterval">
                        Sync interval (minutes)
                      </label>
                      <select
                        id="syncInterval"
                        name="syncInterval"
                        value={settings.syncInterval}
                        onChange={handleChange}
                        disabled={!settings.autoSync}
                      >
                        <option value="15">Every 15 minutes</option>
                        <option value="30">Every 30 minutes</option>
                        <option value="60">Every hour</option>
                        <option value="120">Every 2 hours</option>
                        <option value="360">Every 6 hours</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={handleReset}
            >
              Reset to Default
            </button>
            <button type="submit" className="btn-primary">
              {saved ? (
                <>
                  <span className="check-icon">✓</span>
                  Saved Successfully
                </>
              ) : (
                <>
                  <span className="save-icon">💾</span>
                  Save Settings
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
