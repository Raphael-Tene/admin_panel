import React from 'react';
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineShoppingBag,
  HiOutlineAnnotation,
  HiOutlineAdjustments,
} from 'react-icons/hi';

export default function SideBar() {
  return (
    <aside className='bg-blue-400 text-white p-5 '>
      <nav className='flex flex-col'>
        <a
          className='flex gap-2 px-3  items-center  py-2 bg-white text-blue-400 rounded-xl mb-2'
          href='/'>
          <HiOutlineHome size={20} /> Dashboard
        </a>
        <a className=' px-3 py-2 mb-2 items-center  flex gap-2 ' href='/'>
          <HiOutlineShoppingCart size={20} /> Orders
        </a>
        <a className=' px-3 py-2 mb-2 items-center  flex gap-2 ' href='/'>
          <HiOutlineShoppingBag size={20} /> Products
        </a>
        <a className=' px-3 py-2 mb-2  items-center flex gap-2 ' href='/'>
          <HiOutlineAnnotation size={20} /> Reviews
        </a>
        <a className='px-3 py-2 mb-2 items-center  flex gap-2 ' href='/'>
          <HiOutlineAdjustments size={20} /> Settings
        </a>
      </nav>
    </aside>
  );
}
