import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/navbar';
import { metronicContext } from '../context/layoutContet';
import { useLocation } from 'react-router';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarIsOpen } = metronicContext();
  const location = useLocation();

  const [page] = useState([
    { id: 1, pathname: '/' },
    { id: 2, pathname: '/user/publicProfiles/profiles/default' },
    { id: 3, pathname: '/user/publicProfiles/profiles/creator' },
    { id: 4, pathname: '/user/publicProfiles/profiles/company' },
    { id: 5, pathname: '/user/publicProfiles/profiles/nft' },
    { id: 6, pathname: '/user/publicProfiles/profiles/blogger' },

  ]);

  const showSidebar = page.some((item) => item.pathname === location.pathname);

  return (
    <div className="flex flex-row">
      {showSidebar && <Sidebar />}

      <div className="flex flex-col gap-40 w-full">
        <Header />
        <main
          className={`bg-transparent p-6 pt-24 ml-0 ${sidebarIsOpen ? 'lg:pl-[94px]' : 'lg:pl-[304px]'
            } transition-all w-full duration-500 ease-in-out z-10`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
