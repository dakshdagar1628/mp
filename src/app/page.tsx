import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EducationSkills from "@/components/EducationSkills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="relative">
        <Overlay />
        <ScrollyCanvas />
      </div>
      <Projects />
      <Experience />
      <EducationSkills />
      <Footer />
    </main>
  );
}
