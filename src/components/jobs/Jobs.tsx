import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Job } from "@/utils/types";

type jobProps = {
  jobs: Job[];
  // dataLength: number;
};

const Jobs: React.FC<jobProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {jobs.map((j) => (
        <div key={j.id} className="border border-solid border-[#757575] p-9 rounded-md flex flex-col gap-2">
          <div className="w-20">
            <img src={j.logo} alt="" />
          </div>
          <h1 className="text-xl font-bold">{j.job_title}</h1>
          <span className="text-lg font-normal text-[#757575]">{j.company_name}</span>
          <div className="flex gap-2">
            <span className="px-2 py-1 border border-solid border-[#7E90FE] text-[#7E90FE] font-semibold">
              {j.job_type}
            </span>
            <span className="px-2 py-1 border border-solid border-[#7E90FE] text-[#7E90FE] font-semibold">
              {j.remote_or_onsite}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#757575]">{j.location}</span>
            <span className="text-[#757575]">{j.salary}</span>
          </div>
          <Link to={`/job/${j.id}`}>
            <Button className="w-24" variant="careerhub">
              View Details
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
