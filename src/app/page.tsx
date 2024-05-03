"use client";
import { useEffect } from "react";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Pharmaceutical from "./components/Pharmaceutical";

export default function Home() {
  return (
    <div className="min-h-screen h-screen">
      <section className="home min-h-fit">
        <HomeSection />
      </section>
      <Pharmaceutical />
      <Footer />
    </div>
  );
}
