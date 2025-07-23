import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import PandemicSafetySection from "../components/PandemicSafetySection";
import BusinessBenefitsSection from "../components/BusinessBenefitsSection";
import HowToBookSection from "../components/HowToBookSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <BusinessBenefitsSection />
        <HowToBookSection />
        <PandemicSafetySection />
      </main>
      <Footer />
    </div>
  );
}
