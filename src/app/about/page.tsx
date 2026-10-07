import React from 'react';

const teamMembers = [
  { 
    name: "Andy Anderson", 
    image: "/team/andy.jpg", 
    transform: "scale-110 object-center" 
  },
  { 
    name: "Jamie Parker", 
    image: "/team/jamie.jpg", 
    transform: "scale-110 object-center" 
  },
  { 
    name: "Jane Cole (Ratcliffe)", 
    image: "/team/jane.jpg", 
    transform: "scale-115 object-[center_20%]" 
  },
  { 
    name: "Brad Young", 
    image: "/team/brad.jpg", 
    transform: "scale-[1.75] object-[center_5%] origin-[46%_0%]" 
  },
  { 
    name: "Erick Brownstein", 
    image: "/team/erick.jpg", 
    transform: "scale-110 object-center" 
  },
  { 
    name: "Bryan Meyer", 
    image: "/team/bryan.jpg", 
    transform: "scale-110 object-center" 
  },
  { 
    name: "Boris Kizelshteyn", 
    image: "/team/boris.jpg", 
    transform: "scale-110 object-center" 
  },
  { 
    name: "Joe McGill", 
    image: "/team/joe.jpg", 
    transform: "scale-[1.4] object-[center_15%] origin-top" 
  },
  { 
    name: "Keith Yonish", 
    image: "/team/keith.jpg", 
    transform: "scale-110 object-center" 
  },
  { 
    name: "Meagan Russell", 
    image: "/team/meagan.jpg", 
    transform: "scale-110 object-center" 
  }
];

export default function AboutPage() {
  return (
    <section
      aria-label="About Us"
      className="my-auto flex flex-col items-center text-center max-w-5xl mx-auto w-full"
    >
      {/* Glass Eyebrow Badge with Dot */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-sans tracking-wide mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
        <span>Operator Mindset</span>
      </div>

      {/* Headline */}
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight max-w-4xl mb-4 text-white leading-[1.1] text-center mx-auto">
  We've assembled from the frontline of media, <br className="hidden sm:inline" />
  entertainment, and consumer brands.
     </h1>

      {/* 2-Line Balanced Subheader */}
      <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-4xl mx-auto mb-6 font-sans leading-relaxed text-center text-balance">
        <span className="block sm:inline whitespace-nowrap">
          Our team built products for 100M+ people and generated $5B+ in value
        </span>{" "}
        <span className="block sm:inline">
          across the world&apos;s most powerful brands. We came together to build the relationship layer we always wished we had.
        </span>
      </p>

      {/* Frosted Glass Container */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-5 shadow-2xl max-w-4xl w-full mx-auto">
        {/* Team Grid */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3 lg:gap-4 justify-items-center mb-2 lg:mb-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center gap-1.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border border-[#F2C265]/40 hover:border-[#F2C265] hover:shadow-[0_0_12px_rgba(242,194,101,0.25)] transition-all duration-300 relative bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.transform} filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300`}
                />
              </div>
              <span className="text-[11px] sm:text-xs font-sans text-white/90 font-medium leading-tight max-w-[130px]">
                {member.name}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 mt-2">
         {/* About Us Logo Section Title */}
<p className="text-xs font-sans text-[#F2C265] tracking-wider mb-4 text-center">
  Operated at and for
</p>

          <div className="flex flex-col gap-6 items-center justify-center">
            {/* Top Row: Prominent Priority Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 opacity-100">
              <img 
                src="/logos/mit-medialab.svg" 
                alt="MIT Media Lab" 
                className="h-6 sm:h-7 md:h-8 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/paramount-full-white.svg" 
                alt="Paramount" 
                className="h-6 sm:h-7 md:h-8 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/showtime.svg" 
                alt="Showtime" 
                className="h-6 sm:h-7 md:h-8 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/staples.svg" 
                alt="Staples" 
                className="h-5 sm:h-6 md:h-7 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>

            {/* Bottom Row: Secondary Logos */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 opacity-100">
              <img 
                src="/logos/youtube.svg" 
                alt="YouTube" 
                className="h-3.5 sm:h-4 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/lvmh.svg" 
                alt="LVMH" 
                className="h-3.5 sm:h-4 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/essence.svg" 
                alt="EssenceMediacom" 
                className="h-3.5 sm:h-4 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/dmg.svg" 
                alt="DMG" 
                className="h-3.5 sm:h-4 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/lodestar.svg" 
                alt="Lodestar" 
                className="h-3.5 sm:h-4 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/trinity-mirror.svg" 
                alt="Trinity Mirror" 
                className="h-3.5 sm:h-4 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img 
                src="/logos/blackshark.svg" 
                alt="blackshark.ai" 
                className="h-3 w-auto object-contain brightness-0 invert" 
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
