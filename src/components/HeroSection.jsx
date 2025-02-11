import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import Card from "./Card";
import SearchResult from "./SearchResult";

export default function HeroSection() {
  const [data, setData] = useState([]);
  const axiosSecure = useAxios();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axiosSecure.get("limited-services").then((res) => setData(res.data));
  }, []);
  // console.log(data);

  return (
    <div className="w-5/6 mx-auto mt-12 max-w-6xl">
      <div className="flex items-center justify-end mb-8 mt-24">
        <input
          type="text"
          className="border-gray-500 border-2 rounded-xl py-3 px-4 w-1/3"
          placeholder="Search..."
          onChange={handleChange}
          value={search}
        />
      </div>
      {search === "" ? <></> : <SearchResult keyword={search} />}

      <h2 className="text-center text-4xl font-semibold">Featured Services</h2>
      <p className="text-center mt-3 mb-16 text-lg">
        Explore our top-rated services, chosen to deliver exceptional quality
        and value.
        <br /> Find the perfect solution for your needs today!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((service) => (
          <Card key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to={"/services"}>
          <button className="btn">See More...</button>
        </Link>
      </div>
    </div>
  );
}
