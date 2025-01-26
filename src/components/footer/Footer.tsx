import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">CareerHub</h2>
            <p className="mb-4">Your gateway to dream job opportunities.</p>
            <p className="text-sm">© {new Date().getFullYear()} CareerHub. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs" className="hover:text-[#7E90FE] transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-[#7E90FE] transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#7E90FE] transition-colors">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#7E90FE] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resume-tips" className="hover:text-[#7E90FE] transition-colors">
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link to="/interview-prep" className="hover:text-[#7E90FE] transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link to="/career-advice" className="hover:text-[#7E90FE] transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link to="/salary-guide" className="hover:text-[#7E90FE] transition-colors">
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a to="#" className="text-gray-400 hover:text-[#7E90FE]" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a to="#" className="text-gray-400 hover:text-[#7E90FE]" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a to="#" className="text-gray-400 hover:text-[#7E90FE]" aria-label="LinkedIn">
                <LinkedIn size={24} />
              </a>
              <a to="#" className="text-gray-400 hover:text-[#7E90FE]" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
            <p className="text-sm">Stay updated with job alerts and career tips!</p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#7E90FE] focus:border-[#7E90FE]"
              />
              <button className="bg-[#7E90FE] text-white px-4 py-2 rounded-r-md hover:bg-[#6A7CE0] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
