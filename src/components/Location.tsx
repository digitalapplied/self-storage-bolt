import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pretoria Location
          </h2>
          <p className="text-xl text-gray-600">
            Conveniently situated with easy access from major routes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Visit Our Facility</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600">
                    189 Rooiberg Street, N4 Gateway<br />
                    Willow Park Manor X65, Pretoria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Contact</p>
                  <a href="tel:+27123861321" className="text-gray-600 hover:text-emerald-600 transition-colors">
                    +27 (012) 386-1321
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Access Hours</p>
                  <p className="text-gray-600">
                    Monday – Friday: 8:00 AM – 5:00 PM<br />
                    Saturday: 9:00 AM – 11:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <a
              href="https://maps.google.com/maps?q=Biddulphs+International+Pretoria+189+Rooiberg+Street"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-80 bg-emerald-600 flex items-center justify-center relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: 'url(https://www.biddulphs.co.za/wp-content/uploads/2021/11/self-storage-1.jpg)'
                  }}
                ></div>
                <div className="relative z-10 text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <p className="text-xl font-semibold mb-2">View Location on Map</p>
                  <div className="flex items-center justify-center gap-2 text-emerald-100">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Opens in Google Maps</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;