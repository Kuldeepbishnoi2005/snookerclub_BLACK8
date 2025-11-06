import React from 'react';
import { Phone, Instagram, MapPin, CircleDot } from 'lucide-react';

function Footer({ onNavigate }: { onNavigate?: (section: string) => void }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                B8
              </div>
              <span className="text-white font-semibold text-xl">BLACK 8 Snooker Club</span>
            </div>
            <p className="text-neutral-400 mb-4">
              Experience premium snooker in a professional setting with top-quality tables and a welcoming atmosphere.
            </p>
            <div className="flex items-center gap-2 text-neutral-400">
              <CircleDot className="w-4 h-4 text-emerald-400" />
              <span>₹4 per minute | 2 Premium Tables</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'booking', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => onNavigate && onNavigate(section)}
                    className="text-neutral-400 hover:text-emerald-400 transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917049332283" className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" /> +91 70493 32283
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/black_8_snooker_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" /> @black_8_snooker_club
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/A9f6ANzMacNsb1Lc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  <MapPin className="w-4 h-4" /> View Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">© {currentYear} BLACK 8 Snooker Club. All rights reserved.</p>
          <p className="text-neutral-500 text-sm">Open Daily: 11:00 AM - 1:00 AM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
