import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { IntroSection } from "@/components/IntroSection";
import { RoomsSection } from "@/components/RoomsSection";
import { LocationTimeline } from "@/components/LocationTimeline";
import { ADayWithUs } from "@/components/ADayWithUs";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <RoomsSection />
      <LocationTimeline />
      <ADayWithUs />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
