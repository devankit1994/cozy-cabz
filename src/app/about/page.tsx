import Header from "../../components/Header";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="font-sans bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
