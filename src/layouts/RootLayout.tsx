import React from 'react';
import Navbar from '../components/Shared/Navbar';

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-[380px_1fr] h-screen">
      <div className="border-r border-slate-200 p-4 flex flex-col gap-4">
        <Navbar />
        {children}
      </div>
      <div className="p-6">{/* DetailView will render here */}</div>
    </div>
  );
};

export default RootLayout;