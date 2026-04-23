"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";


const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Réalisations" },
  //{ href: "/events", label: "Événements" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 20));
  }

  return (
    <header className={cn(
      "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-6 py-3 border border-transparent",
      scrolled ? "glass shadow-lg shadow-black/20 w-11/12 max-w-5xl" : "bg-transparent w-11/12 max-w-5xl"
    )}>
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="gradient-text">Nex</span>ovia
        </Link>
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>


        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <button className="bg-accent/10 hover:bg-accent/20 text-accent px-5 py-2 rounded-full text-sm font-medium transition-all border border-accent/30">
              Book a Call
            </button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 p-6 glass rounded-xl flex flex-col gap-4 text-center"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-muted hover:text-white">
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}