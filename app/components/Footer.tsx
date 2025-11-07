import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-16 px-8 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description Column */}
          <div className="flex flex-col gap-6">
            {/* Logo - Fixed with correct navbar logo files */}
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/hero-nav-logo-1.svg"
                alt="Scalecraft Logo"
                width={45}
                height={50}
                className="object-contain"
              />
              <Image
                src="/assets/images/hero-nav-logo-2.svg"
                alt="SCALECRAFT"
                width={183}
                height={20}
                className="object-contain"
              />
            </div>
            
            {/* Description */}
            <p className="text-black text-base leading-6 font-normal italic">
              Seit 2020 bieten wir innovative Lösungen für mittelständische Unternehmen an.
            </p>
            
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={34}
                height={34}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          {/* Unternehmen Column */}
          <div className="flex flex-col gap-4">
            <h3 
              className="text-xl font-medium mb-2 bg-gradient-to-t from-[#ea6035] via-[#ea6035] to-[#ef973e] bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(180deg, #ef973e 30.832%, #ea6035 79.166%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              className="text-xl font-medium mb-2 bg-gradient-to-t from-[#ea6035] via-[#ea6035] to-[#ef973e] bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(180deg, #ef973e 30.832%, #ea6035 79.166%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
              className="text-xl font-medium mb-2 bg-gradient-to-t from-[#ea6035] via-[#ea6035] to-[#ef973e] bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(180deg, #ef973e 30.832%, #ea6035 79.166%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Kontakt
            </h3>
            <p className="text-black text-lg font-light leading-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-black text-lg font-light">
              +908 89097 890
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-black text-[13px] font-normal">
            Copyright ® 2021 Lorem All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
