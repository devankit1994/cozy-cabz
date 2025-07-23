import React from "react";
import Header from "../../components/Header";
import CorporateProgramSection from "../../components/CorporateProgramSection";
import Footer from "../../components/Footer";

const CorporatePage: React.FC = () => (
  <>
    <Header />
    <main>
      <CorporateProgramSection />
    </main>
    <Footer />
  </>
);

export default CorporatePage;
