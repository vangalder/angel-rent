import BackgroundImage from '@/components/BackgroundImage'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundImage />
      
      {/* Logo - Top center on mobile (36px margin), center-left on desktop */}
      <h1 className="font-heading text-7xl md:text-8xl lg:text-[120px] xl:text-[140px] text-neutral-900 absolute z-10" 
        style={{ 
          lineHeight: '0.9',
          top: '36px',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
        <span className="md:hidden">angel.rent</span>
      </h1>
      
      {/* Desktop logo */}
      <h1 className="hidden md:block font-heading md:text-8xl lg:text-[120px] xl:text-[140px] text-neutral-900 absolute top-1/3 left-16 lg:left-24 xl:left-32 -translate-y-1/2 z-10" 
        style={{ lineHeight: '0.9' }}>
        angel.rent
      </h1>

      {/* Mobile: Bottom-positioned box | Desktop: Right-aligned narrow box */}
      <div className="min-h-screen flex items-end md:items-center justify-center md:justify-end px-4 md:pr-8 lg:pr-12 pb-8 md:py-20 relative z-10">
        <div className="w-full max-w-lg md:max-w-[420px] lg:max-w-[460px]
          shadow-xl p-6 md:p-10 lg:p-12
          flex flex-col justify-center
          relative z-20"
          style={{ 
            backgroundColor: 'rgba(45, 45, 45, 0.85)',
            borderRadius: '32px',
            minHeight: 'auto'
          }}>
          
          {/* Heading - Italianno font */}
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[80px] 
            text-primary-base mb-4 md:mb-8 text-center md:text-left"
            style={{ lineHeight: '1.1' }}>
            The Art of Staying
          </h2>
          
          {/* Subtitle - Inter font */}
          <h3 className="font-sans text-lg md:text-2xl lg:text-[26px] text-white font-semibold mb-4 md:mb-6 text-center md:text-left">
            A Creative Sanctuary on Reforma.
          </h3>
          
          {/* Description - Inter font */}
          <p className="font-sans text-neutral-300 text-sm md:text-base lg:text-[17px] leading-relaxed mb-8 md:mb-12 text-center md:text-left">
            Boutique hospitality curated for international creatives and digital nomads 
            in the heart of CDMX. Be the first to experience El Ángel.
          </p>
          
          {/* Waitlist Form */}
          <WaitlistForm />
        </div>
      </div>

      {/* Star accent - bottom center on mobile, bottom-right on desktop */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 
        max-md:left-1/2 max-md:-translate-x-1/2">
        <svg 
          width="32" 
          height="32"
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-base opacity-80 md:w-10 md:h-10"
        >
          <path 
            d="M20 0L21.9021 18.0979L40 20L21.9021 21.9021L20 40L18.0979 21.9021L0 20L18.0979 18.0979L20 0Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </main>
  )
}

