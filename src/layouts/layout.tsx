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
    { id: 7, pathname: '/user/publicProfiles/profiles/crm' },
    { id: 8, pathname: '/user/publicProfiles/profiles/gamer' },
    { id: 9, pathname: '/user/publicProfiles/profiles/feeds' },
    { id: 10, pathname: '/user/publicProfiles/profiles/plain' },
    { id: 11, pathname: '/user/publicProfiles/profiles/modal' },
    { id: 12, pathname: '/user/publicProfiles/projects/threeColumns' },
    { id: 13, pathname: '/user/publicProfiles/projects/twoColumns' },
    { id: 14, pathname: '/user/publicProfiles/works' },



  ]);

  const showSidebar = page.some((item) => item.pathname === location.pathname);

  return (
    <div className="flex flex-row">
      {showSidebar && <Sidebar />}

      <div className="flex flex-col gap-40 w-full">
        <Header />
        <main
          className={`bg-transparent px-10 py-24 ${sidebarIsOpen ? 'lg:pl-[110px]' : 'lg:pl-[324px]'
            } transition-all w-full duration-500 ease-in-out z-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
