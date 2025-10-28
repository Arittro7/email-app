import React from 'react';
import Navbar from '../components/Shared/Navbar';
import DetailView from '../components/Shared/DetailView';

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-[200px_400px_1fr] h-screen relative">
  {/* Sidebar */}
  <Navbar />

  {/* Mail list */}
  <div className="border-r border-slate-200 p-4 overflow-y-auto">
    {children}
  </div>

  {/* Detail view */}
  <div className='relative'>
    <DetailView />
  </div>
</div>
  );
};

export default RootLayout;