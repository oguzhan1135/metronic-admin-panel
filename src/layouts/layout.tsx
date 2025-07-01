import React, { useEffect } from 'react';
import Sidebar from '@components/sidebar';
import Header from '@components/navbar';
import { metronicContext } from '../context/layoutContet';
import { useLocation } from 'react-router-dom';
import '../globals.css'
import Search from '@components/navbar/dropdowns/search';
import Share from '@components/navbar/dropdowns/share';
import Give from '@components/navbar/dropdowns/give';
import ReportUser from '@components/navbar/dropdowns/reportUser';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { sidebarIsOpen, searchModal } = metronicContext();
  const location = useLocation();
  const pathname = location.pathname;
  const isErrorPage = pathname === "/user/authentication/error-404";
  const isWelcomeMessagePage = pathname === "/user/authentication/welcome-message";
  const isAccountDeactivatedModalPage = pathname === "/user/authentication/account-deactivated";
  const isAuthPage = pathname.startsWith("/user/authentication") && !isErrorPage && !isWelcomeMessagePage && !isAccountDeactivatedModalPage;

  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="flex flex-row">
      {
        isAuthPage ? (
          <>{children}</>
        ) : (
          <>
            <Sidebar />
            <div className="flex flex-col gap-40 w-full overflow-hidden bg-white dark:bg-coal-500 transition-all duration-500">
              <Header />
              <main
                className={`bg-transparent px-10 py-24  ${searchModal ? 'blur-md' : 'blur-none'} bg-white dark:bg-coal-500 transition-all min-h-screen duration-500 ${sidebarIsOpen ? 'lg:pl-[110px]' : 'lg:pl-[324px]'} transition-all w-full duration-500 ease-in-out z-0`}
              >
                {children}
              </main>
         
              <Share />
              <Give />
              <ReportUser />
            </div>
            {searchModal && <Search />}
          </>
        )
      }
    </div>
  );
};

export default Layout;
