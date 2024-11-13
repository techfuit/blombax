import About from "@/components/About";
import Navbar from "../components/Navbar";
import Crowdfunding from "@/components/Crowdfunding";
import Features from "@/components/Features";
import Crypto from "@/components/Crypto";
import Home from "@/components/Home";
import Inteligent from "@/components/Inteligent";
import Partners from "@/components/Partners";
import UpperFooter from "@/components/UpperFooter";
import LowerFooter from "@/components/LowerFooter";

export default function HomePage() {
  return ( 
    <div className="w-full px-10 bgGradient"> 
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Crypto />
        <About />
        <Inteligent />
        <Crowdfunding />
        <Features />
        <Partners />
        <UpperFooter />
        <LowerFooter />
      </div>
    </div>
  );
}
