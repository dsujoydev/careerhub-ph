import { BannerProps } from "@/utils/types";

const Banner: React.FC<BannerProps> = ({ header, paragraph }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center text-center my-10">
      <h1 className="text-4xl my-2">{header}</h1>
      <p className="text-sm text-[#757575]">{paragraph}</p>
    </div>
  );
};

export default Banner;
