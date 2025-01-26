import { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Hero from "../hero/Hero";
import Cat from "../cat/Cat";
import Jobs from "../jobs/Jobs";
import { Button } from "../ui/button";
import { Category, Job } from "@/utils/types";

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [dataLength, setDataLength] = useState<number>(4);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data: Category[]) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));

    fetch("jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <>
      <Hero />
      <Banner
        header="Job Category List"
        paragraph="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <Cat categories={categories} />
      <Banner
        header="Featured Jobs"
        paragraph="Explore thousands of job opportunities with all the information you need. Its your future"
      />

      <Jobs jobs={jobs.slice(0, dataLength)} />
      <div className="flex align-middle justify-center mt-2">
        {dataLength <= 4 ? (
          <Button
            onClick={() => {
              setDataLength(jobs.length);
            }}
            variant="careerhub"
          >
            Show all
          </Button>
        ) : (
          <Button
            onClick={() => {
              setDataLength(4);
            }}
            variant="careerhub"
          >
            Hide
          </Button>
        )}
      </div>
    </>
  );
};

export default Home;
