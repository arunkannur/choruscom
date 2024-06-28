import Benefits from "../components/Benefits";
import Logic from "../components/Logic/";
import WhatWeDo from "../components/WhatWeDo";
import RecentProjects from "../components/RecentProjects";
import AboutUs from "../components/AboutUs";
import CompanyLogos from "../components/CompanyLogos";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Hero from "../components/Hero";
import OurTeam from "../components/OurTeam";
import ClientReviews from "../components/ClientReviews";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Logic />
        <WhatWeDo />
        <RecentProjects />
        <AboutUs />
        <CompanyLogos />
        <OurTeam />
        <ClientReviews />
      </div>
    </>
  );
};

export default Home;
