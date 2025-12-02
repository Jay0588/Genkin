import { motion } from "framer-motion";

type Props = {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export const SectionWrapper = ({ id, title, eyebrow, children }: Props) => {
  return (
    <section id={id} className="border-b border-slate-900/60 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
};
