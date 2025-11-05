import { CircleDot, Clock, MapPin, IndianRupee } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <CircleDot className="w-20 h-20 text-emerald-400 animate-spin-slow" style={{ animationDuration: '8s' }} />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight px-4">
            BLACK 8
            <span className="block text-emerald-400 mt-2">Snooker Club</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-12 max-w-2xl mx-auto px-4">
            Experience premium snooker in a professional setting with top-quality tables
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate('booking')}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
            >
              Book a Table
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-all border border-neutral-700"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-4 md:p-6 hover:border-emerald-500/50 transition-all">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 mx-auto mb-2 md:mb-3" />
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Opening Hours</h3>
              <p className="text-neutral-400 text-sm md:text-base">11:00 AM - 1:00 AM</p>
              <p className="text-neutral-500 text-xs md:text-sm mt-1">Daily</p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-4 md:p-6 hover:border-emerald-500/50 transition-all">
              <IndianRupee className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 mx-auto mb-2 md:mb-3" />
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Pricing</h3>
              <p className="text-neutral-400 text-sm md:text-base">₹4 per minute</p>
              <p className="text-neutral-500 text-xs md:text-sm mt-1">Per person</p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-4 md:p-6 hover:border-emerald-500/50 transition-all">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 mx-auto mb-2 md:mb-3" />
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Location</h3>
              <a
                href="https://maps.app.goo.gl/A9f6ANzMacNsb1Lc8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm md:text-base"
              >
                View on Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Our Premium <span className="text-emerald-400">Facilities</span>
        </h2>
        <p className="text-neutral-400 text-lg text-center max-w-2xl mx-auto mb-12">
          Discover the excellence of BLACK 8 Snooker Club
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative bg-neutral-800/50 border border-neutral-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
            <div className="aspect-square bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dx1hmda5v/image/upload/v1762355880/Snapchat-227645278_yx8bkp.jpg"
                alt="Premium snooker table"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">Professional Tables</h3>
            </div>
          </div>

          <div className="group relative bg-neutral-800/50 border border-neutral-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
            <div className="aspect-square bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dx1hmda5v/image/upload/v1762356645/iwcogl1zywrwgcpepeex.jpg"
                alt="Snooker balls and cue"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">Premium Equipment</h3>
            </div>
          </div>

          <div className="group relative bg-neutral-800/50 border border-neutral-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
            <div className="aspect-square bg-gradient-to-br from-emerald-900/40 to-teal-900/40 flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dx1hmda5v/image/upload/v1762357383/Screenshot_20251105_210740_WhatsApp_lwfkvz.jpg"
                alt="Club interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">Modern Ambiance</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
