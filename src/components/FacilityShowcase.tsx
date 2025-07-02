import React from 'react';
import { CheckCircle } from 'lucide-react';

const FacilityShowcase: React.FC = () => {
  const features = [
    'Individual unit alarms and 24/7 CCTV surveillance',
    'Wide corridors for easy vehicle access',
    'Professional on-site management team',
    'Complimentary trolleys and moving equipment'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://www.biddulphs.co.za/wp-content/uploads/2021/11/self-storage-1.jpg"
                alt="Biddulphs Self Storage Units - Clean, secure storage facility"
                className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Where Security Meets Convenience
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our Pretoria facility offers premium storage solutions with maximum security and easy accessibility. 
              With over 95 years of trusted experience, Biddulphs provides the peace of mind you deserve.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-200 transition-colors">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityShowcase;