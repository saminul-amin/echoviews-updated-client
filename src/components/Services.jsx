import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Intro from "./Intro";
import Card from "./Card";
import Categories from "./Categories";
import useAxios from "../hooks/useAxios";

const heading = "Services Tailored for You";
const desc =
  "Discover a range of services designed to meet your needs and elevate your projects to the next level.";

export default function Services() {
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const axiosSecure = useAxios();
  // const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    axiosSecure.get("/services").then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  let allCategoryNames = ["All"];
  data.forEach((category) => allCategoryNames.push(category.category));
  // console.log(allCategoryNames);

  const hanldeCategoryChange = (category) => {
    setCategory(category);
  };

  const filteredServices =
    category === "All"
      ? data
      : data.filter((service) => service.category === category);
  // console.log(filteredServices);
  // console.log(categories);

  return (
    <div className="w-5/6 mx-auto mt-24 max-w-6xl">
      <Intro heading={heading} desc={desc} />

      <Categories
        categories={allCategoryNames}
        onCategoryChange={hanldeCategoryChange}
      />

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <Card key={idx} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
