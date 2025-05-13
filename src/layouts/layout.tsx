import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/navbar';
import { metronicContext } from '../context/layoutContet';
import { useLocation } from 'react-router-dom';
import '../globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarIsOpen } = metronicContext();
  const location = useLocation();
  const pathname = location.pathname;
  const isErrorPage = pathname === "/user/authentication/error404";
  const isWelcomeMessagePage = pathname === "/user/authentication/welcomeMessage";
  const isAccountDeactivatedModalPage = pathname === "/user/authentication/accountDeactivatedModal";
  const isAuthPage = pathname.startsWith("/user/authentication") && !isErrorPage && !isWelcomeMessagePage && !isAccountDeactivatedModalPage;

  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <div className="flex flex-row">
      {
        isAuthPage ? (
          <>{children}</>
        ) : (
          <>
            <Sidebar />
            <div className="flex flex-col gap-40 w-full overflow-hidden bg-white dark:bg-black transition-all duration-500">
              <Header />
              <main
                className={`bg-transparent px-10 py-24 bg-white dark:bg-black transition-all duration-500 ${sidebarIsOpen ? 'lg:pl-[110px]' : 'lg:pl-[324px]'} transition-all w-full duration-500 ease-in-out z-0`}
              >
                {children}
              </main>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Layout;
