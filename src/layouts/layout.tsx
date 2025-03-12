import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/navbar';
import { metronicContext } from '../context/layoutContet';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarIsOpen } = metronicContext();

  return (
    <div className="flex flex-row">
       <Sidebar />

      <div className="flex flex-col gap-40 w-full overflow-hidden">
        <Header />
        <main
          className={`bg-transparent px-10  py-24 ${sidebarIsOpen ? 'lg:pl-[110px]' : 'lg:pl-[324px]'
            } transition-all w-full duration-500 ease-in-out z-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
