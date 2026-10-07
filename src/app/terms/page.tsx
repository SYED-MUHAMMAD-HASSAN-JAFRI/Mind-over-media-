import React from 'react';

export default function TermsPage() {
  return (
    <section
      aria-label="Terms of Service"
      className="w-full h-full flex flex-col items-center justify-evenly overflow-hidden py-2 font-sans"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white/90 mb-5">
          Advisory Governance
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.05] text-balance">
          <span className="block">Institutional Terms.</span>
          <span className="block italic font-normal text-white/95">Of Client Engagement.</span>
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-light text-white/85 max-w-xl leading-relaxed">
          All advisory mandates and proprietary methodologies are governed by formal master
          agreement.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl max-w-3xl w-full text-white text-center">
        <p className="text-sm sm:text-base font-light text-white/90 leading-relaxed">
          Proprietary media graph schemas, equilibrium frameworks, and briefings remain the
          exclusive intellectual property of MINDOVERMEDIA.
        </p>
      </div>
    </section>
  );
}
