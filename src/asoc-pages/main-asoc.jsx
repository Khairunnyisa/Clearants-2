import Footer from "../landing-page/components/footer";
import Hero from "../landing-page/components/hero";
import Navbar from "../navbar";
import AsocHero from "./components/hero";
import Timeline from "./components/how-asoc";

export function Asoc() {
  return (
     <div className="w-full overflow-visible">  
     <Navbar/>
    <AsocHero/>
    <Timeline/>
    
    <Footer/>

       
    </div>
  );
}