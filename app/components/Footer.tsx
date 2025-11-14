import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-8 px-4 sm:py-[clamp(2rem,4vw,4rem)] sm:px-[clamp(2rem,6vw,6rem)]">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 sm:gap-[clamp(2rem,2.5vw,2.5rem)] mb-8 sm:mb-[clamp(3rem,4vw,4rem)]">
          {/* Mobile: Logo and Description at top */}
          <div className="flex flex-col gap-4 sm:hidden">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/hero/hero-nav-logo-1.svg"
                alt="Scalecraft Logo"
                width={31}
                height={35}
                className="object-contain"
              />
              <Image
                src="/assets/images/hero/hero-nav-logo-2.svg"
                alt="SCALECRAFT"
                width={127}
                height={14}
                className="object-contain"
              />
            </div>
            
            {/* Description */}
            <p className="text-[#252525] text-[10px] leading-[18.63px] font-normal">
              Crafted with ❤️ since 2020 – empowering agencies and brands to scale smarter
            </p>
          </div>

          {/* Desktop: 3 column grid */}
          <div className="hidden sm:grid sm:grid-cols-3 sm:gap-[clamp(1.5rem,3vw,3rem)]">
            {/* Logo and Description Column - Desktop */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/hero/hero-nav-logo-1.svg"
                  alt="Scalecraft Logo"
                  width={45}
                  height={50}
                  className="object-contain"
                />
                <Image
                  src="/assets/images/hero/hero-nav-logo-2.svg"
                  alt="SCALECRAFT"
                  width={183}
                  height={20}
                  className="object-contain"
                />
              </div>
              
              <p className="text-black text-sm leading-5 font-normal italic sm:text-base sm:leading-6">
                Crafted with ❤️ since 2020 – empowering agencies and brands to scale smarter
              </p>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/scalecraftdh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                  title="Scalecraft Company LinkedIn"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt="Scalecraft Company LinkedIn"
                    width={34}
                    height={34}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dachoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                  title="Hoa Nguyen - CEO LinkedIn"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt="Hoa Nguyen - CEO LinkedIn"
                    width={34}
                    height={34}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>

            {/* Unternehmen Column */}
            <div className="flex flex-col gap-4">
              <h3 
                className="text-xl font-medium mb-2"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Unternehmen
              </h3>
              <nav className="flex flex-col gap-3">
                <a href="/impressum" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Impressum
                </a>
                <a href="/datenschutz" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Datenschutz
                </a>
                <a href="/agb" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  AGB
                </a>
              </nav>
            </div>

            {/* Kontakt Column */}
            <div className="flex flex-col gap-4">
              <h3 
                className="text-xl font-medium mb-2"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Kontakt
              </h3>
              <a
                href="https://calendly.com/dhventuresvietnam/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit"
              >
                <button className="px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                  style={{ 
                    backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                  }}
                >
                  Termin Vereinbaren
                </button>
              </a>
            </div>
          </div>

          {/* Mobile: Navigation and Contact */}
          <div className="flex flex-col gap-6 sm:hidden">
            {/* Unternehmen Section */}
            <div className="flex flex-col gap-2">
              <h3 
                className="text-[11px] font-medium mb-1"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Unternehmen
              </h3>
              <nav className="flex flex-col gap-[6px]">
                <a href="/impressum" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Impressum
                </a>
                <a href="/datenschutz" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Datenschutz
                </a>
                <a href="/agb" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  AGB
                </a>
              </nav>
            </div>

            {/* Kontakt Section */}
            <div className="flex flex-col gap-3">
              <h3 
                className="text-[11px] font-medium"
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Kontakt
              </h3>
              <a
                href="https://calendly.com/dhventuresvietnam/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit"
              >
                <button className="px-6 py-2 rounded-full text-white text-[12px] font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                  style={{ 
                    backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                  }}
                >
                  Termin Vereinbaren
                </button>
              </a>
            </div>
          </div>

          {/* LinkedIn Icons - Mobile only */}
          <div className="flex items-center gap-3 sm:hidden">
            <a
              href="https://www.linkedin.com/company/scalecraftdh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
              title="Scalecraft Company LinkedIn"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="Scalecraft Company LinkedIn"
                width={18}
                height={18}
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dachoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
              title="Hoa Nguyen - CEO LinkedIn"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="Hoa Nguyen - CEO LinkedIn"
                width={18}
                height={18}
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#b3b3b3] mb-4 sm:mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#252525] text-[9px] sm:text-[13px] font-normal">
            Copyright ® 2025 Scalecraft. Alle Rechte Vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}
