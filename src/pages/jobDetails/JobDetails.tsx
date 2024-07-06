import { useParams, useLoaderData } from "react-router-dom";
import { Job } from "@/utils/types";
import Salary from "../../assets/Salary.svg";
import JobTitle from "../../assets/JobTitle.svg";
import Phone from "../../assets/Phone.svg";
import Email from "../../assets/Email.svg";
import Address from "../../assets/Address.svg";
// import { useEffect, useState } from "react";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const jobs = useLoaderData() as Job[];
  const jobId = Number(id);
  const job = jobs.find((j) => j.id === jobId);
  console.log(job);

  return (
    <div>
      <div className="h-32 bg-[rgba(126,144,254,0.05)] flex justify-center align-middle my-2">
        <h1 className="flex align-middle justify-center font-bold text-lg">Job details</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="md:col-span-3 flex flex-col gap-2">
          <SpanBox header="Job Description:" p={job?.job_description} />
          <SpanBox header="Job Responsibility:" p={job?.job_responsibility} />
          <SpanBox header="Educational Requirements:" p={job?.educational_requirements} />
          <SpanBox header="Experiences:" p={job?.experiences} />
        </div>

        <div style={{ backgroundColor: "rgba(126, 144, 254, 0.1)" }} className="border md:col-span-1 h-80 p-2">
          <span className="font-bold text-lg">Job Details</span>
          <hr />
          <div className="flex flex-col gap-3 my-3">
            <p className="flex gap-2">
              <img src={Salary} alt="s" /> Salary: {job?.salary}
            </p>
            <p className="flex gap-2">
              <img src={JobTitle} alt="s" />
              Job Title: {job?.job_title}
            </p>
          </div>
          <span className="font-bold text-lg"> Contact Information</span>
          <hr />
          <div className="flex flex-col gap-3 my-3">
            <p className="flex gap-2">
              <img src={Phone} alt="" />
              Phone: {job?.contact_information.phone}
            </p>
            <p className="flex gap-2">
              <img src={Email} alt="" />
              Email: {job?.contact_information.email}
            </p>
            <p className="flex gap-2">
              <img src={Address} alt="" />
              Address: {job?.contact_information.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

type SpanBoxProps = {
  header: string;
  p: string | undefined;
};

const SpanBox: React.FC<SpanBoxProps> = ({ header, p }) => {
  return (
    <span className="font-semibold ">
      {header}
      <span className="text-[#757575] font-normal ml-2">{p}</span>
    </span>
  );
};
