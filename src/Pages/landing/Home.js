import React from "react";
import AboutUs from "../../components/body/AboutUs";
import Hero from "../../components/body/Hero";
import Layout from "../../components/Layout";

function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
    </Layout>
  );
}

export default Home;
