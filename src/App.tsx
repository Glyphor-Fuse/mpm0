import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreatMonitor from './components/ThreatMonitor';
import FeatureGrid from './components/FeatureGrid';
import TerminalSection from './components/TerminalSection';
import TrustLogos from './components/TrustLogos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cyber-black font-sans">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-neon-cyan/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TrustLogos />
          <ThreatMonitor />
          <FeatureGrid />
          <TerminalSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;