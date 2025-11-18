function POS() {
  return (
    <div className="page">
      <h1 className="page-title">POS / Billing</h1>
      
      <div className="pos-container">
        <div className="pos-left">
          <h3 className="section-title">Product Selection</h3>
          <div className="product-grid">
            <div className="product-card">
              <h4 className="product-name">Wireless Mouse</h4>
              <p className="product-price">$50.00</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <h4 className="product-name">Keyboard</h4>
              <p className="product-price">$75.00</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <h4 className="product-name">USB-C Hub</h4>
              <p className="product-price">$100.00</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <h4 className="product-name">Monitor Stand</h4>
              <p className="product-price">$95.00</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <h4 className="product-name">Laptop Sleeve</h4>
              <p className="product-price">$45.00</p>
              <button className="btn-add">Add to Cart</button>
            </div>
            <div className="product-card">
              <h4 className="product-name">Webcam</h4>
              <p className="product-price">$120.00</p>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>
        </div>
        
        <div className="pos-right">
          <h3 className="section-title">Shopping Cart</h3>
          <div className="cart-items">
            <p className="empty-cart">No items in cart</p>
          </div>
          <div className="cart-total">
            <h4>Total: $0.00</h4>
            <button className="btn-checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default POS;