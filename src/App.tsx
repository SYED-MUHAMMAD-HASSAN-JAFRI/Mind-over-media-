/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import RootLayout from './app/layout';
import LandingPage from './app/page';
import AboutPage from './app/about/page';
import WhyUsPage from './app/why-us/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';

function RouteRenderer() {
  const { pathname } = useRouter();

  switch (pathname) {
    case '/about':
      return <AboutPage />;
    case '/why':
    case '/why-us':
      return <WhyUsPage />;
    case '/privacy':
      return <PrivacyPage />;
    case '/terms':
      return <TermsPage />;
    case '/':
    default:
      return <LandingPage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <RootLayout>
        <RouteRenderer />
      </RootLayout>
    </RouterProvider>
  );
}
