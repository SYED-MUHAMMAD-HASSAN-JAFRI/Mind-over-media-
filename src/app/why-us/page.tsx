import React, { useState } from 'react';

const whyUsItems = [
  { id: 1, title: 'Codex + Truth', content: 'What the agent can cite and claim.' },
  {
    id: 2,
    title: 'Voice + Persona',
    content: 'Consistent brand identity, every channel, every turn.',
  },
  {
    id: 3,
    title: 'Policy + Permissions',
    content: "What's allowed, refused, or escalated – in the moment.",
  },
  {
    id: 4,
    title: 'Tools + Actions',
    content: 'Adapters that take real action: commerce, support, CRM.',
  },
  {
    id: 5,
    title: 'Audit + Trace',
    content: 'Complete observability and provenance across every interaction.',
  },
  {
    id: 6,
    title: 'Memory + Context',
    content: 'Consented, persistent memory owned exclusively by the brand.',
  },
];

export default function WhyUsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      aria-label="Why Us"
      className="my-auto flex flex-col items-center text-center max-w-5xl mx-auto w-full px-2 py-4 sm:py-6"
    >
      {/* Eyebrow Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-sans tracking-wide mb-3 sm:mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
        <span>Relationship Infrastructure</span>
      </div>

      {/* Display Headline (Size 1: Standardized Scale, Strictly 2 Wide Lines) */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-[1.1] text-center mx-auto mb-3 sm:mb-4">
        <span className="block sm:inline whitespace-nowrap">Every consumer relationship will run through AI.</span>{" "}
        <span className="block sm:inline whitespace-nowrap">Mind Over Media is the layer it runs on.</span>
      </h1>

      {/* 2-Line Evenly Balanced Subheader */}
      <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 font-sans leading-relaxed text-center text-balance">
        Agents are becoming a commodity. Governance isn&apos;t. We give enterprise brands complete{' '}
        <br className="hidden sm:inline" />
        control over truth, policy, and persistent memory, so trust compounds with scale.
      </p>

      {/* Compact Vertical Accordion Stack */}
      <div className="w-full max-w-xl mx-auto flex flex-col gap-1.5">
        {whyUsItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`backdrop-blur-md border rounded-xl overflow-hidden transition-all duration-200 h-auto ${
                isOpen
                  ? 'bg-white/15 border-white/30 shadow-lg'
                  : 'bg-white/10 border-white/20 hover:border-white/30'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className={`w-full px-4 ${isOpen ? 'py-2' : 'py-1.5 sm:py-2'} flex justify-between items-center text-left focus:outline-none cursor-pointer`}
              >
                <span
                  className={`text-xs sm:text-sm md:text-base font-sans font-medium transition-colors ${
                    isOpen ? 'text-[#F2C265]' : 'text-white hover:text-white/90'
                  }`}
                >
                  {item.title}
                </span>

                <span className="text-sm sm:text-base font-light ml-3 shrink-0 text-white/80">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-2 text-xs sm:text-sm text-white/80 font-sans text-left leading-snug border-t border-white/10 pt-1.5">
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
