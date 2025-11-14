export default function CTAButton() {
  return (
    <a 
      href="https://calendly.com/dhventuresvietnam/30min" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block"
    >
      <div className="relative h-[48px] w-[238px] rounded-[300px] border border-black bg-[#252525] cursor-pointer hover:bg-[#404040] transition-colors max-sm:h-[41.6px] max-sm:w-[206.267px] max-sm:rounded-[260px] max-sm:border-[0.867px]">
        <p className="absolute left-1/2 top-1/2 w-[182px] -translate-x-1/2 -translate-y-1/2 whitespace-pre-wrap text-center text-[16px] text-white max-sm:w-[157.733px] max-sm:text-[14px]">
          Erstgespräch buchen
        </p>
      </div>
    </a>
  );
}
