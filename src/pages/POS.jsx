import { useState } from "react";
import "../styles/POS.css";

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
    <div className="pos-page">
      <div className="pos-container">
        {/* Left Panel - Product Selection */}
        <div className="pos-left-panel">
          <div className="panel-header">
            <h2>Products</h2>
          </div>

          <div className="product-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products by name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => addToCart(product)}
                >
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p className="product-sku">{product.sku}</p>
                  </div>
                  <div className="product-details">
                    <span className="product-price">
                      ${product.price.toFixed(2)}
                    </span>
                    <span
                      className={`product-stock ${
                        product.stock < 20 ? "low" : ""
                      }`}
                    >
                      {product.stock} in stock
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No products found</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Cart & Checkout */}
        <div className="pos-right-panel">
          <div className="panel-header">
            <h2>Cart</h2>
            {cart.length > 0 && (
              <button className="clear-cart-btn" onClick={() => setCart([])}>
                Clear All
              </button>
            )}
          </div>

          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-header">
                    <h4>{item.name}</h4>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                  <div className="cart-item-details">
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 0)
                        }
                        min="0"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="item-pricing">
                      <span className="unit-price">
                        ${item.price.toFixed(2)} each
                      </span>
                      <span className="item-subtotal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
                <span>Add products from the left panel</span>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <>
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (15%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="payment-section">
                <label htmlFor="payment-method">Payment Method</label>
                <select
                  id="payment-method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="payment-select"
                >
                  <option value="cash">Cash</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="mobile">Mobile Payment</option>
                  <option value="bank-transfer">Bank Transfer</option>
                </select>
              </div>

              <button className="checkout-btn" onClick={handleCheckout}>
                <span className="checkout-icon">💳</span>
                Checkout - ${total.toFixed(2)}
              </button>
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
              <button className="btn-secondary" onClick={handleCloseReceipt}>
                Close
              </button>
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
