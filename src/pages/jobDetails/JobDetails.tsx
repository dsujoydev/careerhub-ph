import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Job } from "@/utils/types";
import { Banknote, Briefcase, Phone, Mail, MapPin } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data: Job[]) => {
        const foundJob = data.find((j) => j.id === Number(id));
        setJob(foundJob || null);
      })
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  const handleApply = () => {
    if (job) {
      const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
      if (!appliedJobs.some((j: Job) => j.id === job.id)) {
        appliedJobs.push(job);
        localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
        alert("Job application submitted successfully!");
        navigate("/applied-jobs");
      } else {
        alert("You have already applied for this job.");
      }
    }
  };

  if (!job) {
    return <div className="text-center py-20">Job not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] h-48 rounded-lg flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-white">Job Details</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <InfoSection title="Job Description" content={job.job_description} />
          <InfoSection title="Job Responsibility" content={job.job_responsibility} />
          <InfoSection title="Educational Requirements" content={job.educational_requirements} />
          <InfoSection title="Experiences" content={job.experiences} />
        </div>

        <div className="md:col-span-1">
          <div className="bg-[#7E90FE10] rounded-lg p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Job Details</h2>
            <hr className="border-[#7E90FE] mb-4" />
            <InfoItem icon={<Banknote className="text-[#7E90FE]" />} label="Salary" value={job.salary} />
            <InfoItem icon={<Briefcase className="text-[#7E90FE]" />} label="Job Title" value={job.job_title} />

            <h2 className="text-xl font-semibold mt-6 mb-4">Contact Information</h2>
            <hr className="border-[#7E90FE] mb-4" />
            <InfoItem icon={<Phone className="text-[#7E90FE]" />} label="Phone" value={job.contact_information.phone} />
            <InfoItem icon={<Mail className="text-[#7E90FE]" />} label="Email" value={job.contact_information.email} />
            <InfoItem
              icon={<MapPin className="text-[#7E90FE]" />}
              label="Address"
              value={job.contact_information.address}
            />

            <button
              onClick={handleApply}
              className="w-full bg-[#7E90FE] text-white px-4 py-2 rounded mt-6 hover:bg-[#6A7CE0] transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

type InfoSectionProps = {
  title: string;
  content: string | undefined;
};

const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-3 text-[#1A1A1A]">{title}</h2>
      <p className="text-[#757575]">{content}</p>
    </div>
  );
};

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | undefined;
};

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center mb-3">
      <div className="mr-3">{icon}</div>
      <div>
        <span className="font-medium text-[#474747]">{label}:</span> <span className="text-[#757575]">{value}</span>
      </div>
    </div>
  );
};
