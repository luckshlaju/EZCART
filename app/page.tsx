"use client";

import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function HomePage() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div>
          <img src="/logo.png" alt="LOGO" className="logo" />
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search products, brands and more" />
        </div>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#">Products</Link>

          {/* CART WITH BADGE */}
          <Link href="/cart" style={{ position: "relative" }}>
            Cart
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-10px",
                  background: "#ff3b3b",
                  color: "#ffffff",
                  fontSize: "0.7rem",
                  padding: "2px 6px",
                  borderRadius: "50%",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/account">Account</Link>
        </nav>
      </header>

      {/* CATEGORIES */}
      <section className="categories">
        <div className="category">Electronics</div>
        <div className="category">Fashion</div>
        <div className="category">Furniture</div>
        <div className="category">Beauty</div>
        <div className="category">Housewares</div>
      </section>

      {/* SLIDER */}
      <section className="slider">
        <div className="slides">
          <img src="/shoes.jpg" className="slide" />
          <img src="/cosmetics.png" className="slide" />
          <img src="/clothes.png" className="slide" />
          <img src="/electronics.png" className="slide" />

          <img src="/shoes.jpg" className="slide" />
          <img src="/cosmetics.png" className="slide" />
          <img src="/clothes.png" className="slide" />
          <img src="/electronics.png" className="slide" />
        </div>

        <div className="slider-arrows">
          <span>&#10094;</span>
          <span>&#10095;</span>
        </div>
      </section>

      {/* CHRISTMAS SPECIALS */}
      <section className="deal-section">
        <h2>Christmas Specials</h2>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-img">
              <img src="/shirts.png" className="product-img" />
            </div>
            <p>Shirts</p>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src="/pants.png" className="product-img" />
            </div>
            <p>Pants</p>
          </div>

          {/* SHOES CARD → PRODUCTS/SHOES */}
          <Link
            href="/products/shoes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="product-card" style={{ cursor: "pointer" }}>
              <div className="product-img">
                <img src="/sandlas.png" className="product-img" />
              </div>
              <p>Shoes</p>
            </div>
          </Link>

          <div className="product-card">
            <div className="product-img">
              <img src="/acces.png" className="product-img" />
            </div>
            <p>Accessories</p>
          </div>
        </div>
      </section>

      {/* NEW YEAR DEALS */}
      <section className="deal-section">
        <h2>New Year Deals</h2>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-img">
              <img src="/S1.jpg" className="product-img" />
            </div>
            <p>ARMANI EXCHANGE</p>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src="/S2.jpg" className="product-img" />
            </div>
            <p>HUGO BOSS</p>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src="/s3.jpg" className="product-img" />
            </div>
            <p>BVLGARI</p>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src="/S4.jpg" className="product-img" />
            </div>
            <p>ROLEX</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-bottom">
          <p>© 2025 EZCART. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
