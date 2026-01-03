"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, decreaseQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px", color: "#ffffff" }}>


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >

        <h2 style={{ color: "#7c7cff" }}>Your Cart</h2>


        <Link href="/" style={{ color: "#00f5ff", textDecoration: "none" }}>
          Home →
        </Link>
      </div>


      {cart.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            color: "#b0b3c5",
          }}
        >
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some products to see them here</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#12172a",
                padding: "16px",
                borderRadius: "12px",
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  background: "#1a2038",
                }}
              />


              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: "6px" }}>
                  {item.name}
                </h4>
                <p>₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>


              <div style={{ display: "flex", gap: "10px" }}>
                {item.quantity > 1 && (
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                      background: "#444",
                      color: "#fff",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>
                )}

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "#ff4d4d",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}


          <h3 style={{ marginTop: "20px" }}>
            Total: ₹{total}
          </h3>
        </>
      )}
    </div>
  );
}
