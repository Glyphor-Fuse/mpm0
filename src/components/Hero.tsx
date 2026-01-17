import { ArrowRight, Lock, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            SYSTEM STATUS: OPERATIONAL
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Secure the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">
              Unseen
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Enterprise-grade threat detection powered by neural heuristics. 
            AEGIS protects your infrastructure before the first packet even hits your firewall.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-neon-cyan text-cyber-black font-bold rounded hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 group">
              Start Protection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded hover:bg-white/5 transition-all font-mono text-sm">
              npm install @aegis/core
            </button>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 font-mono pt-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-neon-green" />
              <span>SOC2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-neon-cyan" />
              <span>99.99% Uptime</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative hidden lg:block animate-float">
          {/* Main Card */}
          <div className="relative z-10 glass-panel rounded-xl overflow-hidden shadow-2xl shadow-neon-cyan/10">
             <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-auto text-[10px] font-mono text-slate-500">root@aegis-node-01:~</div>
             </div>
             <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex justify-between text-slate-400 border-b border-white/10 pb-2">
                  <span>TRAFFIC_ANALYSIS</span>
                  <span className="text-neon-cyan">ACTIVE</span>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between">
                      <span className="text-neon-purple">INBOUND_PACKETS</span>
                      <span className="text-white">8,492/s</span>
                   </div>
                   <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="h-full bg-neon-purple w-[75%] animate-pulse-slow" />
                   </div>
                </div>
                <div className="space-y-2">
                   <div className="flex justify-between">
                      <span className="text-neon-cyan">THREATS_BLOCKED</span>
                      <span className="text-white">142</span>
                   </div>
                   <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                      <div className="h-full bg-neon-cyan w-[12%]" />
                   </div>
                </div>
                <div className="pt-4 text-xs text-slate-500">
                  &gt; scanning ports... done<br/>
                  &gt; optimizing firewall rules... done<br/>
                  &gt; <span className="text-neon-green">system secure</span><span className="animate-pulse">_</span>
                </div>
             </div>
             
             {/* Scanline Effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-[20%] w-full animate-scan pointer-events-none" />
          </div>

          {/* Decorative Back Elements */}
          <div className="absolute -top-10 -right-10 w-full h-full border border-white/10 rounded-xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-full h-full border border-white/5 rounded-xl -z-20" />
        </div>

      </div>
    </section>
  );
}