import { Copy, Terminal } from 'lucide-react';

export default function TerminalSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 lg:order-1">
          <div className="rounded-xl overflow-hidden bg-[#0F1117] border border-white/10 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#161B22] border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="ml-4 text-xs font-mono text-slate-500">bash — 80x24</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm">
              <div className="flex gap-2 text-slate-300">
                <span className="text-neon-green">$</span>
                <span>npm install @aegis/shield</span>
              </div>
              <div className="text-slate-500 mt-2 mb-4">
                [+] Added 12 packages in 0.4s<br/>
                [+] Vulnerability scan: <span className="text-neon-green">0 issues found</span>
              </div>
              
              <div className="flex gap-2 text-slate-300">
                <span className="text-neon-green">$</span>
                <span>aegis init --mode=strict</span>
              </div>
              <div className="text-slate-500 mt-2">
                 > Detecting architecture... <span className="text-white">Next.js 14</span><br/>
                 > Injecting middleware... <span className="text-white">Done</span><br/>
                 > Establishing secure tunnel... <span className="text-neon-cyan">Connected</span>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-neon-green">$</span>
                <span className="w-2 h-4 bg-slate-500 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div className="w-12 h-12 rounded bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
            <Terminal className="w-6 h-6 text-neon-purple" />
          </div>
          <h2 className="text-4xl font-bold text-white">Security for Developers, <br />by Developers.</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Forget complex configurations and dashboard toggles. AEGIS integrates directly into your CI/CD pipeline and runtime environment with a single line of code.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded bg-white/5 border border-white/10">
              <div className="flex-1 font-mono text-sm text-neon-cyan">
                import { '{' } withAegis { '}' } from '@aegis/next';
              </div>
              <Copy className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}