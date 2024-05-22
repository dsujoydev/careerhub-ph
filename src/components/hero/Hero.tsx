import { Button } from "../ui/button";
import HeroImg from "../../assets/img1.png";

const Hero = () => {
  return (
    <div className="flex justify-between my-10">
      <div className="">
        <h1 className="text-6xl mt-4">One Step</h1>
        <h1 className="text-6xl mt-4">Closer To Your</h1>
        <h1 className="text-6xl text-[#7E90FE] drop-shadow-md mt-4">Dream Job</h1>

        <p className="text-[#757575] text-sm mt-8">
          Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find
          it. Manage all your job application from start to finish.
        </p>
        <Button className="mt-4" variant="careerhub">
          Get Started
        </Button>
      </div>
      <div className="w-[500px] h-[500px]">
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
