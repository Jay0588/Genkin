import { SectionWrapper } from "@/components/SectionWrapper";

export default function ValuesQualityPage() {
  return (
    <SectionWrapper
      id="values-quality"
      eyebrow="Our Commitment"
      title="Quality built into every detail."
    >
      <p className="text-sm text-slate-300 leading-relaxed">
        Our work is guided by shared values: integrity, teamwork, respect, craftsmanship, empowerment
        and professional accountability. We believe that lasting structures begin with uncompromised
        planning, passionate workmanship and strict quality standards.
      </p>

      <p className="text-sm text-slate-300 leading-relaxed mt-4">
        Each project undergoes rigorous quality assessment to ensure durability, safety and a lasting
        legacy. We combine modern construction methods and proven engineering principles to deliver
        exceptional results.
      </p>
    </SectionWrapper>
  );
}
