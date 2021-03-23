import React from "react";
import AboutUs from "../../components/body/AboutUs";
import Client from "../../components/body/Client";
import Content from "../../components/body/Content";
import Hero from "../../components/body/Hero";
import Testimonial from "../../components/body/Testimonial";
import Layout from "../../components/Layout";

function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Content />
      <Client />
      <Testimonial />
    </Layout>
  );
}

export default Home;
