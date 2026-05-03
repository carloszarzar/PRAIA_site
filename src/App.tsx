import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Solutions from "@/sections/Solutions";
import Technology from "@/sections/Technology";
import Differentials from "@/sections/Differentials";
import Impact from "@/sections/Impact";
import Investors from "@/sections/Investors";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Technology />
      <Differentials />
      <Impact />
      <Investors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
