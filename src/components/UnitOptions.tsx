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
    <div className={`relative p-6 lg:p-8 rounded-3xl ${
      isSpecial 
        ? 'bg-white border-2 border-emerald-500 shadow-lg' 
        : 'bg-gray-50 border border-gray-200'
    }`}>
      {isSpecial && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-3xl">
          SPECIAL
        </div>
      )}
      
      <div className="text-center mb-4 lg:mb-6">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dimensions}</h3>
        <div className={`text-3xl lg:text-4xl font-bold mb-2 ${isSpecial ? 'text-emerald-600' : 'text-gray-900'}`}>
          {price}
        </div>
        <p className="text-gray-500 text-sm">per month, VAT included</p>
        
        {originalPrice && (
          <p className="text-lg lg:text-xl text-gray-400 line-through mt-2">Regular: {originalPrice}</p>
        )}
        
        <p className={`text-xs lg:text-sm font-medium mt-3 ${availabilityColor}`}>
          {availability}
        </p>
      </div>
      
      <div>
        <p className="font-medium text-gray-900 mb-3 text-sm lg:text-base">Ideal for:</p>
        <ul className="space-y-1.5 lg:space-y-2">
          {idealFor.map((item, index) => (
            <li key={index} className="text-gray-600 text-xs lg:text-sm flex items-start gap-2">
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Storage Unit Options
          </h2>
          <p className="text-xl text-gray-600">
            Professional storage solutions with transparent, VAT-inclusive pricing
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <UnitCard
            dimensions="5m × 2m"
            price="R986"
            availability="14 units available"
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
            price="R999"
            isSpecial={true}
            availability="22 units at special price"
            availabilityColor="text-orange-600"
            idealFor={[
              '2-bedroom home contents',
              'Vehicle storage',
              'Business equipment',
              'Office furniture'
            ]}
          />
          
          <UnitCard
            dimensions="6m × 5m"
            price="R2,374"
            availability="Only 1 unit left"
            availabilityColor="text-red-600"
            idealFor={[
              'Large household contents',
              'Business inventory',
              'Multiple room storage',
              'Commercial equipment'
            ]}
          />
          
          <UnitCard
            dimensions="9m × 3m"
            price="R2,374"
            availability="Only 3 units left"
            availabilityColor="text-red-600"
            idealFor={[
              '3+ bedroom house contents',
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