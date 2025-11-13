'use client';

import { Suspense } from 'react';
import DashSidebar from '@/components/DashSidebar';
import DashProfile from '@/components/DashProfile';

function DashboardContent() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        <Suspense fallback={<div>Loading sidebar...</div>}>
          <DashSidebar />
        </Suspense>
      </div>
      <div className='flex-1'>
        <Suspense fallback={<div>Loading profile...</div>}>
          <DashProfile />
        </Suspense>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}