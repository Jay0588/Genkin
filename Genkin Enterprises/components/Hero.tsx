"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative bg-slate-950 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Structures that endure.
          <span className="text-amber-300"> Craftsmanship that shows.</span>
        </motion.h1>

        <p className="text-slate-400 mt-4 text-sm">
          We deliver villas, schools, hotels and commercial spaces with strict quality control.
        </p>

        <div className="flex gap-4 mt-6">
          <Link href="/projects" className="bg-amber-400 text-slate-950 px-6 py-2 rounded-full text-xs">
            View Projects
          </Link>
          <Link href="/contact" className="border border-amber-300 text-amber-300 px-6 py-2 rounded-full text-xs">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};
