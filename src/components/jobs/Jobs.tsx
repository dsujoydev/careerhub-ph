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

type jobProps = {
  jobs: Job[];
};

const Jobs: React.FC<jobProps> = ({ jobs }) => {
  return (
    <div>
      {jobs.map((j) => (
        <div key={j.id}>
          <img src={j.logo} alt="" />
          <h1>{j.job_title}</h1>
          <span>{j.company_name}</span>
          <div>
            <span>{j.job_type}</span>
            <span>{j.remote_or_onsite}</span>
          </div>
          <div>
            <span>{j.location}</span>
            <span>{j.salary}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
