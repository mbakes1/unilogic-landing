import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/hero-section";
import PublicSectorPartners from "@/components/public-sector-partners";
import Features2 from "@/components/features-2";
import Footer from "@/components/footer";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <HeroSection />
      <PublicSectorPartners />
      <Features2 />
      <Footer />
    </div>
  );
}
