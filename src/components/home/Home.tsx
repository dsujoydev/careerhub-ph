import { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Hero from "../hero/Hero";
import Cat from "../cat/Cat";
import Jobs from "../jobs/Jobs";

type Category = {
  id: number;
  category_name: string;
  availability: string;
  logo: string;
};

type Job = {
  id: number;
  logo: string;
  job_title: string;
  company_name: string;
  remote_or_onsite: string;
  location: string;
  job_type: string;
  salary: string;
  job_description: string;
  job_responsibility: string;
  educational_requirements: string;
  experiences: string;
  contact_information: {
    phone: string;
    email: string;
    address: string;
  };
};

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

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

  console.log(jobs);
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

      <Jobs jobs={jobs} />
    </>
  );
};

export default Home;
