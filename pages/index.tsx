import type { NextPage } from "next";
import Benefits from "../components/benefits";
import Blog from "../components/blog";
import Branches from "../components/branches";
import CTA from "../components/cta";
import Features from "../components/features";
import Hero from "../components/hero";
import Remote from "../components/remote";
import CTAAlt from "../components/cta_alt";
import Footer from "../components/footer";
import Register from "../components/register";
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* <Blog />/ */}
      <Register />
      {/* <CTA />
      <Remote />
      <Branches />
      <CTAAlt /> */}
      <Footer />
    </>
  );
};

export default Home;
