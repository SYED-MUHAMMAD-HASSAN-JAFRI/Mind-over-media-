import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center gap-1.5 text-xs text-white/60 py-3 shrink-0 z-20 font-sans">
      <a
        href="https://mindovermedia.notion.site/Privacy-Policy-11af3e15d892809a8e32cadf552c1100"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white underline underline-offset-4 transition-colors font-medium"
      >
        Privacy policy
      </a>
      <p className="text-white/50 tracking-normal">
        © 2026 Mind Over Media. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
