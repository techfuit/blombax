import About from "@/components/About";
import Navbar from "../components/Navbar";
import RenderStars from "../components/Stars";
import Crowdfunding from "@/components/Crowdfunding";
import Features from "@/components/Features";
import Crypto from "@/components/Crypto";
import Home from "@/components/Home";
import Funding from "@/components/Funding";
import Inteligent from "@/components/Inteligent";
import Financial from "@/components/Financial";
import Partners from "@/components/Partners";
import NewsLetter from "@/components/NewsLetter";
import UpperFooter from "@/components/UpperFooter";
import LowerFooter from "@/components/LowerFooter";

export default function HomePage() {
  return ( 
    <div className="w-full px-10 bgGradient">
      {/* <RenderStars count={400} /> */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Financial />
        <Crypto />
        <Funding />
        <Features />
        <Crowdfunding />
        <Inteligent />
        <Partners />
        <NewsLetter />
        <UpperFooter />
        <LowerFooter />
      </div>
    </div>
  );
}
