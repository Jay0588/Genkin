import { SectionWrapper } from "@/components/SectionWrapper";

export default function AboutPage() {
  return (
    <>
      <SectionWrapper
        id="about"
        eyebrow="Who we are"
        title="A foundation built on engineering, quality and trust."
      >
        <p className="text-sm text-slate-300 leading-relaxed">
          Genkin Enterprises is a service-oriented construction company specializing in civil 
          engineering and general building. We deliver outstanding customer service, superior
          finishing standards, and reliable delivery schedules.
        </p>

        <p className="text-sm text-slate-300 leading-relaxed mt-4">
          Our engineers and craftsmen bring hands-on experience with proven industry-leading results.
          We combine modern technique, strong project management, and high-quality materials to ensure
          every project is executed with precision and efficiency.
        </p>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Philosophy"
        title="Integrity. Accuracy. Safety. Accountability."
      >
        <ul className="text-sm text-slate-400 space-y-3 list-disc pl-5">
          <li>Minimize environmental impact through responsible execution</li>
          <li>Uphold engineering integrity and safety at every stage</li>
          <li>Empower the community and support local workforce</li>
          <li>Maintain highest quality standards and finishing excellence</li>
          <li>Prioritize accuracy, punctuality, and transparency</li>
        </ul>
      </SectionWrapper>
    </>
  );
}
