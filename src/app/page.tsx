import Navbar from "@/components/layout/Navbar";
import HomeSection from "@/components/sections/HomeSection";
import WorksSection from "@/components/sections/WorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white overflow-hidden selection:bg-neon-green selection:text-black">
      <Navbar />
      <HomeSection />
      <WorksSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
