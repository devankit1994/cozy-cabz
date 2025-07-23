import React from "react";
import ContactSection from "../../components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage: React.FC = () => (
  <>
    <Header />
    <main>
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default ContactPage;
