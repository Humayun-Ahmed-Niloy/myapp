import React from 'react';
import mockData from '../../dataStorage/mockData';

const Card = () => {
  return (
    <div className="mt-10 p-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Cards</h2>
      <div className="flex flex-wrap -mx-4">
        {mockData.map((card) => (
          <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover" src={card.imageUrl} alt={card.title} />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
