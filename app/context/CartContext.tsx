"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type CartItem = {
  id: string;
  product_id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type Product = {
  id: string | number;
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  decreaseQuantity: (cartItemId: string) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);


  const fetchCart = async () => {
    const { data } = await supabase
      .from("cart_items")
      .select(
        `id, product_id, quantity, product:products(id, name, price, image)`
      );

    if (data) {
      const flattened: CartItem[] = (data as any[]).map((d) => {
        const prod = Array.isArray(d.product) ? d.product[0] : d.product;
        return {
          id: String(d.id),
          product_id: String(d.product_id),
          name: prod?.name ?? "",
          price: Number(prod?.price ?? 0),
          image: prod?.image ?? "",
          quantity: Number(d.quantity ?? 0),
        };
      });
      setCart(flattened);
    } else {
      setCart([]);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product: any) => {

  const { data: existing } = await supabase
    .from("cart_items")
    .select("id, quantity")
    .eq("product_id", product.id)
    .single();

  if (existing) {
    await supabase
      .from("cart_items")
      .update({ quantity: existing.quantity + 1 })
      .eq("id", existing.id);
  } else {
    await supabase.from("cart_items").insert({
      product_id: product.id,
      quantity: 1,
    });
  }


  fetchCart();
};


  const decreaseQuantity = async (cartItemId: string) => {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (item.quantity > 1) {
      await supabase
        .from("cart_items")
        .update({ quantity: item.quantity - 1 })
        .eq("id", cartItemId);
    } else {
      await supabase.from("cart_items").delete().eq("id", cartItemId);
    }

    await fetchCart();
  };

  const removeFromCart = async (cartItemId: string) => {
    await supabase.from("cart_items").delete().eq("id", cartItemId);
    await fetchCart();
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
