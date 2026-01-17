import { Shield, Menu, X, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-cyber-black/80 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <Shield className="w-8 h-8 text-neon-cyan transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-neon-cyan blur-lg opacity-40" />
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter text-white">AEGIS</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Platform', 'Solutions', 'Developers', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium hover:text-neon-cyan transition-colors">
              {item}
            </a>
          ))}
          <button className="flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all rounded text-sm font-mono text-white group">
            <Terminal className="w-4 h-4 group-hover:text-neon-cyan" />
            <span>GET ACCESS</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-cyber-dark border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          {['Platform', 'Solutions', 'Developers', 'Pricing'].map((item) => (
            <a key={item} href="#" className="text-lg font-mono hover:text-neon-cyan">
              {`> ${item}`}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}