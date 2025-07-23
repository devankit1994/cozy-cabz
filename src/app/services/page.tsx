import Header from "../../components/Header";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <div className="font-sans bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
