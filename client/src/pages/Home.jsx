import React from "react";

import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import FeaturesSection from "../components/FeatureSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
