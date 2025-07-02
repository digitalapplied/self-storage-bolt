import React, { useState } from 'react';
import { Clock, Users } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  unitSize: string;
}

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    unitSize: '6x3'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We'll contact you within 30 minutes to confirm your reservation and answer any questions.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-emerald-700">
            <Clock className="w-4 h-4" />
            <span>Expected response time: 15-30 minutes</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="reserve" className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3">Reserve Your Unit</h2>
        <p className="text-gray-600">Secure your space in minutes</p>
      </div>

      <div className="flex items-center gap-3 mb-8 p-4 bg-emerald-50 rounded-xl">
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        <Users className="w-4 h-4 text-emerald-700" />
        <span className="text-emerald-800 font-medium text-sm">
          Limited availability • 21 special offer units remaining
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Contact Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="unitSize" className="block text-sm font-medium text-gray-700 mb-2">
            Select Unit Size
          </label>
          <select
            id="unitSize"
            name="unitSize"
            value={formData.unitSize}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-gray-50 focus:bg-white"
          >
            <option value="5x2">5m × 2m - R986/month (VAT incl.)</option>
            <option value="6x3">6m × 3m - R1,000/month (Special - Save R625)</option>
            <option value="9x3">9m × 3m - R2,374/month (VAT incl.)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-700/25 hover:transform hover:-translate-y-0.5"
        >
          Reserve This Unit
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;