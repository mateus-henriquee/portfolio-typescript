import Navbar from "@/components/menu/header/navbar";
import PortfolioMain from "../components/menu/main/main"
import ProjectsSection from "../components/projects/projects"
import ContactSection from "@/components/menu/contacts/contacts";
import Footer from "@/components/menu/footer/footer";


function Home() {
  return (
   <>
  <header>
    <Navbar/>
  </header>


    <main>
      <PortfolioMain/>
    </main>
    
    <div>
      <ProjectsSection/>
    </div>
   

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