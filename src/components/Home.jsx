import { useState } from "react";

import Banner from "./Banner";
import HeroSection from "./HeroSection";
import MeetPartners from "./MeetPartners";
import SearchResult from "./SearchResult";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Banner />
      {/* <div className="flex items-center w-11/12 justify-end mb-8 mt-24">
        <input
          type="text"
          className="border-gray-500 border-2 rounded-xl py-3 px-4 w-1/3"
          placeholder="Search..."
          onChange={handleChange}
          value={search}
        />
      </div> */}
      
      {search === "" ? (
        <>
          <HeroSection />
        </>
      ) : (
        <SearchResult keyword={search} />
      )}
      <MeetPartners />
    </div>
  );
}
