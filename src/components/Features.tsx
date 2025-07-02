import React from 'react';
import { Shield, Calendar, Truck, Key } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Maximum Security',
      description: '24/7 CCTV monitoring with controlled access systems'
    },
    {
      icon: Calendar,
      title: 'Flexible Terms',
      description: 'Month-to-month contracts with no long-term commitments'
    },
    {
      icon: Key,
      title: 'Easy Access',
      description: 'Convenient hours and complimentary moving equipment'
    },
    {
      icon: Truck,
      title: 'Transport Solutions',
      description: 'Professional moving services at preferential rates'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Biddulphs
          </h2>
          <p className="text-xl text-gray-600">
            95 years of trusted storage and moving services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;