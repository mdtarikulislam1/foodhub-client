import About from "@/components/modules/about/about";
import HowItWorks from "@/components/modules/about/howItWorks";
import WhyChooseUs from "@/components/modules/about/whyChose";
import React from "react";

export default function page() {
  return (
    <div>
      <HowItWorks></HowItWorks>
      <About></About>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
