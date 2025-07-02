import React from 'react';
import ReservationForm from './ReservationForm';
import { CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <img 
          src="https://www.biddulphs.co.za/wp-content/uploads/2021/11/self-storage-1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:pr-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional Self Storage in 
              <span className="text-emerald-700"> Pretoria</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Secure, accessible storage solutions from South Africa's most trusted moving company with 95+ years of experience.
            </p>
            
            {/* Special Offer */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold text-gray-900">Limited Time: 6×3m Unit Special</h3>
              </div>
              
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-2xl text-gray-400 line-through">R1,625</span>
                <span className="text-4xl font-bold text-emerald-700">R1,000</span>
                <span className="text-gray-600">/month</span>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">VAT inclusive • Save R625 monthly</p>
              
              <div className="bg-emerald-50 p-4 rounded-xl">
                <p className="text-emerald-800 font-medium text-center">
                  🎯 Only 21 units available at this special price
                </p>
              </div>
            </div>

            {/* Trust Features */}
            <div className="space-y-4">
              <p className="font-medium text-gray-900 mb-4">Why choose Biddulphs:</p>
              {[
                '24/7 security monitoring and access control',
                'Month-to-month flexible contracts',
                'Complimentary moving equipment',
                'Professional transport services available'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;