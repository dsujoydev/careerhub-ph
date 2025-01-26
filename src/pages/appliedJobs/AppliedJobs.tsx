import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Job } from "@/utils/types";
import { Briefcase, MapPin, DollarSign, ExternalLink } from "lucide-react";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    setAppliedJobs(storedJobs);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Applied Jobs</h1>
      {appliedJobs.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">You haven't applied to any jobs yet.</p>
      ) : (
        <div className="space-y-6">
          {appliedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{job.job_title}</h2>
                <p className="text-gray-600 mb-2 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" /> {job.company_name}
                </p>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin className="mr-2 h-5 w-5" /> {job.location}
                </p>
                <p className="text-gray-600 flex items-center">
                  <DollarSign className="mr-2 h-5 w-5" /> {job.salary}
                </p>
              </div>
              <Link
                to={`/job/${job.id}`}
                className="bg-[#7E90FE] text-white px-6 py-3 rounded-full hover:bg-[#6A7CE0] transition-colors flex items-center"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
