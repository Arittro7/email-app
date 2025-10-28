import React from 'react';
import Navbar from '../components/Shared/Navbar';
import DetailView from '../components/Shared/DetailView';

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-[200px_400px_1fr] h-screen">
      {/* Sidebar */}
      <div className="border-r border-slate-200 bg-gray-700 text-white">
        <Navbar />
      </div>

      {/* Mail list */}
      <div className="border-r border-slate-200 p-4 overflow-y-auto">
        {children}
      </div>

      {/* Detail view */}
      <div className="p-6 overflow-y-auto">
        <DetailView />
      </div>
    </div>
  );
};

export default RootLayout;