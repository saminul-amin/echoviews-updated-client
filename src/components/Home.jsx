import { useState } from "react";

import Banner from "./Banner";
import HeroSection from "./HeroSection";
import MeetPartners from "./MeetPartners";
import SearchResult from "./SearchResult";
import Testimonials from "./Testimonials";
import Newsletter from "./NewsLetter";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Banner />
      <HeroSection />
      <MeetPartners />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
