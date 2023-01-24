import React, { useEffect, useState } from 'react';

import DashboardBoxes from './DashboardBoxes';
import SalesStats from './SalesStats';

export default function Dashboard() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  });

  // Todo
  // *Create a seperate products components to render products

  return (
    <main className='p-5 grow bg-white my-4 mr-4 rounded-2xl'>
      <h1 className='py-2 text-gray-700 text-lg font-light'>
        Welcome, <b>Agent Tango</b>
      </h1>
      <div className='flex gap-5'>
        <div>
          {' '}
          <DashboardBoxes />
          {domLoaded && <SalesStats />}
        </div>
        <div className='w-1/2 grow'>
          <h2 className='text-gray-400'>Top selling products</h2>
          <p className='font-bold text-gray-600 py-2'>Products</p>
          {/* populate here with product details including images */}
          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              {/* map through the products and return the index for numbering - products.map(product, index => index + 1) */}
              <span className='text-gray-400 text-xs'>1</span>
              <img
                src='imagesource.com'
                alt='productimage'
                className='w-8 rounded-md'
              />
              {/* details */}
              <div>
                <div className='text-sm text-gray-500 leading-3'>
                  Product name
                </div>
                <div className='text-gray-500 text-xl font-bold'>$500</div>
              </div>
            </div>
          </div>{' '}
          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-xs'>2</span>
              <img
                src='imagesource.com'
                alt='productimage'
                className='w-8 rounded-md'
              />
              {/* details */}
              <div>
                <div className='text-sm text-gray-500 leading-3'>
                  Product name
                </div>
                <div className='text-gray-500 text-xl font-bold'>$500</div>
              </div>
            </div>
          </div>{' '}
          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-xs'>3</span>
              <img
                src='imagesource.com'
                alt='productimage'
                className='w-8 rounded-md'
              />
              {/* details */}
              <div>
                <div className='text-sm text-gray-500 leading-3'>
                  Product name
                </div>
                <div className='text-gray-500 text-xl font-bold'>$500</div>
              </div>
            </div>
          </div>{' '}
          <div className='mt-3'>
            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-xs'>4</span>
              <img
                src='imagesource.com'
                alt='productimage'
                className='w-8 rounded-md'
              />
              {/* details */}
              <div>
                <div className='text-sm text-gray-500 leading-3'>
                  Product name
                </div>
                <div className='text-gray-500 text-xl font-bold'>$500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
