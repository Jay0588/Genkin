"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/values-quality", label: "Values & Quality" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-amber-400 flex justify-center items-center font-black text-slate-950">
            GE
          </span>
          <p className="text-xs tracking-widest text-slate-300 uppercase">Genkin Enterprises</p>
        </Link>

        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-amber-400 text-slate-200">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
