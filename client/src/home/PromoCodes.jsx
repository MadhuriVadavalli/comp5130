// PromoCodes.jsx
import React from 'react';

const PromoCodes = () => {
  const promoCodes = [
    { code: 'BOOK2024', discount: '20%' },
    { code: 'AWARD15', discount: '15%' },
    { code: 'READ2024', discount: '10%' }
  ];

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-3xl font-bold mb-6'>Exclusive Promo Codes</h2>
      <div className='space-y-4'>
        {promoCodes.map((promo, index) => (
          <div key={index} className='bg-teal-200 p-4 rounded-md'>
            <p className='text-xl font-semibold'>{promo.code}</p>
            <p className='text-lg'>{promo.discount} off your next purchase</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCodes;
