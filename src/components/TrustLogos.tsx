export default function TrustLogos() {
  const brands = ["ACME Corp", "Stark Ind", "Cyberdyne", "Umbrella", "Massive Dynamic"];

  return (
    <section className="py-12 border-y border-white/5 bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-mono text-slate-500 mb-8">TRUSTED BY SECURITY TEAMS AT</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50">
          {brands.map((brand, i) => (
            <span key={i} className="text-xl font-bold font-mono text-white tracking-widest uppercase hover:text-neon-cyan hover:opacity-100 transition-all cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}