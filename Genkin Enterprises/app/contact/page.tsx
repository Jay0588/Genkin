"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SectionWrapper
      id="contact-page"
      eyebrow="Get in touch"
      title="Send us a message or request a quotation."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="grid gap-4 max-w-xl"
      >
        <input
          required
          placeholder="Your Name"
          className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-2 text-sm"
        />
        <input
          required
          type="email"
          placeholder="Your Email"
          className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-2 text-sm"
        />
        <textarea
          required
          placeholder="Message"
          className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-2 text-sm h-32"
        />
        <button
          type="submit"
          className="rounded-full bg-amber-400 text-slate-950 font-semibold text-xs uppercase tracking-[0.16em] py-2"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-xs text-amber-300">
          Thank you — We will contact you soon.
        </p>
      )}

      <p className="mt-10 text-sm text-slate-400">
        Email: genkinenterprises@gmail.com
        <br />
        Phone: +254 719 613 475 / +254 717 904 242
      </p>
    </SectionWrapper>
  );
}
