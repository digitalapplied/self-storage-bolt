import React from 'react';

const CTA: React.FC = () => {
  const scrollToReserve = () => {
    const element = document.getElementById('reserve');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-emerald-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Secure Your Storage?
        </h2>
        <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
          Join thousands of satisfied customers across South Africa who trust Biddulphs 
          with their valuable possessions.
        </p>
        
        <button
          onClick={scrollToReserve}
          className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-2xl"
        >
          Reserve Your Unit Today
        </button>
        
        <p className="text-emerald-200 text-sm mt-6">
          🔒 Secure reservation • 💬 30-minute response guarantee
        </p>
      </div>
    </section>
  );
};

export default CTA;