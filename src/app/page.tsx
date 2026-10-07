import React from 'react';

const row1Logos = [
  { name: 'LUNAFIT', src: '/logos/lunafit.png', className: 'h-4 sm:h-[22px]' },
  { name: 'BUILDERS', src: '/logos/builders.png', className: 'h-4 sm:h-[22px]' },
  { name: 'FINANCIAL NEWS', src: '/logos/financial-news.png', className: 'h-4 sm:h-[22px]' },
  { name: 'BRABAR', src: '/logos/brabar.png', className: 'h-5 sm:h-6' },
];

const row2Logos = [
  { name: 'SMASHHAUS', src: '/logos/smashhaus.png', className: 'h-4 sm:h-5' },
  { name: 'TOPLINE MANAGEMENT', src: '/logos/topline.png', className: 'h-4 sm:h-5' },
  { name: 'DPAA', src: '/logos/dpaa.png', className: 'h-4 sm:h-5' },
  { name: 'MATCHBOOK', src: '/logos/matchbook.png', className: 'h-5 sm:h-6' },
  { name: 'HIWAY', src: '/logos/hiway.png', className: 'h-4 sm:h-5' },
];

export default function HomeHero() {
  return (
    <section
      aria-label="Home Page"
      className="flex flex-col items-center text-center z-10 my-auto px-4 w-full"
    >
      {/* Glass Eyebrow Badge with Dot */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-sans tracking-wide mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
        <span>Embedded Relationship AI</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight max-w-4xl mb-4 text-white leading-[1.1] text-center mx-auto">
        Mind Over Media powers the next frontier <br className="hidden sm:inline" />
        of personalized brand experiences.
      </h1>

      {/* Subheader (Strictly 2 Balanced Lines) */}
      <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 font-sans leading-relaxed text-center">
        Mind Over Media is the relationship engine inside the world&apos;s <br className="hidden sm:inline" />
        most interesting media, entertainment, and consumer brands.
      </p>

      {/* Glass Panel */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-5 shadow-2xl max-w-2xl sm:max-w-3xl w-full mx-auto text-center">
        {/* Homepage Logo Section Title */}
        <p className="text-xs font-sans text-[#F2C265] tracking-wider mb-4 text-center">
          Trusted By
        </p>

        {/* Balanced Two-Row Logo Grid */}
        <div className="flex flex-col gap-4 items-center justify-center">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-2xl mx-auto opacity-100">
            {row1Logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className={`${logo.className} w-auto object-contain brightness-0 invert`}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-2xl mx-auto opacity-100">
            {row2Logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className={`${logo.className} w-auto object-contain brightness-0 invert`}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
