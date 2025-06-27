import Navbar from "@/components/menu/header/navbar";
import PortfolioMain from "../components/menu/main/main"
import ProjectsSection from "../components/projects/projects"
import AboutSection from "@/components/menu/about/about";
import ContactSection from "@/components/menu/contacts/contacts";
import Footer from "@/components/menu/footer/footer";


function Home() {
  return (
   <>
  <header>
    <Navbar/>
  </header>


    <main id="main">
      <PortfolioMain/>
    </main>
    
    <div id="projects">
      <ProjectsSection/>
    </div>
    
    <section id="about">
      <AboutSection/>
    </section>

    <section>
      <ContactSection/>
    </section>

    <footer>
      <Footer/>
    </footer>
    </>  

  );
}
export default Home;