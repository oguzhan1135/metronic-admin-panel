import React from 'react';
import Sidebar from '../components/sidebar'
import Header from '../components/navbar'
import { metronicContext } from '../context/layoutContet';

const Layout = ({ children, }: { children: React.ReactNode; }) => {

  const { sidebarIsOpen } = metronicContext()
  return (

    <div className="flex flex-row ">
      <Sidebar />
      <div className="flex flex-col gap-40 w-full ">
          <Header />
          <main className={` bg-transparent p-6 pt-24 ml-0 ${sidebarIsOpen ? 'lg:pl-[94px]' : 'lg:pl-[304px]'}  transition-all w-full duration-500 ease-in-out  z-10`}>
            {children}
          </main>
        </div>

      </div>
  );
};

export default Layout;
