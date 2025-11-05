import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-900">
      <nav className="fixed top-0 w-full bg-neutral-900/95 backdrop-blur-sm z-50 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                B8
              </div>
              <span className="text-white font-semibold text-xl">BLACK 8</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'booking', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
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
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {activeSection === 'home' && <Hero onNavigate={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'booking' && <Booking />}
        {activeSection === 'contact' && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
