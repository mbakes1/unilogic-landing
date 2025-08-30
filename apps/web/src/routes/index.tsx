import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/hero-section";
import PublicSectorPartners from "@/components/public-sector-partners";
import Features2 from "@/components/features-2";
import Stats4 from "@/components/stats-4";
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
      <Stats4 />
      <Footer />
    </div>
  );
}
