import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Projects Delivered", value: "120+" },
  { label: "On-Time Delivery", value: "96%" },
  { label: "Repeat Clients", value: "80%" },
];

export const StatsStrip = () => {
  return (
    <section className="border-y border-slate-900 bg-slate-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 py-8 md:grid-cols-4">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border-slate-900 first:border-l-0 border-l md:first:border-l md:border-l"
          >
            <div className="px-3 py-3 md:px-4 md:py-4">
              <p className="text-xl font-semibold text-amber-400 md:text-2xl">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
