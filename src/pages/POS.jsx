import { useState } from "react";
import "../styles/main.css";

const POS = () => {
  // Sample products database
  const [products] = useState([
    { id: 1, sku: "SKU001", name: "Wireless Mouse", price: 29.99, stock: 150 },
    {
      id: 2,
      sku: "SKU002",
      name: "Mechanical Keyboard",
      price: 89.99,
      stock: 45,
    },
    { id: 3, sku: "SKU003", name: "USB-C Cable", price: 12.99, stock: 200 },
    { id: 4, sku: "SKU004", name: "Laptop Stand", price: 45.5, stock: 78 },
    { id: 5, sku: "SKU005", name: "Webcam HD", price: 65.0, stock: 23 },
    { id: 6, sku: "SKU006", name: 'Monitor 24"', price: 199.99, stock: 15 },
    { id: 7, sku: "SKU007", name: "Desk Lamp LED", price: 34.99, stock: 67 },
    { id: 8, sku: "SKU008", name: "Phone Charger", price: 19.99, stock: 120 },
    {
      id: 9,
      sku: "SKU009",
      name: "Headphones Wireless",
      price: 129.99,
      stock: 30,
    },
    { id: 10, sku: "SKU010", name: "Mouse Pad", price: 9.99, stock: 250 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  // Filter products based on search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Increase quantity if already in cart
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.15; // 15% tax
  const total = subtotal + tax;

  // Handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const receipt = {
      invoiceNumber: "INV-" + Math.floor(Math.random() * 100000),
      date: new Date().toLocaleString(),
      items: cart,
      subtotal,
      tax,
      total,
      paymentMethod,
    };

    setReceiptData(receipt);
    setShowReceipt(true);
  };

  // Close receipt and clear cart
  const handleCloseReceipt = () => {
    setShowReceipt(false);
    setCart([]);
    setReceiptData(null);
  };

  return (
    <div className="page">
      <h1 className="page-title">Point of Sale</h1>

      <div className="pos-container">
        {/* Left Panel - Product Selection */}
        <div className="pos-left">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <div className="section-title" style={{ margin: 0 }}>
              Products
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "300px",
                padding: "10px 16px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "14px",
                transition: "all 0.2s",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => addToCart(product)}
                >
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">
                    ${product.price.toFixed(2)}
                  </div>
                  <button className="btn-add">Add to Cart</button>
                </div>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "2rem",
                  color: "var(--muted-foreground)",
                }}
              >
                No products found
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Cart & Checkout */}
        <div className="pos-right">
          <div className="section-title">Cart</div>

          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: "1rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong>{item.name}</strong>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--danger)",
                        fontSize: "1.2rem",
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="btn-edit"
                        style={{ padding: "0.25rem 0.5rem" }}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="btn-edit"
                        style={{ padding: "0.25rem 0.5rem" }}
                      >
                        +
                      </button>
                    </div>
                    <span style={{ fontWeight: "bold" }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">Your cart is empty</div>
            )}
          </div>

          {cart.length > 0 && (
            <>
              <div className="cart-total">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span>Tax (15%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label
                    htmlFor="payment-method"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    Payment Method
                  </label>
                  <select
                    id="payment-method"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-select"
                  >
                    <option value="cash">Cash</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="mobile">Mobile Payment</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>
                </div>

                <button className="btn-checkout" onClick={handleCheckout}>
                  Complete Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Receipt Modal */}
      {showReceipt && receiptData && (
        <div className="modal-overlay" onClick={handleCloseReceipt}>
          <div className="receipt-modal" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-header">
              <h2>Receipt</h2>
              <button className="modal-close" onClick={handleCloseReceipt}>
                ×
              </button>
            </div>

            <div className="receipt-content">
              <div className="receipt-info">
                <div className="receipt-logo">
                  <h1>TakeALot</h1>
                  <p>Point of Sale System</p>
                </div>

                <div className="receipt-details">
                  <div className="receipt-row">
                    <span>Invoice #:</span>
                    <strong>{receiptData.invoiceNumber}</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Date:</span>
                    <strong>{receiptData.date}</strong>
                  </div>
                  <div className="receipt-row">
                    <span>Payment:</span>
                    <strong className="payment-badge">
                      {receiptData.paymentMethod.charAt(0).toUpperCase() +
                        receiptData.paymentMethod.slice(1).replace("-", " ")}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="receipt-divider"></div>

              <div className="receipt-items">
                <h3>Items Purchased</h3>
                {receiptData.items.map((item) => (
                  <div key={item.id} className="receipt-item">
                    <div className="receipt-item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">x{item.quantity}</span>
                    </div>
                    <div className="receipt-item-pricing">
                      <span className="item-unit">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="receipt-divider"></div>

              <div className="receipt-totals">
                <div className="receipt-total-row">
                  <span>Subtotal:</span>
                  <span>${receiptData.subtotal.toFixed(2)}</span>
                </div>
                <div className="receipt-total-row">
                  <span>Tax (15%):</span>
                  <span>${receiptData.tax.toFixed(2)}</span>
                </div>
                <div className="receipt-total-row grand-total">
                  <span>Total Paid:</span>
                  <span>${receiptData.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="receipt-footer">
                <p>Thank you for your purchase!</p>
                <p className="receipt-note">
                  Please keep this receipt for your records
                </p>
              </div>
            </div>

            <div className="receipt-actions">
              <button className="btn-primary" onClick={() => window.print()}>
                🖨️ Print Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default POS;
