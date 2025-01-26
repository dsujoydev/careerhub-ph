export type BannerProps = {
  header: string;
  paragraph: string;
};

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
}

export type Category = {
  id: number;
  category_name: string;
  availability: string;
  logo: string;
};

export type Job = {
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

export type InfoSectionProps = {
  title: string;
  content: string | undefined;
};

export type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | undefined;
};
