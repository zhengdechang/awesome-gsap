import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BasicAnimations from "@/components/BasicAnimations";
import ScrollAnimations from "@/components/ScrollAnimations";
import InteractiveAnimations from "@/components/InteractiveAnimations";
import AdvancedAnimations from "@/components/AdvancedAnimations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800">
      <Navigation />
      <Hero />
      <BasicAnimations />
      <ScrollAnimations />
      <InteractiveAnimations />
      <AdvancedAnimations />
      <Footer />
    </div>
  );
}
