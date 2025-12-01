"use client";

import React, { useState, useEffect } from "react";
import UploadReplay from "./UploadReplay";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("staffLoggedIn");
    if (stored === "true") setLoggedIn(true);
  }, []);

  const handleLogin = async () => {
    if (!password) return alert("Enter password");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    if (data.success) {
      localStorage.setItem("staffLoggedIn", "true");
      setLoggedIn(true);
      setPassword("");
    } else {
      alert("Wrong password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("staffLoggedIn");
    setLoggedIn(false);
  };

  if (!loggedIn)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
        <div className="bg-red-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md text-center border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">NCL Mod Login</h2>

          <input
            type="password"
            placeholder="Enter staff password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg mb-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-semibold shadow-md transition-transform transform hover:-translate-y-1"
          >
            Log in
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
        >
          Sign Out
        </button>
      </div>
      <div className="w-full max-w-xl">
        <UploadReplay />
      </div>
    </div>
  );
}