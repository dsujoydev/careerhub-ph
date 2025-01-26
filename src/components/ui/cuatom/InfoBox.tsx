import { InfoItemProps, InfoSectionProps } from "@/utils/types";

export const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-3 text-[#1A1A1A]">{title}</h2>
      <p className="text-[#757575]">{content}</p>
    </div>
  );
};

export const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center mb-3">
      <div className="mr-3">{icon}</div>
      <div>
        <span className="font-medium text-[#474747]">{label}:</span> <span className="text-[#757575]">{value}</span>
      </div>
    </div>
  );
};
