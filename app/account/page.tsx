"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function AccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login EZCART</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button onClick={handleLogin} style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={styles.switchText}>
          No account?{" "}
          <Link href="/signup" style={styles.link}>
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0b0f1a",
  },
  card: {
    background: "#12172a",
    padding: "32px",
    borderRadius: "16px",
    width: "340px",
    textAlign: "center",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "12px 0",
    borderRadius: "10px",
    border: "none",
    background: "#1a2038",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "14px",
    borderRadius: "10px",
    border: "none",
    background: "#00f5ff",
    color: "#000",
    fontWeight: "600",
    cursor: "pointer",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "0.85rem",
  },
  switchText: {
    marginTop: "18px",
    fontSize: "0.85rem",
    color: "#b0b3c5",
  },
  link: {
    color: "#00f5ff",
    textDecoration: "none",
  },
};
