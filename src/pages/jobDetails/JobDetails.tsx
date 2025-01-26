import { useParams, useLoaderData } from "react-router-dom";
import type { Job } from "@/utils/types";
import { Banknote, Briefcase, Phone, Mail, MapPin } from "lucide-react";
import { InfoItem, InfoSection } from "@/components/ui/custom/InfoBox";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const jobs = useLoaderData() as Job[];
  const jobId = Number(id);
  const job = jobs.find((j) => j.id === jobId);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
