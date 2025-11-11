import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-8 px-4 md:py-[clamp(3rem,4vw,4rem)] md:px-[clamp(5rem,6vw,6rem)]">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-8 md:gap-[clamp(2rem,2.5vw,2.5rem)] mb-8 md:mb-[clamp(3rem,4vw,4rem)]">
          {/* Mobile: Logo and Description at top */}
          <div className="flex flex-col gap-4 md:hidden">
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
            Seit 2020 bieten wir innovative Lösungen für<br />
             mittelständische Unternehmen an.
            </p>
          </div>

          {/* Desktop: 4 column grid */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-[clamp(2rem,3vw,3rem)]">
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
              
              <p className="text-black text-sm leading-5 font-normal italic md:text-base md:leading-6">
                Seit 2020 bieten wir innovative Lösungen für mittelständische Unternehmen an.
              </p>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/dachoa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                  title="CEO LinkedIn - Hoa Nguyen"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt="LinkedIn - CEO Hoa Nguyen"
                    width={34}
                    height={34}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/scalecraftdh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                  title="Scalecraft Company LinkedIn"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt="LinkedIn - Scalecraft Company"
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
                <a href="#" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Impressum
                </a>
                <a href="#" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Datenschutz
                </a>
                <a href="#" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  AGB
                </a>
              </nav>
            </div>

            {/* Rechtsdokumente Column */}
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
                Rechtsdokumente
              </h3>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Lorem
                </a>
                <a href="#" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Portfolio
                </a>
                <a href="#" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Careers
                </a>
                <a href="#" className="text-black text-lg font-light hover:opacity-70 transition-opacity">
                  Contact us
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
              <p className="text-black text-base font-light leading-normal md:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-black text-base font-light md:text-lg">
                +908 89097 890
              </p>
            </div>
          </div>

          {/* Mobile: 3 columns navigation */}
          <div className="grid grid-cols-3 gap-4 md:hidden">
            {/* Unternehmen Column */}
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
                <a href="#" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Impressum
                </a>
                <a href="#" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Datenschutz
                </a>
                <a href="#" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  AGB
                </a>
              </nav>
            </div>

            {/* Rechtsdokumente Column */}
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
                Rechtsdokumente
              </h3>
              <nav className="flex flex-col gap-[6px]">
                <a href="#" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Lorem
                </a>
                <a href="#" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Portfolio
                </a>
                <a href="#" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Careers
                </a>
                <a href="#" className="text-[#252525] text-[10px] leading-[18.63px] font-light hover:opacity-70 transition-opacity">
                  Contact us
                </a>
              </nav>
            </div>

            {/* Kontakt Column */}
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
                Kontakt
              </h3>
              <p className="text-[#252525] text-[10px] leading-[14px] font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-[#252525] text-[10px] leading-[18.2px] font-light">
                +908 89097 890
              </p>
            </div>
          </div>

          {/* LinkedIn Icons - Mobile only */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://www.linkedin.com/in/dachoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
              title="CEO LinkedIn - Hoa Nguyen"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn - CEO Hoa Nguyen"
                width={18}
                height={18}
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/scalecraftdh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
              title="Scalecraft Company LinkedIn"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn - Scalecraft Company"
                width={18}
                height={18}
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#b3b3b3] mb-4 md:mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#252525] text-[9px] md:text-[13px] font-normal">
            Copyright ® 2021 Lorem All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
