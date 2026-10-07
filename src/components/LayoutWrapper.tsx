import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRouter } from '../context/RouterContext';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';
  const isLegalPage = pathname === '/privacy' || pathname === '/terms';

  const backgroundClass = isHomePage
    ? 'bg-gradient-to-b from-[#151933] via-[#2A2947] via-[#5C4A56] via-[#A8885B] to-[#D9AC50] bg-brand-sunrise'
    : 'bg-gradient-to-b from-[#151933] via-[#212542] to-[#423D52]';

  const viewportLockClass = isLegalPage
    ? 'min-h-dvh h-auto overflow-y-auto overflow-x-hidden'
    : 'min-h-dvh h-auto lg:h-dvh lg:max-h-dvh overflow-y-auto overflow-x-hidden lg:overflow-hidden';

  return (
    <div
      className={`${viewportLockClass} w-full max-w-full ${backgroundClass} text-white font-sans flex flex-col justify-between px-3 sm:px-4 py-2 relative transition-colors duration-500`}
    >
      <Header />
      <main className="my-auto flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-2 py-1 lg:py-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
