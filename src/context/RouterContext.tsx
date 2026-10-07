import React, { createContext, useContext, useEffect, useState } from 'react';

export type RoutePath = '/' | '/about' | '/why' | '/why-us' | '/privacy' | '/terms';

interface RouterContextValue {
  pathname: RoutePath;
  navigate: (to: RoutePath) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  navigate: () => {},
});

function normalizePath(rawPath: string): RoutePath {
  const cleaned = rawPath.replace(/\/+$/, '') || '/';
  if (
    cleaned === '/' ||
    cleaned === '/about' ||
    cleaned === '/why' ||
    cleaned === '/why-us' ||
    cleaned === '/privacy' ||
    cleaned === '/terms'
  ) {
    return cleaned;
  }
  return '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<RoutePath>(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: RoutePath) => {
    if (to === pathname) return;
    window.history.pushState({}, '', to);
    setPathname(to);
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: RoutePath;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, onClick, children, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
