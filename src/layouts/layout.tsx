import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Sidebar bileşeni
import Header from '../components/navbar';   // Header bileşeni

interface LayoutProps {
  children: React.ReactNode;  // Sayfa içeriği buraya gelecek
  isOpenSidebar: boolean;
}
const MainChildren: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className=''>
      {children}
    </main>
  )
}

const Layout: React.FC<LayoutProps> = ({ children, isOpenSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarState = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };
  return (
    <div className="flex flex-row ">

      <Sidebar onSidebarToggle={handleSidebarState} />
      <div className="flex flex-col w-full">
        <Header isOpen={isSidebarOpen} />
        <MainChildren children={children} isOpenSidebar={isSidebarOpen} />
      </div>
    </div>
  );
};

export default Layout;
