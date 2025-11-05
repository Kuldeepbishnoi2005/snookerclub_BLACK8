import { Phone, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            We're here to help! Reach out for bookings or inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+917049332283"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    +91 70493 32283
                  </a>
                  <p className="text-neutral-500 text-sm mt-1">Call or WhatsApp us</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/black_8_snooker_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    @black_8_snooker_club
                  </a>
                  <p className="text-neutral-500 text-sm mt-1">Follow us for updates</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Opening Hours</h3>
                  <p className="text-neutral-400">11:00 AM - 1:00 AM</p>
                  <p className="text-neutral-500 text-sm mt-1">Open every day</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-neutral-400 mb-2">BLACK 8 Snooker Club</p>
                  <a
                    href="https://maps.app.goo.gl/A9f6ANzMacNsb1Lc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View on Google Maps
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>

            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/917049332283"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30"
              >
                <MessageCircle className="w-6 h-6" />
                Message on WhatsApp
              </a>

              <a
                href="tel:+917049332283"
                className="flex items-center gap-3 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold px-6 py-4 rounded-lg transition-all"
              >
                <Phone className="w-6 h-6" />
                Call Us
              </a>

              <a
                href="https://www.instagram.com/black_8_snooker_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-4 rounded-lg transition-all"
              >
                <Instagram className="w-6 h-6" />
                Follow on Instagram
              </a>
            </div>

            <div className="border-t border-neutral-700 pt-6">
              <h4 className="text-white font-semibold mb-4">Find Us on Map</h4>
              <div className="relative bg-neutral-900 rounded-lg overflow-hidden border border-neutral-700">
                <a
                  href="https://maps.app.goo.gl/A9f6ANzMacNsb1Lc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-gradient-to-br from-emerald-900/40 to-teal-900/40 hover:from-emerald-800/60 hover:to-teal-800/60 transition-all flex items-center justify-center"
                >
                  <img
                    src="https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Map location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-all">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">Click to open directions</p>
                    </div>
                  </div>
                </a>
              </div>
              <p className="text-neutral-500 text-sm mt-2">
                Tap to view location on Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
