import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, Globe } from 'lucide-react';
import { useState } from 'react';

export function CalendlyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '14:00', '15:30', '16:00'];

  const handleBook = () => {
    setIsBooked(true);
    setTimeout(() => {
      onClose();
      setIsBooked(false);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row min-h-[500px]"
          >
            {/* Left side - Event Info */}
            <div className="bg-white p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-gray-500 font-semibold text-sm mb-2">EGIS</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Discovery Call</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span>Web conferencing details provided upon confirmation.</span>
                </div>
              </div>
              <p className="mt-6 text-gray-600 text-sm leading-relaxed">
                Book a time to discuss how we can help your organization with ISO certification and compliance.
              </p>
            </div>

            {/* Right side - Calendar & Times */}
            <div className="bg-white p-8 md:w-2/3 relative flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 hidden md:block text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>

              {isBooked ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CalendarIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">You are scheduled</h3>
                  <p className="text-gray-600">A calendar invitation has been sent to your email address.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Select a Date & Time</h3>
                  <div className="flex flex-col md:flex-row gap-8 flex-1">
                    {/* Calendar placeholder */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-gray-900">July 2026</span>
                        <div className="flex gap-2 text-gray-400">
                          <button className="hover:bg-gray-100 p-1 rounded-full">&lt;</button>
                          <button className="hover:bg-gray-100 p-1 rounded-full">&gt;</button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-medium text-gray-500">
                        <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}
                        {days.map((day) => (
                          <button
                            key={day}
                            onClick={() => setSelectedDate(day)}
                            className={`aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                              selectedDate === day
                                ? 'bg-blue-600 text-white'
                                : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time slots */}
                    <div className="w-full md:w-48 overflow-y-auto max-h-[300px] md:max-h-none border-t md:border-t-0 pt-6 md:pt-0">
                      {selectedDate ? (
                        <div className="space-y-2">
                          <p className="text-gray-900 font-medium mb-4">Tuesday, July {selectedDate}</p>
                          {times.map((time) => (
                            <div key={time} className="flex gap-2">
                              <button
                                onClick={() => setSelectedTime(time)}
                                className={`flex-1 py-3 border rounded-md text-sm font-medium transition-all ${
                                  selectedTime === time
                                    ? 'border-gray-800 bg-gray-800 text-white w-1/2'
                                    : 'border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700'
                                }`}
                              >
                                {time}
                              </button>
                              {selectedTime === time && (
                                <button
                                  onClick={handleBook}
                                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md transition-colors"
                                >
                                  Next
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                          Select a date to view available times.
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
