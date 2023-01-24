import React from 'react';
import { HiOutlineChartBar, HiOutlineShoppingBag } from 'react-icons/hi';

export default function DashboardBoxes() {
  return (
    <div className='flex space-x-4'>
      <div className='bg-blue-500 p-5 grow gap-4 flex items-center text-gray-400 rounded-br-xl rounded-tl-xl'>
        <HiOutlineChartBar size={35} />
        <div>
          <h2 className='font-bold text-2xl leading-4'>$345</h2>
          <h3>Profit today</h3>
        </div>
      </div>{' '}
      <div className='bg-red-300 grow p-5 gap-4 flex items-center text-gray-400 rounded-bl-xl rounded-tr-xl'>
        <HiOutlineShoppingBag size={35} />
        <div>
          <h2 className='font-bold text-2xl leading-4'>1345</h2>
          <h3>Orders Today</h3>
        </div>
      </div>
    </div>
  );
}
