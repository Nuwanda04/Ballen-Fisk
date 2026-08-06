export const SectionAtmosphere = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-grid-pattern opacity-70" />

    <div className="section-atmosphere-glow absolute inset-0">
      <div className="absolute left-0 top-0 h-[520px] w-[600px] rounded-full bg-[#5FA8D3]/[0.14] blur-[110px]" />
      <div className="absolute right-0 top-0 h-[480px] w-[520px] rounded-full bg-[#3E92CC]/[0.12] blur-[100px]" />
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[720px] -translate-x-1/2 rounded-full bg-[#2A7AB8]/[0.08] blur-[115px]" />
      <div className="absolute left-1/2 top-2/3 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-[#5FA8D3]/[0.10] blur-[115px]" />
      <div className="absolute bottom-1/3 left-0 h-[440px] w-[440px] rounded-full bg-[#1C2541]/[0.07] blur-[95px]" />
      <div className="absolute bottom-0 right-0 h-[440px] w-[520px] rounded-full bg-[#3E92CC]/[0.10] blur-[105px]" />
    </div>
  </div>
);
