import React from "react";
import NavBar from "../components/navigationBar/Navbar";
import Hero from "../components/hero/Hero";
import SocialProof from "../components/socialProof/SocialProof";
import Reviews from "../components/reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialProof />
      <Reviews /> 
    </div>
  );
}
