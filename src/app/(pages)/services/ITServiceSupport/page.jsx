import FaqService from "@/app/ui/services/ITServiceSupport/FaqService";
import Hero from "@/app/ui/services/ITServiceSupport/Hero";
import Services from "@/app/ui/services/ITServiceSupport/Services";
import WhyChooseUs from "@/app/ui/services/ITServiceSupport/WhyChooseUs";
import GetStart2 from "@/components/ui/GetStart2";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FaqService />
      <GetStart2 />
    </div>
  );
};

export default page;
