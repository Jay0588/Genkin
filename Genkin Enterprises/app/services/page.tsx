import { SectionWrapper } from "@/components/SectionWrapper";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <SectionWrapper
      id="services-page"
      eyebrow="What we specialize in"
      title="Comprehensive construction and civil engineering solutions."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="text-sm font-semibold text-slate-50">
              {service.title}
            </h3>
            <p className="mt-2 text-xs text-slate-400">{service.description}</p>
            <ul className="mt-3 list-disc pl-5 text-xs text-slate-400 space-y-1">
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
