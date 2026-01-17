import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cyber-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-neon-cyan" />
            <span className="font-mono font-bold text-white text-lg">AEGIS</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Building the immune system of the internet. We protect the world's most critical data.
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-white font-bold mb-6">PRODUCT</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-white font-bold mb-6">RESOURCES</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-white font-bold mb-6">LEGAL</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-sm">© 2024 Aegis Security Inc. All rights reserved.</p>
        <div className="flex gap-6">
           {/* Socials placeholders */}
           <div className="w-5 h-5 bg-slate-700 rounded-full hover:bg-neon-cyan cursor-pointer transition-colors" />
           <div className="w-5 h-5 bg-slate-700 rounded-full hover:bg-neon-cyan cursor-pointer transition-colors" />
           <div className="w-5 h-5 bg-slate-700 rounded-full hover:bg-neon-cyan cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}