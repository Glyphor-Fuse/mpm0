import { Lock, Fingerprint, Eye, Server, Code2, Network } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "Military-grade AES-256 encryption for data at rest and in transit.",
    color: "text-neon-cyan"
  },
  {
    icon: Eye,
    title: "AI Anomaly Detection",
    desc: "Machine learning models trained on billions of requests to spot zero-day exploits.",
    color: "text-neon-purple"
  },
  {
    icon: Fingerprint,
    title: "Biometric Auth",
    desc: "Seamless integration with hardware keys, FaceID, and TouchID standards.",
    color: "text-neon-green"
  },
  {
    icon: Server,
    title: "Edge Computing",
    desc: "Logic runs on the edge, closer to your users, reducing attack surface area.",
    color: "text-blue-400"
  },
  {
    icon: Code2,
    title: "API-First Design",
    desc: "Built for developers. Fully documented GraphQL and REST APIs.",
    color: "text-pink-400"
  },
  {
    icon: Network,
    title: "DDoS Mitigation",
    desc: "Automatic absorption of volumetric attacks across our 200+ PoPs.",
    color: "text-yellow-400"
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-cyber-dark/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Defense in Depth</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive security suite designed to replace multiple fragmented tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-cyber-slate/50 border border-white/5 hover:border-white/10 hover:bg-cyber-slate transition-all duration-300">
              <div className={`mb-6 p-3 w-fit rounded-lg bg-white/5 ${f.color} group-hover:scale-110 transition-transform duration-300`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}