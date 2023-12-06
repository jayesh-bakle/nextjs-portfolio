import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactForm />
        {/* <EmailSection /> */}
      </div>
      <Footer />
    </main>
  );
}