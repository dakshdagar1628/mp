import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import EducationSkills from "@/components/EducationSkills";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ArchitecturalDrafting from "@/components/ArchitecturalDrafting";

export default function Home() {
  return (
    <main id="top">
      <ArchitecturalDrafting />
      <SiteHeader />
      <ScrollReveal />
      <Hero />
      <Gallery />
      <Experience />
      <EducationSkills />
      <Footer />
    </main>
  );
}
