"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("nexovia-theme") || "dark";
    setTheme(saved);
    if (saved === "light") document.documentElement.classList.add("light");
    else document.documentElement.classList.remove("light");
  }, []);

  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("nexovia-theme", newTheme);
    document.documentElement.classList.toggle("light");
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className="p-2 rounded-full hover:bg-surface/50 transition-colors text-muted hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}