"use client";

import React from 'react';
import SideBar from '@/components/layouts/sideBar';
import Dashboard from '@/pages/dashboard/dashboard';

export default function Home() {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <SideBar />
      <Dashboard />
    </div>

  );
}
