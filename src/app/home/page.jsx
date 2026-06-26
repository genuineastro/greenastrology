import TrustBar, { MarqueeReviews } from "@/components/sections/TrustBar"
import TextTestimonials from "@/components/sections/TextTestimonials";
import GallerySection from "@/components/sections/GallerySection";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VideoTestimonials from "@/components/sections/VideoTestimonials";

import { FloatingButtons, FloatingWA } from "@/components/ui";
import HeroSection from "@/components/sections/HeroSection";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FeaturedOn } from "@/components/sections/Featured";
import AstrologyHero from "@/components/zodiac/AstrologyHero";
import ProblemsSolver from "@/components/zodiac/Problems";

// --- Main Page ----
export default function AcharyaJiLanding() {

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0524] text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-500">
    
      {/* --- HERO --- */}
      {/* <HeroSection /> */}
      <AstrologyHero/>

      {/* <FeaturedOn/> */}

      {/* --- TRUST / REVIEWS MARQUEE --- */}
      <TrustBar />

      <ProblemsSolver/>

      {/* --- VIDEO TESTIMONIALS --- */}
      <VideoTestimonials />

       {/* --- ABOUT --- */}
      <AboutSection />

      {/* --- GALLERY --- */}
      <GallerySection />

      {/* --- SERVICES --- */}
      {/* <ServicesSection /> */}

      {/* --- TEXT TESTIMONIALS --- */}
      <TextTestimonials />

      {/* --- FAQ --- */}
      <FAQSection />

      {/* --- FINAL CTA --- */}
      <FinalCTA />

      {/* --- FLOATING WA --- */}
      <FloatingButtons />

    </div>
  );
}