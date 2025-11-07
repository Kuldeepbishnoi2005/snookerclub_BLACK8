import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <nav className="fixed top-0 w-full bg-neutral-900/95 backdrop-blur-sm z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-[9.8rem] h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
  SNOOKER CLUB
</div>
              <span className="text-white font-semibold text-xl">BLACK 8</span>
            </button>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'booking', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-emerald-400'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-emerald-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <div className="px-4 py-3 space-y-1">
              {['home', 'about', 'booking', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-colors ${
                    activeSection === section
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {activeSection === 'home' && <Hero onNavigate={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'booking' && <Booking />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
