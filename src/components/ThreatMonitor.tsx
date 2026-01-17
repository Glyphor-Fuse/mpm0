import { Globe, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';

export default function ThreatMonitor() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-time Threat Intelligence</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our global network of sensors detects anomalies milliseconds after they appear. 
            Watch AEGIS neutralize threats across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-lg relative group hover:border-neon-cyan/30 transition-colors">
            <div className="absolute top-4 right-4">
              <Globe className="text-slate-600 group-hover:text-neon-cyan transition-colors" />
            </div>
            <div className="text-4xl font-mono font-bold text-white mb-2">2.4B</div>
            <div className="text-sm font-mono text-slate-400 uppercase tracking-wider">Requests Scanned</div>
            <div className="mt-4 h-16 flex items-end gap-1">
              {[40, 70, 45, 90, 60, 80, 50, 95, 30, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-white/10 hover:bg-neon-cyan transition-colors rounded-t-sm" />
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-lg relative group hover:border-neon-purple/30 transition-colors">
             <div className="absolute top-4 right-4">
              <AlertTriangle className="text-slate-600 group-hover:text-neon-purple transition-colors" />
            </div>
            <div className="text-4xl font-mono font-bold text-white mb-2">0ms</div>
            <div className="text-sm font-mono text-slate-400 uppercase tracking-wider">Latency Added</div>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500 font-mono">
               <span>AEGIS_EDGE_NODE</span>
               <span className="text-neon-green">OPTIMIZED</span>
            </div>
            <div className="mt-2 w-full bg-white/5 rounded-full h-2">
               <div className="w-[98%] h-full bg-gradient-to-r from-neon-purple to-blue-500 rounded-full" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-lg relative group hover:border-neon-green/30 transition-colors">
             <div className="absolute top-4 right-4">
              <ShieldCheck className="text-slate-600 group-hover:text-neon-green transition-colors" />
            </div>
            <div className="text-4xl font-mono font-bold text-white mb-2">100%</div>
            <div className="text-sm font-mono text-slate-400 uppercase tracking-wider">Uptime Guarantee</div>
            <div className="mt-4 grid grid-cols-5 gap-2">
               {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-neon-green/20 rounded-sm border border-neon-green/30 flex items-center justify-center">
                    <div className="w-1 h-1 bg-neon-green rounded-full" />
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}