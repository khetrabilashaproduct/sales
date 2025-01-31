const HomePageUI = ({ products, search, setSearch }) => {
  return (
    <div className="container">
      <header className="header">
        <h1>Computer Parts Hub</h1>
        <p>Your one-stop solution for quality computer parts and repairs</p>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          Welcome to Computer Parts Hub! With years of experience in computer and laptop repair, we provide high-quality services and sell reliable computer parts at affordable prices.
        </p>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">₹{product.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Computer Parts Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePageUI;