import { useState } from 'react';
import { Calendar, Clock, Users, CircleDot, MessageCircle, IndianRupee } from 'lucide-react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    duration: '',
    persons: '',
    table: '1'
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'duration') {
      setEstimatedCost(parseInt(value) * 4 || 0);
    }
  };

  const handleBooking = () => {
    const message = `Hello! I'd like to book a table at BLACK 8 Snooker Club\n\n` +
      `Name: ${formData.name}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Duration: ${formData.duration} minutes\n` +
      `Number of Persons: ${formData.persons}\n` +
      `Table: Table ${formData.table}\n` +
      `Estimated Cost: ₹${estimatedCost}`;

    const whatsappUrl = `https://wa.me/917049332283?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = formData.name && formData.date && formData.time && formData.duration;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your <span className="text-emerald-400">Table</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg">
            Reserve your spot and enjoy premium snooker experience
          </p>
        </div>

        <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-4 sm:p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-neutral-300 font-medium mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Number of Persons
              </label>
              <input
                type="number"
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                placeholder="How many people?"
                min="1"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Duration (minutes)
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 60"
                min="15"
                step="15"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-medium mb-2">
                <CircleDot className="w-4 h-4 inline mr-2" />
                Select Table
              </label>
              <select
                name="table"
                value={formData.table}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <option value="1">Table 1</option>
                <option value="2">Table 2</option>
              </select>
            </div>
          </div>

          {formData.duration && (
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl p-4 sm:p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                  <div>
                    <div className="text-neutral-400 text-xs sm:text-sm">Estimated Cost</div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">₹{estimatedCost}</div>
                  </div>
                </div>
                <div className="text-left sm:text-right text-neutral-400">
                  <div className="text-xs sm:text-sm">Rate: ₹4/min</div>
                  <div className="text-xs sm:text-sm">{formData.duration} minutes</div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleBooking}
            disabled={!isFormValid}
            className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
              isFormValid
                ? 'bg-emerald-500 hover:bg-emerald-600 transform hover:scale-105 shadow-lg shadow-emerald-500/50'
                : 'bg-neutral-700 cursor-not-allowed opacity-50'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            Book via WhatsApp
          </button>

          <p className="text-neutral-500 text-sm text-center mt-4">
            You'll be redirected to WhatsApp to confirm your booking
          </p>
        </div>

        <div className="mt-8 bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            Booking Information
          </h3>
          <ul className="space-y-2 text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Open daily from 11:00 AM to 1:00 AM</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Minimum booking duration: 15 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Payment can be made at the club</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 mt-1">•</span>
              <span>Please arrive 5 minutes before your scheduled time</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Booking;
