import React from 'react';
import Head from 'next/head';
import SideBar from '../components/SideBar';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div className='flex  h-screen'>
      <Head>
        <title>Admin Panel</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBar />
      <Dashboard />
    </div>
  );
}
