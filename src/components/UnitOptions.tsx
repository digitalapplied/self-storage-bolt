import React from 'react';

interface UnitCardProps {
  dimensions: string;
  price: string;
  isSpecial?: boolean;
  availability: string;
  availabilityColor: string;
  idealFor: string[];
  originalPrice?: string;
}

const UnitCard: React.FC<UnitCardProps> = ({
  dimensions,
  price,
  isSpecial = false,
  availability,
  availabilityColor,
  idealFor,
  originalPrice
}) => {
  return (
    <div className={`relative p-8 rounded-3xl transition-all duration-300 hover:shadow-xl ${
      isSpecial 
        ? 'bg-white border-2 border-emerald-600 shadow-lg hover:shadow-emerald-600/20' 
        : 'bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-200'
    }`}>
      {isSpecial && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            SPECIAL OFFER
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{dimensions}</h3>
        <div className={`text-4xl font-bold mb-2 ${isSpecial ? 'text-emerald-600' : 'text-gray-900'}`}>
          {price}
        </div>
        <p className="text-gray-500 text-sm">per month, VAT included</p>
        
        {originalPrice && (
          <p className="text-xl text-gray-400 line-through mt-2">Regular: {originalPrice}</p>
        )}
        
        <p className={`text-sm font-medium mt-3 ${availabilityColor}`}>
          {availability}
        </p>
      </div>
      
      <div>
        <p className="font-medium text-gray-900 mb-3">Ideal for:</p>
        <ul className="space-y-2">
          {idealFor.map((item, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const UnitOptions: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Storage Unit Options
          </h2>
          <p className="text-xl text-gray-600">
            Professional storage solutions with transparent, VAT-inclusive pricing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <UnitCard
            dimensions="5m × 2m"
            price="R986"
            availability="13 units available"
            availabilityColor="text-emerald-600"
            idealFor={[
              'Studio or 1-bedroom contents',
              'Seasonal equipment storage',
              'Small business inventory',
              'Personal collections'
            ]}
          />
          
          <UnitCard
            dimensions="6m × 3m"
            price="R1,000"
            originalPrice="R1,625"
            isSpecial={true}
            availability="21 units at special price"
            availabilityColor="text-orange-600"
            idealFor={[
              '2-bedroom home contents',
              'Vehicle storage',
              'Business equipment',
              'Office furniture'
            ]}
          />
          
          <UnitCard
            dimensions="9m × 3m"
            price="R2,374"
            availability="Only 4 units left"
            availabilityColor="text-red-600"
            idealFor={[
              '3+ bedroom house',
              'Large inventory storage',
              'Multiple vehicles',
              'Commercial goods'
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default UnitOptions;