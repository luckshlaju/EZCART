"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useCart } from "@/app/context/CartContext";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ShoesPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // UI feedback state
  const [addedId, setAddedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchShoes = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("category", "shoes");

      if (data) setProducts(data);
      setLoading(false);
    };

    fetchShoes();
  }, []);

  const handleAdd = async (product: Product) => {
    // INSTANT FEEDBACK
    setAddedId(product.id);

    // DB action
    await addToCart(product);

    // Reset button after delay
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  if (loading) {
    return (
      <div style={{ padding: "40px", color: "#b0b3c5" }}>
        Loading shoes...
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      {/* TOP NAV */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Link href="/" style={{ color: "#00f5ff", textDecoration: "none" }}>
          ← Home
        </Link>

        <Link href="/cart" style={{ color: "#00f5ff", textDecoration: "none" }}>
          Go to Cart →
        </Link>
      </div>

      <h2 style={{ marginBottom: "20px", color: "#7c7cff" }}>
        Shoes
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#12172a",
              padding: "16px",
              borderRadius: "14px",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <img
              src={product.image}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h4 style={{ margin: "10px 0" }}>{product.name}</h4>
            <p>₹{product.price}</p>

            <button
              onClick={() => handleAdd(product)}
              disabled={addedId === product.id}
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "100%",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
                background:
                  addedId === product.id ? "#22c55e" : "#00f5ff",
                color: "#000",
              }}
            >
              {addedId === product.id ? "Added ✓" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
