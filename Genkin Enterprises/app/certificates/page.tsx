import { SectionWrapper } from "@/components/SectionWrapper";

export default function CertificatesPage() {
  return (
    <SectionWrapper
      id="certificates"
      eyebrow="Accreditation & Compliance"
      title="Documentation and certifications available for verification."
    >
      <div className="space-y-4 text-sm text-slate-300">
        <p>
          We maintain updated certifications and full legal compliance to operate as a registered
          construction and engineering services provider.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 p-4 bg-slate-900/40 text-xs text-center text-slate-300">
            Company Registration Certificate
          </div>
          <div className="rounded-xl border border-slate-800 p-4 bg-slate-900/40 text-xs text-center text-slate-300">
            KRA PIN Certificate
          </div>
          <div className="rounded-xl border border-slate-800 p-4 bg-slate-900/40 text-xs text-center text-slate-300">
            Tax Compliance Certificate
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Additional documentation can be provided upon request for contract prequalification.
        </p>
      </div>
    </SectionWrapper>
  );
}
