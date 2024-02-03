
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./pages/components/Footer";
import AboutPage from "./pages/components/about";
import Contact from "./pages/components/contact";
import Home from "./pages/components/home";
import PricingPage from "./pages/components/pricing";
import Schedule from "./pages/components/schedule";
const App = () => {
  return (
    <main className="w-full  min-h-screen  ">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <AboutPage />
        <Schedule />
        <PricingPage/>
        <Contact/>
        <Footer />
      </div>
    </main>
  );
};

export default App;
