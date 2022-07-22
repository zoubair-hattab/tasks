import Title from "@/components/title";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Midnav from "@/components/midnav";
import React from "react";

const Home = () => {
  return (
    <>
      <Title pageName={"Home"} />
      <Navbar />
      <Midnav />
      <Footer />
    </>
  );
};

export default Home;
