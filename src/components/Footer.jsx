import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
          React.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam
          magnam accusantium cupiditate, ullam totam necessitatibus, dolorum
          debitis aperiam veniam.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-[#00df9a]">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Marketing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Analytics
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Commerce
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Pricing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Guides
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              About
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Blog
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Jobs
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Press
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Claim
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Policy
            </li>
            <li className="py-2 text-sm cursor-pointer hover:text-[#00df9a] hover:translate-y-[-5px] duration-300">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
