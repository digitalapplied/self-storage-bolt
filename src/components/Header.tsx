import React from 'react';

const Header: React.FC = () => {
  const scrollToReserve = () => {
    const element = document.getElementById('reserve');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://www.biddulphs.co.za/wp-content/uploads/2021/12/Biddulphs-International-Logo.svg" 
              alt="Biddulphs International" 
              className="h-10 w-auto"
            />
          </div>
          <button
            onClick={scrollToReserve}
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-emerald-700/25"
          >
            Reserve Unit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;