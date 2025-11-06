import { Target, Users, Trophy, Clock } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">BLACK 8</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Your premier destination for professional snooker in a world-class environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              BLACK 8 Snooker Club is dedicated to providing an exceptional snooker experience. With two premium tables maintained to professional standards, we offer the perfect environment for both casual players and serious competitors.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Whether you're practicing your skills, enjoying a game with friends, or looking for a competitive match, our club provides the ideal setting with a professional atmosphere and top-notch facilities.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <Target className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Professional Tables</h4>
              <p className="text-neutral-400">
                Two premium snooker tables maintained to the highest standards for optimal play experience
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <Users className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Welcoming Atmosphere</h4>
              <p className="text-neutral-400">
                A friendly environment perfect for players of all skill levels
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <Trophy className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Competitive Spirit</h4>
              <p className="text-neutral-400">
                Host your tournaments or casual matches in our professional setting
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">₹4</div>
              <div className="text-neutral-300 font-medium">Per Minute</div>
              <div className="text-neutral-500 text-sm mt-1">Transparent Pricing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">2</div>
              <div className="text-neutral-300 font-medium">Premium Tables</div>
              <div className="text-neutral-500 text-sm mt-1">Professional Grade</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-emerald-400 mb-2" />
              <div className="text-neutral-300 font-medium">11 AM - 1 AM</div>
              <div className="text-neutral-500 text-sm mt-1">Open Daily</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
