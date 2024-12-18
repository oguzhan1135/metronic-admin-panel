import React from 'react';
import Sidebar from '../components/Sidebar'; // Sidebar bileşeni
import Header from '../components/navbar';   // Header bileşeni

interface LayoutProps {
  children: React.ReactNode;  // Sayfa içeriği buraya gelecek
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
