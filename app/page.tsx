import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Teaching from "@/components/Teaching";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Languages from "@/components/Languages";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <News />
        <Education />
        <Research />
        <Publications />
        <Teaching />
        <Projects />
        <Skills />
        <Awards />
        <Languages />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
