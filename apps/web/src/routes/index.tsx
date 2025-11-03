import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from 'react';
import HeroSection from "@/components/hero-section";

const PublicSectorPartners = lazy(() => import("@/components/public-sector-partners"));
const Features2 = lazy(() => import("@/components/features-2"));
const Footer = lazy(() => import("@/components/footer"));

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}

function HomeComponent() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <PublicSectorPartners />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Features2 />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}
